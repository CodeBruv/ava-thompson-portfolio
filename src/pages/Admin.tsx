import { useState } from "react";
import { useProjects } from "@/context/ProjectContext";
import { Project } from "@/data/projects";
import FormInput from "@/components/FormInput";
import EmptyState from "@/components/EmptyState";
import { Plus, Pencil, Trash2, LayoutDashboard, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type View = "list" | "form";

const emptyForm: Omit<Project, "id"> = {
  slug: "", title: "", description: "", thumbnail: "", role: "", timeline: "",
  tools: [], problem: "", research: "", process: "", solution: "", outcome: "",
};

const Admin = () => {
  const { projects, loading, addProject, editProject, removeProject } = useProjects();
  const [view, setView] = useState<View>("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [toolsInput, setToolsInput] = useState("");
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setToolsInput("");
    setView("form");
  };

  const openEdit = (p: Project) => {
    setEditingId(p.id);
    setForm({ ...p });
    setToolsInput(p.tools.join(", "));
    setView("form");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const data = { ...form, tools: toolsInput.split(",").map((t) => t.trim()).filter(Boolean) };
    if (editingId) {
      await editProject(editingId, data);
    } else {
      const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      await addProject({ ...data, slug });
    }
    setSaving(false);
    setView("list");
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Delete this project?")) {
      await removeProject(id);
    }
  };

  const fields: { label: string; name: keyof typeof emptyForm; type?: "text" | "textarea"; required?: boolean }[] = [
    { label: "Title", name: "title", required: true },
    { label: "Slug", name: "slug" },
    { label: "Description", name: "description", type: "textarea", required: true },
    { label: "Thumbnail URL", name: "thumbnail" },
    { label: "Role", name: "role" },
    { label: "Timeline", name: "timeline" },
    { label: "Problem", name: "problem", type: "textarea" },
    { label: "Research", name: "research", type: "textarea" },
    { label: "Process", name: "process", type: "textarea" },
    { label: "Solution", name: "solution", type: "textarea" },
    { label: "Outcome", name: "outcome", type: "textarea" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-56 border-r border-border bg-card p-5 flex flex-col gap-6 shrink-0 hidden md:flex">
        <div>
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft size={12} /> Back to site
          </Link>
          <h2 className="font-heading text-lg">Admin</h2>
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => setView("list")}
            className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
              view === "list" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-secondary/50"
            }`}
          >
            <LayoutDashboard size={15} /> Projects
          </button>
          <button
            onClick={openNew}
            className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
              view === "form" && !editingId ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-secondary/50"
            }`}
          >
            <Plus size={15} /> Add New
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <Link to="/" className="text-xs text-muted-foreground">← Site</Link>
          <div className="flex gap-2">
            <button onClick={() => setView("list")} className="text-xs px-3 py-1 rounded-md bg-secondary text-secondary-foreground">Projects</button>
            <button onClick={openNew} className="text-xs px-3 py-1 rounded-md bg-primary text-primary-foreground">+ New</button>
          </div>
        </div>

        {view === "list" ? (
          <div>
            <h1 className="font-heading text-2xl mb-6">All Projects</h1>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse h-16 bg-muted rounded-md" />
                ))}
              </div>
            ) : projects.length === 0 ? (
              <EmptyState title="No projects" message="Create your first project to get started." />
            ) : (
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-4 rounded-md border border-border bg-card">
                    <div className="flex items-center gap-3 min-w-0">
                      {p.thumbnail && (
                        <img src={p.thumbnail} alt="" className="w-12 h-12 rounded object-cover shrink-0" />
                      )}
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-foreground truncate">{p.title}</h3>
                        <p className="text-xs text-muted-foreground truncate">{p.role} · {p.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => openEdit(p)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Edit">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors" aria-label="Delete">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-[650px]">
            <h1 className="font-heading text-2xl mb-6">{editingId ? "Edit Project" : "New Project"}</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((f) => (
                <FormInput
                  key={f.name}
                  label={f.label}
                  name={f.name}
                  value={typeof form[f.name] === "string" ? (form[f.name] as string) : ""}
                  onChange={handleChange}
                  type={f.type}
                  required={f.required}
                />
              ))}
              <FormInput
                label="Tools (comma separated)"
                name="tools"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                placeholder="Figma, Miro, UserTesting"
              />
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
                >
                  {saving ? "Saving…" : editingId ? "Update Project" : "Create Project"}
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-border px-6 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
