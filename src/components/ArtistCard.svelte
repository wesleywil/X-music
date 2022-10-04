<script lang="ts">
  export let artist_name: string;
  export let artist_music: string;
  export let img: string;
</script>

<div class="flex relative">
  <div>
    <img
      alt="gallery"
      class="absolute inset-0 img_size object-cover object-center"
      src={img ? img : "https://dummyimage.com/250x300"}
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
    </div>
  </div>
</div>

<style>
  .img_size {
    height: 300px;
    width: 250px;
  }
</style>
