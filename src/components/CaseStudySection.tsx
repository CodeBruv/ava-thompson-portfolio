interface CaseStudySectionProps {
  label: string;
  title: string;
  content: string;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ label, title, content }) => (
  <section className="py-10 md:py-14 border-t border-border">
    <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">{label}</p>
    <h2 className="font-heading text-2xl md:text-3xl mb-4">{title}</h2>
    <p className="text-muted-foreground leading-relaxed max-w-[700px]">{content}</p>
  </section>
);

export default CaseStudySection;
