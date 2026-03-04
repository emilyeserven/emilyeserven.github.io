import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/ui/PageTitle";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-lg text-muted-foreground">Coming soon.</p>
      </div>
    </>
  );
}
