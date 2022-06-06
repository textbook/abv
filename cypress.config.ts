import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000",
		specPattern: "e2e/integration/*.test.ts",
		supportFile: "e2e/support/index.ts",
	},
	downloadsFolder: "e2e/downloads/",
	fixturesFolder: "e2e/fixtures/",
	screenshotsFolder: "e2e/screenshots/",
	video: false,
	videosFolder: "e2e/videos/",
});
