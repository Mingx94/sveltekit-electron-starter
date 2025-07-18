import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";

const config = defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		build: {
			outDir: "out/electron/main",
			lib: {
				formats: ["es"],
				entry: "./src/main/index.ts"
			}
		},
		resolve: {
			alias: {
				"@shared": resolve("src/shared")
			}
		}
	},
	preload: {
		plugins: [
			externalizeDepsPlugin({
				exclude: ["@electron-toolkit/preload"]
			})
		],
		resolve: {
			alias: {
				"@shared": resolve("src/shared")
			}
		},
		build: {
			outDir: "out/electron/preload",
			lib: {
				formats: ["cjs"],
				entry: "./src/preload/index.ts"
			}
		}
	},
	renderer: {
		plugins: [sveltekit(), tailwindcss()],
		resolve: {
			alias: {
				"@renderer": resolve("src")
			}
		},
		build: {
			target: ["esnext"]
		}
	}
});
export default config;
