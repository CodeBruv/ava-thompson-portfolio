const LoadingState: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid gap-10 md:grid-cols-2">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="bg-muted rounded-md aspect-[16/10]" />
        <div className="mt-4 h-5 bg-muted rounded w-3/4" />
        <div className="mt-2 h-4 bg-muted rounded w-full" />
        <div className="mt-2 h-3 bg-muted rounded w-1/2" />
      </div>
    ))}
  </div>
);

export default LoadingState;
