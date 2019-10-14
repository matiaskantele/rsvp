<script>
  import RSVPForm from "../components/RSVPForm.svelte";
  import Map from "../components/Map.svelte";
</script>

<style>
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: hsl(0, 0%, 100%);
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.7);
    transform: skew(0, -6.7deg);
    transition-property: font-size;
    transition-duration: 0.5s;
  }

  .hero {
    height: 100vh;
    width: 100vw;
    background-color: hsl(0, 79%, 66%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .hero > h1:first-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 920px) {
    h1 {
      font-size: 3rem;
    }
  }
</style>

<svelte:head>
  <title>M ❤️ V</title>
</svelte:head>

<div class="hero">
  <h1>M ❤️ V</h1>
  <h1>Summer 2020</h1>
</div>
<RSVPForm />
<Map />
