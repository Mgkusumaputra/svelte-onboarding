import { writable } from "svelte/store";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export const localStore = (key: string, initial: JsonValue) => {
  const toString = (value: JsonValue) => JSON.stringify(value, null, 1);
  const toObj = JSON.parse;

  const storedItem = localStorage.getItem(key);
  const saved = storedItem !== null ? toObj(storedItem) : initial;

  if (storedItem === null) {
    localStorage.setItem(key, toString(initial));
  }

  const { subscribe, set, update } = writable(saved);

  return {
    subscribe,
    set: (value: JsonValue) => {
      localStorage.setItem(key, toString(value));
      return set(value);
    },
    update,
  };
};
