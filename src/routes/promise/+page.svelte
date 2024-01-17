<script lang="ts">
	import { Button } from 'flowbite-svelte';
	let disabled = false;
	let promise: Promise<User[]> = Promise.resolve([]);

	interface User {
		login: string;
	}

	const getData = (): Promise<User[]> => {
		return new Promise((resolve, reject) => {
			fetch('https://api.github.com/users?per_page=10')
				.then((response) => response.json())
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		});
	};

	function handleClick() {
		promise = getData();
		disabled = true;
	}

	console.log(getData());
</script>

<div class="h-screen flex flex-col items-center justify-center">
	<Button on:click={handleClick} {disabled}>Load Users</Button>
	<div class="flex flex-col text-center">
		{#await promise}
			<p>Loading Data..</p>
		{:then users}
			{#each users as { login } (login)}
				<p>{login}</p>
			{/each}
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div>
</div>
