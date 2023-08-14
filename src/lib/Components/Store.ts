import { writable } from "svelte/store";

export enum Dir {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export const dir = writable(Dir.DOWN)