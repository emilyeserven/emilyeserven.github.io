import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { createElement } from "react";
import "../src/App.css";

const rootRoute = createRootRoute({ component: () => null });
const router = createRouter({
  routeTree: rootRoute,
  history: createMemoryHistory({ initialEntries: ["/"] }),
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // TODO(#42): Enable a11y checks before site goes live
      test: "todo",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => {
      rootRoute.update({ component: Story });
      return createElement(RouterProvider, { router });
    },
  ],
};

export default preview;
