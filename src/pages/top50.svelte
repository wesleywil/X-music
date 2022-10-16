<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import FaRedo from "svelte-icons/fa/FaRedo.svelte";

  import ArtistCard from "../components/ArtistCard.svelte";
  import Player from "../components/Player.svelte";

  let data = [];

  onMount(async () => {
    const res = await axios.get(
      "https://spotify23.p.rapidapi.com/playlist_tracks/",
      {
        params: { id: "37i9dQZEVXbMDoHDwVN2tF", offset: "0", limit: "50" },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      }
    );
    console.log("INFOS => ", res);
    data = res.data.items;
  });
</script>

<div class="flex flex-col p-4  align-center items-center screen_size">
  <div
    class="mx-auto self-center text-3xl text-center lg-color flex flex-col gap-2  m-2 p-4 pl-8 xl:w-1/2 md:w-2/3"
  >
    <h1 class="text-8xl font-bold">
      <span class="md-color">TOP</span>-50
    </h1>
    <h2>Artists - Bands - Groups</h2>
  </div>
  <div class="flex flex-wrap justify-center gap-2">
    {#each data as new_obj (new_obj.track.id)}
      <ArtistCard
        artist_name={new_obj.track.artists[0].name}
        artist_music={new_obj.track.name}
        img={new_obj.track.album.images[1].url}
        message={new_obj.track.id}
      />
    {:else}
      <h1 class="w-2/4 mt-24 loading p-8 rounded-full"><FaRedo /></h1>
    {/each}
  </div>
  <div class="player_pos" id="player_comp">
    <Player />
  </div>
</div>

<style>
  .screen_size {
    min-height: 92vh;
    max-height: 100%;
  }
  #player_comp {
    position: fixed;
    bottom: 20px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
  }
  @keyframes rotate {
    0% {
      transform: rotateZ(0) scale(1);
      opacity: 100%;
    }
    100% {
      transform: rotateZ(360deg) scale(0.8);
      opacity: 70%;
    }
  }
  .loading {
    animation: 2s linear infinite rotate;
    color: var(--mid-color);
  }
</style>
