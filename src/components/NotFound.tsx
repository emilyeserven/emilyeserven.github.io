import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-4 inline-block text-primary underline">
        Go home
      </Link>
    </div>
  );
}
