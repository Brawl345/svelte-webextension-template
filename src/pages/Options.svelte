<script>
  let name = "World";
</script>

<style>
    h1 {
        color: white;
        background-color: black;
    }
</style>

<label>Your name:
  <input bind:value={name} type="text">
</label>

<h1>Hello {name}</h1>
