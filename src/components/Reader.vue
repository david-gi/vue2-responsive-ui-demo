<template>
  <div id="container">
    <div class="inner">
      <div id="pageNav">
        <div class="page selected"></div>
        <span class="pageNum ">X 1</span>
        <div class="page"></div>
        <span class="pageNum">X 2</span>
        <div class="page"></div>
        <span class="pageNum">X 3</span>
        <div class="page"></div>
        <span class="pageNum">X 4</span>
      </div>
      <div id="msgNav">
        <div class="item" v-for="msg in items" :key="msg.title + Math.random()">
          <h3>{{ msg.title }}</h3>
          <span>{{ msg.message }}</span>
        </div>
      </div>
      <div id="viewPanel">
        <viewer />
        <sender />
      </div>
    </div>
  </div>
</template>

<script>
import Viewer from "./Viewer.vue";
import Sender from "./Sender.vue";

export default {
  name: "Reader",
  components: {
    Viewer,
    Sender
  },
  computed: {
    items() {
      var list = [];
      for (var i = 0; i < 9; i++) {
        list.push({
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipiscing, elit mollis facilisis donec ante, aliquet tempus taciti lacinia id. Potenti dignissim egestas suspendisse semper congue curabitur at metus risus."
        });
      }
      return list;
    }
  }
};
</script>

<style src="./css/Reader.css"></style>