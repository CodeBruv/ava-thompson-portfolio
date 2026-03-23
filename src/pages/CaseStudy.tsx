import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CaseStudySection from "@/components/CaseStudySection";
import { useProjects } from "@/context/ProjectContext";
import { Project } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getBySlug } = useProjects();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getBySlug(slug).then((p) => {
      setProject(p || null);
      setLoading(false);
    });
  }, [slug, getBySlug]);

  if (loading) {
    return (
      <Layout>
        <div className="section-container">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="aspect-[16/9] bg-muted rounded-md mt-8" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="section-container text-center py-32">
          <h1 className="font-heading text-3xl mb-2">Project not found</h1>
          <p className="text-muted-foreground mb-6">The case study you're looking for doesn't exist.</p>
          <Link to="/" className="text-sm text-foreground underline underline-offset-4">← Back to work</Link>
        </div>
      </Layout>
    );
  }

  const sections = [
    { label: "01", title: "Problem", content: project.problem },
    { label: "02", title: "Research", content: project.research },
    { label: "03", title: "Process", content: project.process },
    { label: "04", title: "Solution", content: project.solution },
    { label: "05", title: "Outcome", content: project.outcome },
  ];

  return (
    <Layout>
      <article className="section-container">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Back to work
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight">{project.title}</h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-[600px] leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6 text-sm">
          <div><span className="text-muted-foreground">Role:</span> <span className="text-foreground">{project.role}</span></div>
          <div><span className="text-muted-foreground">Timeline:</span> <span className="text-foreground">{project.timeline}</span></div>
          <div><span className="text-muted-foreground">Tools:</span> <span className="text-foreground">{project.tools.join(", ")}</span></div>
        </div>

        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full aspect-[16/9] object-cover rounded-md mt-10"
        />

        <div className="mt-10">
          {sections.map((s) => (
            <CaseStudySection key={s.label} label={s.label} title={s.title} content={s.content} />
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudy;
