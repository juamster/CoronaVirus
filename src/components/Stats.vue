<template>
  <div class="stats">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="../../public/coronaGif.gif" class="card-img img-fluid" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">Stats - How's it going?</h4>
            <table>
              <tr>
                <td>Number of People Recovered:</td>
                <td class="font-weight-bold text-danger">{{stats.recovered}}</td>
              </tr>
              <tr>
                <td>Funds Available:</td>
                <td class="font-weight-bold">$ {{stats.available}}</td>
              </tr>
              <tr>
                <td>Amount Spent:</td>
                <td class="font-weight-bold">$ {{stats.spent}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  props: {
    msg: String
  },
  data() {
    return {
      clicks: 0
    };
  },
  methods: {},
  computed: {
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
</style>
