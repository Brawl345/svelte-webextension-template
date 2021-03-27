<script>
  import i18n from "../utils/i18n";

  let name = "";
</script>

<style>
    h1 {
        color: white;
        background-color: black;
    }
</style>

<label>{i18n.name}:
  <input bind:value={name} type="text">
</label>

<h1>{i18n.hello} {name}</h1>
