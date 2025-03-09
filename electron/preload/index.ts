import { electronAPI } from "@electron-toolkit/preload";
import { contextBridge, ipcRenderer } from "electron";

import { ExampleService } from "../main/services/example.service";

const api = {
	preload: () => console.log("Preload function called"),
	ping: invoke<ExampleService["ping"]>("example:ping")
};

export type Api = typeof api;

contextBridge.exposeInMainWorld("api", api);
contextBridge.exposeInMainWorld("electron", electronAPI);

/**
 * Invokes an IPC channel with type safety
 *
 * @typeParam T - The method signature
 * @param channel - IPC channel name to invoke
 * @returns Function that invokes the channel with type safety
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function invoke<T extends (...args: any[]) => Promise<unknown>>(channel: string) {
	return (...args: Parameters<T>) => ipcRenderer.invoke(channel, ...args) as ReturnType<T>;
}
