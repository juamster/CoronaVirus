<template>
  <div class="upgrades">
    <div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="../../public/virusBusters.jpg" class="card-img photo img-fluid" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h4>Supplies you own :</h4>
              <div v-if="soap.numOwned > 0">
                <h4>Soap: {{soap.numOwned}}</h4>
              </div>
              <div v-if="lysol.numOwned > 0">
                <h4>Lysol: {{lysol.numOwned}}</h4>
              </div>
              <div v-if="mask.numOwned > 0">
                <h4>Mask: {{mask.numOwned}}</h4>
              </div>
              <div v-if="vaccination.numOwned > 0">
                <h4>Vaccinations: {{vaccination.numOwned}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upgrades",
  props: {
    msg: String
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  border: 1px solid red;
}
</style>
