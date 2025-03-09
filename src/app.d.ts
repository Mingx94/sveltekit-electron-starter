import type { ElectronAPI } from "@electron-toolkit/preload";

import type { Api } from "../electron/preload";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Window {
		api: Api;
		electron: ElectronAPI;
	}
}

export {};
