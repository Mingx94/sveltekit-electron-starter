import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: "out/svelte",
			assets: "out/svelte"
		}),
		files: {
			// assets: "src/renderer/assets",
			hooks: {
				client: "src/renderer/hooks.client",
				server: "src/renderer/hooks.server",
				universal: "src/renderer/hooks"
			},
			lib: "src/renderer/lib",
			params: "src/renderer/params",
			routes: "src/renderer/routes",
			serviceWorker: "src/renderer/service-worker",
			appTemplate: "src/renderer/app.html",
			errorTemplate: "src/renderer/error.html"
		},
		alias: {
			$shared: "src/shared"
		}
	}
};

export default config;
