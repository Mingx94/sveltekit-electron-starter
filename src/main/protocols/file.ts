import url from "node:url";

import { net } from "electron";

// Custom file protocol which works with sveltekit

const PROTOCOL_NAME = "fs";

export function registerFileProtocolSchema(protocol: Electron.Protocol) {
	protocol.registerSchemesAsPrivileged([
		{ scheme: PROTOCOL_NAME, privileges: { bypassCSP: true } }
	]);
}

export function registerFileProtocolHandler(protocol: Electron.Protocol) {
	protocol.handle(PROTOCOL_NAME, (request) => {
		const filePath = request.url.slice(`${PROTOCOL_NAME}://`.length);
		const fileUrl = url.pathToFileURL(filePath).toString();
		return net.fetch(fileUrl);
	});
}
