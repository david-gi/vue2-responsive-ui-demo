<template>
  <div id="senderContainer">
    <input id="input" placeholder="Message..." type="text" v-model="txtInput" />
    <input id="submit" type="submit" value="Submit" @click="submitted" />
    <div v-if="msg" class="msgBox" :class="{ error: hasError }">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Sender",
  data() {
    return {
      txtInput: "",
      msg: "",
      hasError: false
    };
  },
  methods: {
    submitted() {
      var that = this;
      var req = new XMLHttpRequest();
      req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          that.txtInput = "";
          that.msg = "Your message was sent.";
        } else {
          that.hasError = true;
          that.msg = "Unable to submit at this time.";
          console.log(
            "Error on submit (" +
              this.status +
              ") [server-side not implemented]"
          );
        }
        setTimeout(() => {
          that.msg = "";
          that.hasError = false;
        }, 8000);
      };
      req.open("POST", "www.logdna.com", true);
      req.send(this.textInput);
    }
  }
};
</script>

<style scoped>
#senderContainer {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 70vw;
  background-color: #f7f7f7;
  border-top: 1px #e1e1e1 solid;
  padding: 24px;
}
#senderContainer #input {
  width: 90%;
  height: 40px;
  line-height: 22px;
  border-radius: 3px;
  border: 1px #aaa solid;
  padding: 0 9% 0 9px;
  right: 24px;
}
#senderContainer #submit {
  line-height: 22px;
  height: 42px;
  min-width: 70px;
  border-radius: 3px;
  border: 1px #777 solid;
  margin-left: -3px;
  background-color: #f7f7f7;
  cursor: pointer;
}
#senderContainer #submit:hover {
  color: #fff;
  background-color: #db0a5b;
  padding: 0;
}
#senderContainer #submit:active {
  color: #111;
  border-color: #db0a5b;
  background-color: #fff;
}
#senderContainer .msgBox {
  position: fixed;
  bottom: 0px;
  padding: 5px 12px;
  color: white;
  border-radius: 3px;
  background-color: limegreen;
}
#senderContainer .msgBox.error {
  background-color: crimson !important;
}
</style>
