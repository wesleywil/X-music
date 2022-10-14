<script>
  import { search_results } from "../store";

  import SearchBar from "../components/SearchBar.svelte";
  import ArtistCard from "../components/ArtistCard.svelte";
  import Player from "../components/Player.svelte";

  let musics;
  search_results.subscribe((value) => {
    musics = value;
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
      {#each musics as music}
        <ArtistCard
          artist_name={music.data.artists.items[0].profile.name}
          artist_music={music.data.name}
          img={music.data.albumOfTrack.coverArt.sources[0].url}
          message={music.data.id}
        />
      {:else}
        <h1 class="font-semibold text-2xl xl:text-6xl md:text-4xl opacity-60">
          Make your search
        </h1>
      {/each}
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
    width: 60vh;
  }
  @media (max-width: 420px) {
    .search_div {
      width: 50vh;
    }
  }
</style>
