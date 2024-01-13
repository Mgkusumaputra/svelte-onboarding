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

  let newDataId: number;
  $: {
    if (totalDatas === 0) {
      newDataId = 1;
    } else {
      newDataId = Math.max(...datas.map((t) => t.id)) + 1;
    }
  }

  let dateInput = new Date();
  function formatDate(date: string | number | Date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let name = "";
  let email = "";
  let date = formatDate(dateInput);
  let age = 0;
  let gender = "";
  let usedSvelte = false;
  let description = "";

  function addDatas() {
    datas = [
      ...datas,
      {
        id: newDataId,
        name: name,
        email: email,
        dateOfBirth: date,
        age: age,
        gender: gender,
        usedSvelte: usedSvelte,
        description: description,
      },
    ];
    name = "";
    email = "";
    date = formatDate(dateInput);
    age = 0;
    gender = "";
    usedSvelte = false;
    description = "";
  }
</script>

<form
  on:submit|preventDefault={addDatas}
  class="flex flex-col justify-center w-full gap-3"
>
  <div class="flex flex-col gap-1">
    <Label for="name">Name</Label>
    <Input
      type="text"
      id="name"
      bind:value={name}
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
      bind:value={email}
      placeholder="Your Email"
      required
      class="rounded-md"
    />
  </div>
  <div class="flex flex-col gap-1">
    <Label for="email">Date of Birth</Label>
    <DateInput
      bind:value={dateInput}
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
      bind:value={age}
      placeholder="Your Age"
      required
      class="rounded-md"
    />
  </div>
  <div class="flex flex-col gap-1">
    <Label for="gender">Gender</Label>
    <Radio name="gender" value="male" bind:group={gender} class="gap-2"
      >Male</Radio
    >
    <Radio name="gender" value="female" bind:group={gender} class="gap-2"
      >Female</Radio
    >
  </div>
  <div class="flex flex-col gap-1">
    <Label for="haveUseSvelte">Have you ever used Svelte?</Label>
    <Checkbox bind:checked={usedSvelte} class="gap-2">Yes</Checkbox>
  </div>
  <div class="flex flex-col gap-1">
    <Label for="desc">Describe about you</Label>
    <Textarea
      id="desc"
      placeholder="About me"
      bind:value={description}
      rows="4"
      name="description"
      class="rounded-md"
    />
  </div>
  <Button type="submit">Submit</Button>
</form>

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
