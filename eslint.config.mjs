import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

import svelteConfig from "./svelte.config.js";

export default typescriptEslint.config(
	js.configs.recommended,
	prettier,
	...typescriptEslint.configs.recommended,
	...svelte.configs["flat/recommended"],
	...svelte.configs["flat/prettier"],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			ecmaVersion: 2020,
			sourceType: "module",

			parserOptions: {
				extraFileExtensions: [".svelte"]
			}
		}
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],

		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: [".svelte"],
				parser: typescriptEslint.parser,
				svelteConfig
			}
		}
	},
	{
		plugins: {
			"simple-import-sort": simpleImportSort
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			quotes: ["error", "double"],
			semi: ["error", "always"],
			"object-curly-spacing": ["error", "always"],
			"multiline-ternary": ["error", "always-multiline"]
		}
	},
	{
		ignores: [
			"**/node_modules",
			"**/dist",
			"**/out",
			"**/.gitignore",
			"**/.DS_Store",
			"**/node_modules",
			"build",
			".svelte-kit",
			"package",
			"**/.env",
			"**/.env.*",
			"!**/.env.example",
			"**/pnpm-lock.yaml",
			"**/package-lock.json",
			"**/yarn.lock",
			"eslint.config.js"
		]
	}
);
