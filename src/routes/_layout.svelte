<script>
  // import Nav from "../components/Nav.svelte";

  // export let segment;
</script>

<style>
  main {
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: hsl(0, 79%, 66%);
  }
</style>

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>
