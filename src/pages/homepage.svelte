<script>
  import { Link } from "svelte-routing";
</script>

<div class="flex  items-center screen_size">
  <div
    class="text-2xl xl:text-3xl md:text-3xl text-left lg-color flex flex-col gap-2 p-4 pl-8 xl:w-1/2 md:w-2/3"
  >
    <h1 class="text-6xl xl:text-8xl md:text-8xl font-bold flex items-center">
      <img
        src="public/X-music.svg"
        alt="logo"
        class="w-16 xl:w-24 md:w-24 mt-4 rotate-90 self-center"
      />
      Music
    </h1>
    <p>X-music is the ultimate destination for music lovers of all kinds!</p>
    <p>
      Whether you're looking for new music to discover, or want to revisit some
      old favorites, this is the perfect place for you.
    </p>
    <div class="mt-4">
      <Link
        to="/top100"
        class="bgmd-color dk-color hover:opacity-80 font-bold px-2 py-1 rounded"
        >TOP-100</Link
      >
    </div>
  </div>
  <div class="w-1/3 p-2 ml-12 hidden xl:block md:block">
    <img src="public/homepage_img.svg" alt="music_player" />
  </div>
</div>

<style>
  .screen_size {
    min-height: 92vh;
    max-width: 100%;
  }
</style>
