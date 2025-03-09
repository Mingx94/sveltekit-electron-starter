<script lang="ts">
	function logFromPreload() {
		window.api.preload();
	}

	async function logFromMain() {
		const res = await window.api.ping("Hello");
		console.log(res);
	}
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800 text-white"
>
	<h1 class="text-4xl font-bold">Welcome to SvelteKit + Electron</h1>
	<a href="/settings" class="mb-10 text-blue-500 underline">Go to settings</a>

	<div class="mt-4 flex gap-12">
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
	</div>
</div>
