import { ipcMain } from "electron";

export class ExampleService {
	public async ping(message: string) {
		console.log("pong: ", message);
		return "pong: " + message;
	}
}

export function registerExampleService() {
	const exampleService = new ExampleService();

	ipcMain.handle("example:ping", (_event, ...args: Parameters<ExampleService["ping"]>) =>
		exampleService.ping(...args)
	);
}
