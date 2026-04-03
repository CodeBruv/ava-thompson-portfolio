import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import { useProjects } from "@/context/ProjectContext";

const Index = () => {
  const { projects, loading, error } = useProjects();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-container pb-0 md:pb-0">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">UX Designer</p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-balance max-w-[700px]">
          Designing thoughtful digital experiences
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-[550px] leading-relaxed">
          I'm Ava Thompson, a mid-level UX designer who turns complex problems into clear, human-centered solutions.
        </p>
      </section>

      {/* Work */}
      <section className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-8">Recent Work</p>

        {loading && <LoadingState />}
        {error && <p className="text-destructive">{error}</p>}
        {!loading && !error && projects.length === 0 && <EmptyState />}
        {!loading && !error && projects.length > 0 && (
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Index;
