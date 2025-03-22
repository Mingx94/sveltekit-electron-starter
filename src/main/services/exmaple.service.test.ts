import { beforeEach, describe, expect, test } from "vitest";

import { ExampleService } from "./example.service";

describe("ExampleService", () => {
	let exampleService: ExampleService;

	beforeEach(() => {
		exampleService = new ExampleService();
	});

	test("should pong", async () => {
		const message = "ping";
		const response = await exampleService.ping(message);
		expect(response).toBe("pong: " + message);
	});
});
