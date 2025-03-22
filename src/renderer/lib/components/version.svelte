<script lang="ts">
</script>

<div class="fixed inset-x-0 bottom-2 mx-auto flex w-fit gap-4">
	<div>
		platform:
		{window.electron.process.platform}
	</div>

	<div>
		node:
		{window.electron.process.versions.node}
	</div>

	<div>
		chrome:
		{window.electron.process.versions.chrome}
	</div>
</div>
