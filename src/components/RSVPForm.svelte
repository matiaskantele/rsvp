<script>
  let attending = "no";

  function submitForm() {
    console.log(attending);
  }
</script>

<style>
  form {
    height: 30rem;
    width: 100vw;
    background-color: darkolivegreen;
  }
</style>

<form
  name="rsvp"
  method="POST"
  data-netlify="true"
  action="/thank-you"
  on:submit|preventDefault>
  <label for="negative">No</label>
  <input type="radio" bind:group={attending} value="no" id="negative" />
  <label for="affirmative">Yes</label>
  <input type="radio" bind:group={attending} value="yes" id="affirmative" />
  <button type="submit" on:click={submitForm}>RSVP</button>
</form>
