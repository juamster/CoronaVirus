<template>
  <!-- <div class="home">
    <VirusComponent msg="The Virus is killing people!  Go get it...." />
  </div>-->
  <div class="home">
    <div class="container-fluid ticker-space">
      <header class="row">
        <div class="col">
          <TickerComponent />
        </div>
      </header>

      <div class="row box">
        <div class="col-6">
          <Clicker />
        </div>
        <div class="col-6">
          <Stats />
        </div>
      </div>
      <div class="row space"></div>
      <div class="row">
        <div class="col-6">
          <Shop />
        </div>

        <div class="col-6">
          <Upgrades />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      idleCount: 0,
      recovered: 15
    };
  },

  methods: {}
};
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/background.jpg);
  background-size: cover;
}
.space {
  height: 10vh;
}
.ticker-space {
  margin-top: 6rem;
}
</style>
