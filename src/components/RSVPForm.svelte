<script>
  import { goto } from "@sapper/app";

  import TextInput from "./UI/TextInput.svelte";
  import { isEmpty } from "../helpers/validation.js";

  let name = "";
  let menu = "";

  $: nameValid = !isEmpty(name);

  function submitForm() {
    const selections = {
      name: name,
      menu: menu
    };

    console.log(selections);

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
    max-width: 90vw;
    margin: auto;
    background-color: darkolivegreen;
  }

  .hidden {
    display: none;
  }

  .elements {
    display: grid;
    grid-gap: 1rem;
    margin: 0 0 2rem 0;
  }

  .menuSelect {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .menuItem {
    width: 15rem;
    height: 10rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menuItem > h2 {
    margin: 0;
  }

  .menuItem > p {
    margin: 0;
  }

  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [type="radio"] + div {
    cursor: pointer;
    outline: 0.125rem solid gray;
  }

  [type="radio"]:checked + div {
    outline: 0.125rem solid #f00;
  }
</style>

<form
  on:submit|preventDefault={submitForm}
  name="rsvp"
  netlify
  netlify-honeypot="bot-field">
  <p class="hidden">
    <label>
      Don’t fill this out if you're human:
      <input name="bot-field" />
    </label>
  </p>
  <div class="elements">
    <TextInput
      id="title"
      label="Name"
      value={name}
      valid={nameValid}
      validityMessage="What is your name?"
      on:input={event => (name = event.target.value)} />
    <div class="menuSelect">
      <label>
        <input type="radio" bind:group={menu} value={'chiz'} />
        <div class="menuItem">
          <h2>Chiz</h2>
          <p>Started du fromage</p>
          <p>Fromage</p>
          <p>Cheesecake</p>
        </div>
      </label>
      <label>
        <input type="radio" bind:group={menu} value={'bif'} />
        <div class="menuItem">
          <h2>Bif</h2>
          <p>Bif de la femme</p>
          <p>Bifestroni Soup</p>
          <p>Beefcake</p>
        </div>
      </label>
      <label>
        <input type="radio" bind:group={menu} value={'vegan'} />
        <div class="menuItem">
          <h2>Vegan</h2>
          <p>salad</p>
          <p>pasta</p>
          <p>pastasalad</p>
        </div>
      </label>
    </div>
  </div>
  <button type="submit">RSVP</button>
</form>
