import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Project, initialProjects } from "@/data/projects";
import * as api from "@/services/projectService";

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  addProject: (data: Omit<Project, "id">) => Promise<Project>;
  editProject: (id: string, data: Partial<Project>) => Promise<void>;
  removeProject: (id: string) => Promise<void>;
  getBySlug: (slug: string) => Promise<Project | undefined>;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export const useProjects = () => {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectProvider");
  return ctx;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (!initialized) {
        api.initProjects(initialProjects);
        setInitialized(true);
      }
      const data = await api.getProjects();
      setProjects(data);
    } catch {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, [initialized]);

  useEffect(() => { refresh(); }, [refresh]);

  const addProject = async (data: Omit<Project, "id">) => {
    const p = await api.createProject(data);
    await refresh();
    return p;
  };

  const editProject = async (id: string, data: Partial<Project>) => {
    await api.updateProject(id, data);
    await refresh();
  };

  const removeProject = async (id: string) => {
    await api.deleteProject(id);
    await refresh();
  };

  const getBySlug = (slug: string) => api.getProjectBySlug(slug);

  return (
    <ProjectContext.Provider value={{ projects, loading, error, refresh, addProject, editProject, removeProject, getBySlug }}>
      {children}
    </ProjectContext.Provider>
  );
};
