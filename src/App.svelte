<script lang="ts">
  import { Router, Route } from "svelte-routing";
  //Components
  import Navbar from "./components/Navbar.svelte";
  //Pages
  import Homepage from "./pages/homepage.svelte";
  import Top100 from "./pages/top100.svelte";
  //import Test from "./pages/test.svelte";
</script>

<main>
  <Router>
    <Navbar />
    <div>
      <Route path="/"><Homepage /></Route>
      <Route path="/top100"><Top100 /></Route>
      <!-- <Route path="/xp"><Test /></Route> -->
    </div>
  </Router>
</main>

<style>
</style>
