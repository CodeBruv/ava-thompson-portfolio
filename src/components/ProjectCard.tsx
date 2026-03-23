import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Link
    to={`/work/${project.slug}`}
    className="group block animate-fade-in"
    style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
  >
    <div className="overflow-hidden rounded-md bg-card">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
    <div className="mt-4 flex items-start justify-between gap-2">
      <div>
        <h3 className="font-heading text-lg md:text-xl text-foreground group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
      <ArrowUpRight
        size={18}
        className="mt-1 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
      />
    </div>
    <div className="mt-2 flex gap-2 flex-wrap">
      <span className="text-xs text-muted-foreground">{project.role}</span>
      <span className="text-xs text-muted-foreground">·</span>
      <span className="text-xs text-muted-foreground">{project.timeline}</span>
    </div>
  </Link>
);

export default ProjectCard;
