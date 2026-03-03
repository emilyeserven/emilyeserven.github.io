import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
      <p className="mt-4 text-lg text-muted-foreground">Coming soon.</p>
    </div>
  );
}
