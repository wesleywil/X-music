<script lang="ts">
  import { id_music, show } from "../store";

  export let artist_name: string;
  export let artist_music: string;
  export let img: string;
  export let message: string;

  const setMusic_Id = () => {
    id_music.set(message);
    show.set(true);
    setTimeout(() => {
      show.set(false);
    }, 30000);
  };
</script>

<div class="flex relative">
  <div>
    <img
      alt="gallery"
      class="absolute inset-0 img_size object-cover object-center"
      src={img ? img : "https://dummyimage.com/300x300"}
    />
  </div>

  <div
    class="relative z-10 img_size bdmd-color bgdk-color opacity-0 hover:opacity-100 transition duration-700 ease-in-out"
  >
    <div class="w-full h-full flex flex-col justify-center items-center ">
      <h2
        class="text-center tracking-widest text-sm title-font font-medium mb-1 self-center md-color"
      >
        {artist_name}
      </h2>
      <h1
        class="text-center title-font text-lg font-medium mb-3 self-center lg-color"
      >
        {artist_music}
      </h1>
      <button on:click={setMusic_Id} class="btn_demo">Play Demo</button>
    </div>
  </div>
</div>

<style>
  .img_size {
    height: 300px;
    width: 300px;
  }
  .btn_demo {
    background-color: var(--mid-color);
    color: var(--dark-color);
    font-weight: bold;
    padding: 5px 3px;
    transition-duration: 300ms;
  }
  .btn_demo:hover {
    opacity: 70%;
  }
</style>
