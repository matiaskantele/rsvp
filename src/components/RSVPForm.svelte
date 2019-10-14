<script>
  import { goto } from "@sapper/app";

  let attending = "no";

  function submitForm() {
    const selections = {
      attending: attending
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
      body: encode({ ...selections })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("An error occurred, please try again!");
        }
        goto("/thank-you");
      })
      .catch(error => console.log(error));
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

<form
  on:submit|preventDefault={submitForm}
  netlify
  netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="rsvp" />
  <p class="hidden">
    <label>
      Don’t fill this out if you're human:
      <input name="bot-field" />
    </label>
  </p>
  <label for="negative">No</label>
  <input
    type="radio"
    bind:group={attending}
    name="attending"
    value="no"
    id="negative" />
  <label for="affirmative">Yes</label>
  <input
    type="radio"
    bind:group={attending}
    name="attending"
    value="yes"
    id="affirmative" />
  <button type="submit">RSVP</button>
</form>
