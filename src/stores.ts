import { writable } from "svelte/store";

// const isoDate = new Date();

export const name = writable("");
export const email = writable("");
export const date = writable(new Date());
export const age = writable(18);
export const gender = writable("");
export const isEverUsedSvelte = writable(false);
export const description = writable("");