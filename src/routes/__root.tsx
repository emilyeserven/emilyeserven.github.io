import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
