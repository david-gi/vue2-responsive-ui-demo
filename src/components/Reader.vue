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

<style scoped>
#container {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
#container .inner {
  display: flex;
  height: 100vh;
}

#pageNav {
  padding-top: 50px;
  width: 50px;
  background-color: #333333;
  text-align: center;
}
#pageNav .page {
  height: 32px;
  width: 32px;
  margin: 9px 9px 2px 9px;
  border-radius: 3px;
  background-color: #efeff0;
  cursor: pointer;
}
#pageNav .page.selected {
  height: 28px;
  width: 28px;
  border: #db0a5b 2px solid;
}
#pageNav .page:hover {
  height: 28px;
  width: 28px;
  border: #db0a5b 2px solid;
}
#pageNav .pageNum {
  display: block;
  width: 32px;
  margin: 0px 9px 9px 9px;
  color: #efeff0;
  font-size: 0.6em;
}

#msgNav {
  flex-grow: 1;
  min-width: 140px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-top: 50px;
  border-right: 1px #e1e1e1 solid;
  background-color: #f1f1f2;
}
#msgNav .item {
  border-bottom: 1px #e1e1e1 solid;
  padding: 12px;
}
#msgNav .item h3 {
  margin: 0;
}

#viewPanel {
  flex-grow: 3;
  background-color: #f6f6f6;
  padding-top: 50px;
  overflow-y: auto;
}
</style>
