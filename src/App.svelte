<script lang="ts">
  import Input from "./components/input.svelte";

  import { datas } from "./stores";

  let genderSelection: string = "Male";

  console.log("datas store - datas:", datas);
  console.log("datas store content - $datas:", $datas);
</script>

<main class="pb-6">
  <h1 class="text-blue-600 text-2xl font-bold text-center">
    Hello From Svelte
  </h1>
  <div class="flex flex-col justify-center items-center max-w-md mx-auto mt-4">
    <h1 class="text-blue-800 text-3xl font-bold text-center">Form Data</h1>
    <Input bind:datas={$datas} />
  </div>
</main>

<style></style>
