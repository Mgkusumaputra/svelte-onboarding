<script lang="ts">
	export let datas: {
		id: number;
		name: string;
		email: string;
		dateOfBirth: string;
		age: number;
		gender: string;
		usedSvelte: boolean;
		description: string;
	}[] = [];

	let totalDatas = datas.length;
</script>

<div class="flex flex-col text-center gap-3 mt-5">
	<p>Data Length: {totalDatas}</p>
	{#each datas as data (data.id)}
		<p>
			{data.id}.
			<b>Name:</b>
			{data.name}, <b>Email:</b>
			{data.email}, <b>Date of Birth:</b>
			{data.dateOfBirth}, <b>Age:</b>
			{data.age},
			<b>Gender:</b>
			{data.gender}, <b>isEverUsedSvelte:</b>
			{data.usedSvelte}, <b>Description:</b>
			{data.description}
		</p>
	{:else}
		<p>Zero data</p>
	{/each}
</div>
