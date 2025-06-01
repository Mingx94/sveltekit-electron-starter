import { err, ok, type Result } from "@shared/utils/result";
import { ipcMain } from "electron";

type RandomError = { type: "RANDOM_ERROR" };

export class ExampleService {
	public async ping(message: string) {
		console.log("pong: ", message);
		return "pong: " + message;
	}

	public async random(): Promise<Result<number, RandomError>> {
		const random = Math.random();

		if (random < 0.5) {
			return err({ type: "RANDOM_ERROR" });
		}

		return ok(random);
	}
}

export function registerExampleService() {
	const exampleService = new ExampleService();

	ipcMain.handle("example:ping", (_event, ...args: Parameters<ExampleService["ping"]>) =>
		exampleService.ping(...args)
	);

	ipcMain.handle("example:random", (_event, ...args: Parameters<ExampleService["random"]>) =>
		exampleService.random(...args)
	);
}
