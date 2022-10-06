<script>
  import { id_music, show } from "../store";
  import axios from "axios";
  import { Howl, Howler } from "howler";

  import FaPlay from "svelte-icons/fa/FaPlay.svelte";
  import FaPause from "svelte-icons/fa/FaPause.svelte";
  import FaVolumeUp from "svelte-icons/fa/FaVolumeUp.svelte";
  import FaVolumeDown from "svelte-icons/fa/FaVolumeDown.svelte";

  let music;
  let url_music;
  let artist_name;
  let album_name;
  let album_img;
  let music_name;

  let volume = 0;

  let countValue;
  let showValue;

  id_music.subscribe((value) => {
    countValue = value;
  });
  show.subscribe((value) => {
    showValue = value;
  });

  const playMusic = async () => {
    console.log("PLAY", countValue);
    const res = await axios.get("https://spotify23.p.rapidapi.com/tracks/", {
      params: { ids: countValue },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    });
    console.log("MUSIC DATA=> ", res.data.tracks);
    url_music = res.data.tracks[0].preview_url;
    artist_name = res.data.tracks[0].name;
    album_name = res.data.tracks[0].album.name;
    album_img = res.data.tracks[0].album.images[1].url;
    music_name = res.data.tracks[0].artists[0].name;

    // url_music = "src/music/06. TalkTalk.mp3";

    music = new Howl({
      src: [url_music],
      volume: 1,
      html5: true,
    });
    music.play();
    volume = music.volume();
  };

  const pauseMusic = () => {
    console.log("PAUSE!");
    music.pause();
  };

  const volumeUp = () => {
    console.log("Volume Up");
    volume += 0.1;
    if (volume >= 1) {
      volume = 1;
      console.log("IF VOLUME UP ->", volume.toPrecision(1));
      Howler.volume(volume.toPrecision(1));
    }
    console.log("VOLUME UP ->", volume.toPrecision(1));
    Howler.volume(volume.toPrecision(1));
  };
  const volumeDown = () => {
    console.log("Volume Down");
    volume -= 0.1;
    if (volume <= 0.1) {
      volume = 0;
      console.log("IFVOLUME DOWN ->", volume.toPrecision(1));
      Howler.volume(volume.toPrecision(1));
    }
    console.log("VOLUME DOWN ->", volume.toPrecision(1));
    Howler.volume(volume.toPrecision(1));
  };
</script>

{#if showValue}
  <div class={`flex justify-center gap-4  p-2 {hidden}`}>
    <div class="border w-24 h-24">
      <img src={album_img} alt="album" />
    </div>
    <div class="self-center  border w-96 h-8 text-xl overflow-hidden">
      <div class="animate_music lg-color">
        <p class="w-screen">
          Artist: {artist_name} - Album: {album_name} - Music: {music_name}
        </p>
      </div>
    </div>
    <button
      on:click={playMusic}
      class="self-center bgmd-color dk-color px-2 pl-4 font-bold w-12 h-12 rounded-full"
      ><FaPlay /></button
    >
    <button
      on:click={pauseMusic}
      class="self-center bgmd-color dk-color px-2 py-1 font-bold w-12 h-12 rounded-full"
      ><FaPause /></button
    >
    <div class="flex  gap-4 self-center">
      <button
        on:click={volumeUp}
        class="bgmd-color dk-color px-2 py-1 font-bold w-12 h-12 rounded-full"
      >
        <FaVolumeUp />
      </button>
      <h3 class="self-center text-3xl">{volume.toPrecision(1)}</h3>
      <button
        on:click={volumeDown}
        class="bgmd-color dk-color px-2 py-1 font-bold w-12 h-12 rounded-full"
      >
        <FaVolumeDown />
      </button>
    </div>
  </div>
{/if}

<style>
  @keyframes move {
    from {
      transform: translateX(100%);
      left: 0%;
    }
    to {
      transform: translateX(-200%);
      left: 100%;
    }
  }

  .animate_music {
    animation: 8s linear infinite move;
  }
</style>
