import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "src/routeTree.gen.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["src/routes/**/*.tsx", "src/components/shad/**/*.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  storybook.configs["flat/recommended"],
  {
    ...stylistic.configs.customize({
      indent: 2,
      quotes: "double",
      semi: true,
      jsx: true,
    }),
    files: ["**/*.{ts,tsx}"],
    ignores: ["src/components/shad/**"],
  },
);
