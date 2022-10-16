<script lang="ts">
  import { Router, Route } from "svelte-routing";
  //Components
  import Navbar from "./components/Navbar.svelte";
  //Pages
  import Homepage from "./pages/homepage.svelte";
  import Top50 from "./pages/top50.svelte";
  import Musics from "./pages/musics.svelte";
</script>

<main>
  <Router>
    <Navbar />
    <div>
      <Route path="/"><Homepage /></Route>
      <Route path="/top50"><Top50 /></Route>
      <Route path="/musics"><Musics /></Route>
    </div>
  </Router>
</main>

<style>
</style>
