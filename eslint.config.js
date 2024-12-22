import cyf from "@codeyourfuture/eslint-config-standard";
import vitest from "@vitest/eslint-plugin";
import cypress from "eslint-plugin-cypress/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import typescript from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.es2020,
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	cyf,
	...typescript.configs.strict,
	...typescript.configs.stylistic,
	react.configs.flat.recommended,
	react.configs.flat["jsx-runtime"],
	jsxA11y.flatConfigs.recommended,
	{
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"error",
				{
					"allowConstantExport": true,
				},
			],
		},
	},
	{
		files: ["src/**/*.test.tsx"],
		plugins: { vitest },
		"rules": {
			"vitest/expect-expect": "error",
			"vitest/no-commented-out-tests": "error",
			"vitest/no-identical-title": "error",
			"vitest/no-import-node-test": "error",
			"vitest/valid-describe-callback": "error",
			"vitest/valid-expect": "error",
			"vitest/valid-title": "error",
		},
	},
	{
		files: ["e2e/**/*.ts"],
		...cypress.configs.recommended,
	},
	{
		files: ["e2e/**/*.ts"],
		...testingLibrary.configs["flat/dom"],
		rules: {
			...testingLibrary.configs["flat/dom"].rules,
			"testing-library/await-async-queries": "off",
			"testing-library/prefer-screen-queries": "off",
		},
	},
	{
		ignores: [
			"build/",
			"coverage/",
		],
	},
];
