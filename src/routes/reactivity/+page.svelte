<script lang="ts">
	import { Alert, Button } from 'flowbite-svelte';

	let count = 0;

	function handleClick() {
		if (count <= 19) {
			count += 1;
		} else {
			alert('Emotes reach the limit');
			count = 0;
		}
	}
</script>

<div class="h-screen flex items-center justify-center">
	<Button on:click={handleClick}>
		🎉 {count}
		{count === 1 ? 'Emoji' : 'Emojis'}
	</Button>
</div>
