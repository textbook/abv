/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
	base: "/abv/",
	build: {
		outDir: "build/",
	},
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: [
			"@testing-library/jest-dom",
		],
		include: ["src/**/*.test.tsx"],
	},
});
