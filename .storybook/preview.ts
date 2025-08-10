import type { Preview } from '@storybook/react-vite'

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/App.css";
const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
      attributeName: "class",
    }),
  ],
};

export default preview;