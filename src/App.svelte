<script lang="ts">
  import {
    Label,
    Input,
    Radio,
    Checkbox,
    Textarea,
    Button,
  } from "flowbite-svelte";
  import { DateInput } from "date-picker-svelte";

  import {
    name,
    email,
    date,
    age,
    gender,
    isEverUsedSvelte,
    description,
  } from "./stores";

  let genderSelection: string = "Male";
</script>

<main class="pb-6">
  <h1 class="text-blue-600 text-2xl font-bold text-center">
    Hello From Svelte
  </h1>
  <div class="flex flex-col justify-center items-center max-w-md mx-auto mt-4">
    <h1 class="text-blue-800 text-3xl font-bold text-center">Form</h1>
    <form method="post" class="flex flex-col justify-center w-full gap-3">
      <div class="flex flex-col gap-1">
        <Label for="name">Name</Label>
        <Input
          type="text"
          id="name"
          bind:value={$name}
          placeholder="Your Name"
          required
          class="rounded-md"
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          bind:value={$email}
          placeholder="Your Email"
          required
          class="rounded-md"
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="email">Email</Label>
        <DateInput
          bind:value={$date}
          format="yyyy-MM-dd"
          required
          closeOnSelection
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="age">Age</Label>
        <Input
          type="number"
          id="age"
          bind:value={$age}
          placeholder="Your Age"
          required
          class="rounded-md"
        />
      </div>
      <div class="flex flex-col gap-1">
        <Label for="gender">Gender</Label>
        <Radio name="gender" value="male" bind:group={$gender} class="gap-2"
          >Male</Radio
        >
        <Radio name="gender" value="female" bind:group={$gender} class="gap-2"
          >Female</Radio
        >
      </div>
      <div class="flex flex-col gap-1">
        <Label for="haveUseSvelte">Have you ever used Svelte?</Label>
        <Checkbox bind:checked={$isEverUsedSvelte} class="gap-2">Yes</Checkbox>
      </div>
      <div class="flex flex-col gap-1">
        <Label for="desc">Describe about you</Label>
        <Textarea
          id="desc"
          placeholder="About me"
          bind:value={$description}
          rows="4"
          name="description"
          class="rounded-md"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
    <p>
      Name: {$name}, Email: {$email}, Date of Birth: {$date}, Age: {$age},
      Gender: {$gender}, isEverUsedSvelte: {$isEverUsedSvelte}, Description: {$description}
    </p>
  </div>
</main>

<style></style>
