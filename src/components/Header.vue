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

<style scoped>
#nav {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 50px;
}
#nav img {
  position: absolute;
  height: 32px;
  width: 32px;
  padding: 9px;
  background-color: #db0a5b;
}
#nav div {
  background-color: #efefef;
  height: 32px;
  padding: 9px 9px 9px 56px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
}
#nav h1 {
  color: #777;
  font-size: 1.4em;
  font-weight: lighter;
  margin: 0 0 0 6px;
}
</style>
