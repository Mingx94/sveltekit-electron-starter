<script lang="ts">
	import { ok } from "$shared/utils/result";

	function logFromPreload() {
		window.api.preload();
	}

	async function logFromMain() {
		const res = await window.api.ping("Hello");
		console.log(ok(res));
	}

	let num = $state("");

	async function random() {
		const result = await window.api.random();

		if (result.isOk) {
			num = result.data.toString();
		} else {
			num = result.error.type;
		}
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center text-white">
	<h1 class="text-4xl font-bold">Welcome to SvelteKit + Electron</h1>
	<a href="/settings" class="mb-10 text-blue-500 underline">Go to settings</a>

	<div class="mt-4 flex flex-col gap-12">
		<div class="w-80">
			<p class="mb-2">Test the preload context functionality</p>

			<button
				class="w-full cursor-pointer rounded-lg bg-amber-500 py-2 font-medium hover:bg-amber-600"
				onclick={logFromPreload}
			>
				Test Preload
			</button>

			<span class="w-full text-sm opacity-75">
				Console <strong>(F12)</strong>
			</span>
		</div>

		<div class="w-80">
			<p class="mb-2">Test the main process functionality</p>

			<button
				class="w-full cursor-pointer rounded-lg bg-emerald-500 py-2 font-medium hover:bg-emerald-600"
				onclick={logFromMain}
			>
				Test Main
			</button>
		</div>

		<div class="w-80">
			<p class="mb-2">Test result api</p>

			<button
				class="w-full cursor-pointer rounded-lg bg-fuchsia-500 py-2 font-medium hover:bg-fuchsia-600"
				onclick={random}
			>
				Random
			</button>

			<span class="w-full text-sm opacity-75">
				Result: <strong>{num}</strong>
			</span>
		</div>
	</div>
</div>
