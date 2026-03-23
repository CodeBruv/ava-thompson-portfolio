import { Inbox } from "lucide-react";

const EmptyState: React.FC<{ title?: string; message?: string }> = ({
  title = "No projects yet",
  message = "Projects will appear here once added.",
}) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <Inbox size={48} className="text-muted-foreground/40 mb-4" />
    <h3 className="font-heading text-xl text-foreground">{title}</h3>
    <p className="mt-1 text-sm text-muted-foreground">{message}</p>
  </div>
);

export default EmptyState;
