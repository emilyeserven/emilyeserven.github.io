import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const TanStackRouterDevtools
  = import.meta.env.PROD
    ? () => null
    : lazy(() =>
        import("@tanstack/react-router-devtools").then(res => ({
          default: res.TanStackRouterDevtools,
        })),
      );

function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
