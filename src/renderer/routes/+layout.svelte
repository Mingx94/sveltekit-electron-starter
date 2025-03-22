<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<div class="fixed top-0 h-10 w-full [app-region:drag]"></div>
{@render children()}
