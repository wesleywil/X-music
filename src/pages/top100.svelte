<script>
  import { onMount } from "svelte";
  import axios from "axios";

  import ArtistCard from "../components/ArtistCard.svelte";

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

<div class="flex flex-col p-4 border align-center items-center screen_size">
  <div
    class="mx-auto self-center text-3xl text-center lg-color flex flex-col gap-2  m-2 p-4 pl-8 xl:w-1/2 md:w-2/3"
  >
    <h1 class="text-8xl font-bold">
      <span class="md-color">TOP</span>-100
    </h1>
    <h2>Artists - Bands - Groups</h2>
  </div>
  <div class="flex flex-wrap justify-center gap-2">
    {#each data as new_obj}
      <ArtistCard
        artist_name={new_obj.track.artists[0].name}
        artist_music={new_obj.track.name}
        img={new_obj.track.album.images[1].url}
      />
    {/each}
  </div>
</div>
