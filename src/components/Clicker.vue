<template>
  <div class="clicker">
    <div class>
      <h3>Smash that Virus!</h3>
      <!-- <img src="https://tinyurl.com/sw264g6" width="300" class="image-fluid" @click="clicked" /> -->
      <img src="../assets/logo.png" width="200" class="image-fluid" @click="clicked" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Clicker",
  props: {
    msg: String
  },
  data() {
    return {
      clicks: 0
    };
  },
  methods: {
    clicked() {
      this.$store.dispatch("addClick", 1);
      console.log("Virus was clicked");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  border: 1px solid red;
}
a {
  color: #42b983;
}
.virusImage {
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/logo.png);
}
</style>
