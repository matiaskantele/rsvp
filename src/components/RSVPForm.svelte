<script>
  import { goto } from "@sapper/app";

  let attending = "no";

  function submitForm() {
    const selections = {
      attending: attending,
      working: true
    };

    function encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...selections })
    })
      .then(() => {
        goto("/thank-you");
      })
      .catch(error => alert(error));
  }
</script>

<style>
  form {
    height: 30rem;
    width: 100vw;
    background-color: darkolivegreen;
  }

  .hidden {
    display: none;
  }
</style>

<form on:submit|preventDefault netlify netlify-honeypot="bot-field">
  <p class="hidden">
    <label>
      Don’t fill this out if you're human:
      <input name="bot-field" />
    </label>
  </p>
  <label for="negative">No</label>
  <input type="radio" bind:group={attending} value="no" id="negative" />
  <label for="affirmative">Yes</label>
  <input type="radio" bind:group={attending} value="yes" id="affirmative" />
  <button on:click={submitForm}>RSVP</button>
</form>
