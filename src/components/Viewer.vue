<template>
  <div id="viewContainer">
    <div class="inner">
      <h2>Sociis tempus a donec aliquet libero.</h2>
      <i>Proin tincidunt convallis per cubilia vehicula lobortis.</i>
      <br />
      <p>
        Nunc viverra bibendum potenti mus semper mattis varius blandit ligula,
        hac sociis tempus a donec aliquet diam nulla auctor libero, porttitor
        habitant pharetra netus maecenas dictum volutpat montes. Magna aliquet
        pellentesque accumsan maecenas sollicitudin dapibus odio eget, dictumst
        cum lobortis enim feugiat porttitor bibendum, penatibus sed malesuada
        sem inceptos parturient suspendisse. Iaculis tincidunt convallis
        endrerit donec neque morbi, commodo libero suscipit proin platea
        facilisi velit, ullamcorper per cubilia vehicula lobortis. Iaculis
        tincidunt convallis endrerit donec neque morbi, commodo libero suscipit
        proin platea facilisi velit, ullamcorper per cubilia vehicula lobortis.
      </p>
      <br />
      <div class="picture">
        <div></div>
        <i>Magna aliquet accumsan</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Viewer"
};
</script>

<style scoped>
#viewContainer {
  display: flex;
}
#viewContainer .inner {
  padding: 2% 3%;
  margin-bottom: 60px;
}
#viewContainer h2 {
  margin: 0;
}

.picture {
  text-align: center;
}
.picture div {
  margin: auto;
  height: 30vh;
  width: 45vw;
  background-color: #aaa;
}
</style>
