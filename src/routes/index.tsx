import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Emily Serven</h1>
      <p className="mt-4 text-lg text-gray-600">Site under construction.</p>
    </div>
  );
}
