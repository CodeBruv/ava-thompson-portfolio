import { Project } from "@/data/projects";

// Simulate async API delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

let projects: Project[] = [];

export const initProjects = (data: Project[]) => {
  projects = [...data];
};

export const getProjects = async (): Promise<Project[]> => {
  await delay(300);
  return [...projects];
};

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  await delay(200);
  return projects.find((p) => p.slug === slug);
};

export const createProject = async (data: Omit<Project, "id">): Promise<Project> => {
  await delay(300);
  const newProject: Project = { ...data, id: crypto.randomUUID() };
  projects = [newProject, ...projects];
  return newProject;
};

export const updateProject = async (id: string, data: Partial<Project>): Promise<Project> => {
  await delay(300);
  projects = projects.map((p) => (p.id === id ? { ...p, ...data } : p));
  const updated = projects.find((p) => p.id === id);
  if (!updated) throw new Error("Project not found");
  return updated;
};

export const deleteProject = async (id: string): Promise<void> => {
  await delay(200);
  projects = projects.filter((p) => p.id !== id);
};
