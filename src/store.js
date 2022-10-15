import { writable } from "svelte/store";

export const id_music = writable("");
export const show = writable(false);
export const search_results_musics = writable([]);
export const search_results_artists = writable([]);
export const search_option = writable(false);
