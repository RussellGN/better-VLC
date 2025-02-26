import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";

/** @type {import('eslint').Linter.Config[]} */
export default [
   ...pluginQuery.configs["flat/recommended"],
   { ignores: ["src-tauri/"] },
   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
   { languageOptions: { globals: globals.browser } },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
   {
      settings: {
         react: {
            version: "detect",
         },
      },
      rules: {
         "react/react-in-jsx-scope": "off",
      },
   },
];
