<script lang="ts">
  import { search_results } from "../store";
  import axios from "axios";

  export let searchInput: string = "";

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
    console.log("RESULTS => ", res.data.tracks.items);
    search_results.set(res.data.tracks.items);
  };
</script>

<div class="flex gap-0 justify-center p-2">
  <input
    bind:value={searchInput}
    type="text"
    placeholder="search music"
    class="rounded-l w-full font-semibold bglg-color dk-color"
  />
  <button on:click={searchMusic} class="search_btn">Search</button>
</div>

<style>
  .search_btn {
    font-weight: bold;
    padding: 0 0.6rem;
    border-radius: 0 4px 4px 0;
    background-color: var(--mid-color);
    color: var(--dark-color);
  }
  .search_btn:hover {
    opacity: 80%;
  }
  @media (max-width: 420px) {
    .search_btn {
      width: 100px;
      font-size: 1.2rem;
    }
  }
</style>
