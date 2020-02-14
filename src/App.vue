<template>
  <div id="app">
    <reader />
    <Header title="What is Lorem Ipsum?" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Reader from "./components/Reader.vue";

export default {
  name: "App",
  components: {
    Header,
    Reader
  }
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  min-height: 320px;
  min-width: 320px;
}
</style>
