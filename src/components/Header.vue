<template>
  <div id="nav">
    <img src="../assets/logo.png" />
    <div>
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String
  }
};
</script>

<style src="./css/Header.css"></style>