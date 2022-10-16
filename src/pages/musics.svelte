<script>
  import {
    search_results_musics,
    search_results_artists,
    search_option,
  } from "../store";
  import { beforeUpdate } from "svelte";

  import SearchBar from "../components/SearchBar.svelte";
  import ArtistCard from "../components/ArtistCard.svelte";
  import Player from "../components/Player.svelte";

  let musics;
  search_results_musics.subscribe((value) => {
    musics = value;
  });
  let artists;
  search_results_artists.subscribe((value) => {
    artists = value;
  });
  let option;
  search_option.subscribe((value) => {
    option = value;
  });

  beforeUpdate(() => {
    console.log("the component is about to update");
  });
</script>

<div class="flex  justify-center  screen_size">
  <div class="text-3xl text-left lg-color flex flex-col gap-2 p-4 pl-8">
    <h1 class="text-8xl font-bold py-2 text-center">
      <span class="md-color">M</span>usics
    </h1>
    <div class="search_div self-center">
      <SearchBar />
    </div>

    <div class="flex flex-wrap justify-center gap-2 p-4">
      {#key []}
        {#if !option}
          {#each musics as music}
            <!-- <li>{music.data.artists.items[0].profile.name}</li> -->
            <ArtistCard
              artist_name={music.data.artists.items[0].profile.name}
              artist_music={music.data.name}
              img={music.data.albumOfTrack.coverArt.sources[0].url}
              message={music.data.id}
            />
          {/each}
        {:else}
          {#each artists as artist}
            <!-- <li>{artist.data.profile.name}</li> -->
            <ArtistCard
              artist_name={artist.data.profile.name}
              artist_music={""}
              img={artist.data.visuals.avatarImage === null
                ? "https://dummyimage.com/300x300"
                : artist.data.visuals.avatarImage.sources[0].url}
              message={"No ID"}
            />
          {/each}
        {/if}
      {/key}
    </div>
    <div id="player_comp">
      <Player />
    </div>
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
    background-color: var(--dark-color);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
  }

  .search_div {
    width: 50vw;
  }
  @media (max-width: 420px) {
    .search_div {
      margin-right: 20px;
      width: 55vh;
    }
  }
</style>
