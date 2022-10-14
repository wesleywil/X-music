<script>
  import { Link } from "svelte-routing";
</script>

<header class="bgdk-color lg-color body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <Link
      to="/"
      class="flex title-font font-medium items-center md-color mb-4 md:mb-0"
    >
      <img src="public/X-music.svg" alt="logo" class="logo" />
      <span class="ml-3 text-xl">X-Music</span>
    </Link>
    <nav
      class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"
    >
      <Link to="/" class="mr-5 hover:text-white/50">Home</Link>
      <Link to="/top100" class="mr-5 hover:text-white/50">Top100</Link>
      <Link to="/musics" class="mr-5 hover:text-white/50">Musics</Link>
    </nav>
    <button
      class="inline-flex items-center bglg-color dk-color border-0 py-1 px-3 focus:outline-none hover:bg-slate-400 rounded text-base mt-4 md:mt-0"
      >Button
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

<style>
  @keyframes animate_logo {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .logo {
    width: 3rem;
    height: 3rem;
  }
  .logo:hover {
    animation: 1s linear infinite animate_logo;
  }
</style>
