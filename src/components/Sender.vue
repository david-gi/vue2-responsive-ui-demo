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

<style src="./css/Sender.css"></style>