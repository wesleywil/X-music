<script lang="ts">
  import {
    search_results_musics,
    search_results_artists,
    search_option,
  } from "../store";
  import axios from "axios";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";

  export let searchInput: string = "";

  let option: boolean;
  search_option.subscribe((value) => {
    option = value;
  });

  const onToggle = () => {
    search_option.set(!option);
    console.log(option);
    search_results_artists.set([]);
    search_results_musics.set([]);
  };

  const searchMusic = async () => {
    const res = await axios.get("https://spotify23.p.rapidapi.com/search/", {
      params: {
        q: searchInput,
        type: "multi",
        offset: "0",
        limit: "20",
        numberOfTopResults: "20",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    });
    console.log("RESULTS => ", res.data);
    if (!option) {
      search_results_musics.set(res.data.tracks.items);
      console.log("MUSIC LIST ===> ", res.data.tracks.items);
    } else {
      search_results_artists.set(res.data.artists.items);
      console.log("ARTISTS LIST ==> ", res.data.artists.items);
    }
  };
</script>

<div class="flex flex-col gap-2 justify-center p-2">
  <div class="flex gap-2 justify-center">
    <span>Music</span>
    <input
      type="checkbox"
      class="toggle toggle-lg bgmd-color"
      on:click={onToggle}
    />
    <span>Artist</span>
  </div>
  <div class="flex gap-0">
    <input
      bind:value={searchInput}
      type="text"
      placeholder="Search Artist/Music"
      class="pl-2 rounded-l w-full font-semibold bglg-color dk-color"
    />
    <button on:click={searchMusic} class="search_btn"><FaSearch /></button>
  </div>
</div>

<style>
  .search_btn {
    font-weight: bold;
    padding: 0 0.6rem;
    border-radius: 0 4px 4px 0;
    background-color: var(--mid-color);
    color: var(--dark-color);
    width: 50px;
    height: 50px;
  }
  .search_btn:hover {
    opacity: 80%;
  }
</style>
