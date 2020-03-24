<template>
  <div class="shop">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-5">
          <img src="../../public/cart.jpg" class="card-img photo img-fluid" alt="a cart image" />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h4 class="card-title">Buy Virus Killing Tools</h4>
            <table class="table table-hover table-sm">
              <tbody>
                <tr
                  :class="{disabled: stats.avaliable >= soap.cost} "
                  @click="buy('soap')"
                  class="mx-auto"
                >
                  <td>Soap</td>
                  <td>${{soap.cost}}</td>
                  <td>+{{soap.modAmount}}</td>
                </tr>
                <tr
                  :class="{disabled: stats.avaliable >= vaccination.lysol} "
                  @click="buy('lysol')"
                  class="mx-auto"
                >
                  <td>Lysol</td>
                  <td>${{lysol.cost}}</td>
                  <td>+{{lysol.modAmount}}</td>
                </tr>
                <tr
                  :class="{disabled: stats.avaliable >= mask.cost}"
                  @click="buy('mask')"
                  class="mx-auto"
                >
                  <td>Mask</td>
                  <td>${{mask.cost}}</td>
                  <td>+{{mask.modAmount}}</td>
                </tr>
                <tr
                  :class="{disabled: stats.avaliable >= vaccination.cost} "
                  @click="buyIdleUpgrade"
                  class="mx-auto"
                >
                  <td>Vaccination</td>
                  <td>${{vaccination.cost}}</td>
                  <td>+{{vaccination.modAmount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: {
    msg: String
  },
  data() {
    return {
      idleCount: 0
    };
  },
  methods: {
    buy(name) {
      this.$store.dispatch("buyUpgrade", name);
      console.log("buyingSoap");
    },
    buyIdleUpgrade() {
      console.log("buying a vaccination");
      this.$store.dispatch("buyUpgrade", "vaccination");
      if (this.idleCount == 0) {
        this.startIdleMiner();
        this.idleCount++;
      }
    },
    startIdleMiner() {
      setInterval(this.idleMine, 3000);
    },
    idleMine() {
      console.log("going to update clicks");
      this.$store.dispatch("updateIdleMiner");
    }
  },
  computed: {
    soap() {
      return this.$store.state.soap;
    },
    mask() {
      return this.$store.state.mask;
    },
    lysol() {
      return this.$store.state.lysol;
    },
    vaccination() {
      return this.$store.state.vaccination;
    },
    stats() {
      return this.$store.state.stats;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.disabled {
  pointer-events: none;
}
.photo {
  background-size: cover;
}
</style>
