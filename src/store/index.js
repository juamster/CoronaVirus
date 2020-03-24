import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'app',
  storage: window.localStorage
})
export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    stats: {
      recovered: 0,
      spent: 0,
      available: 0
    },
    soap: {
      modAmount: 1,
      numOwned: 0,
      cost: 9
    },
    lysol: {
      modAmount: 1,
      numOwned: 0,
      cost: 12
    },
    vaccination: {
      modAmount: 5,
      numOwned: 0,
      cost: 100
    },
    mask: {
      modAmount: 2,
      numOwned: 0,
      cost: 30
    },
    clickScale: 1,
    idleClickScale: 0
  },

  mutations: {
    addClick(state, numClicks) {
      state.stats.recovered += numClicks * state.clickScale;
      state.stats.available += numClicks * state.clickScale;
    },
    buyUpgrade(state, name) {
      console.log("name is: ", name)
      if (state.stats.available >= state[name].cost) {
        state[name].numOwned++;
        state.stats.available -= state[name].cost;
        state.stats.spent += state[name].cost;
        if (name != "vaccination") {
          state.clickScale += state[name].modAmount;
        } else {
          state.idleClickScale += state[name].modAmount;
          state.clickScale += state.idleClickScale;
        }

        state[name].cost = Math.round(state[name].cost * 1.20);
        state[name].modAmount = Math.round(state[name].modAmount * 1.5)
      }
    },
    updateIdleMiner(state) {
      state.stats.recovered += state.idleClickScale;
      state.stats.available += state.idleClickScale;
    }
  },
  actions: {
    addClick({ dispatch, commit }, numClicks) {
      commit("addClick", numClicks)
    },
    buyUpgrade({ dispatch, commit }, name) {
      commit("buyUpgrade", name)
    },
    buyVaccination({ dispatch, commit }, name) {
      commit("buyUpgrade", name)
    },
    updateIdleMiner({ dispatch, commit }) {
      commit("updateIdleMiner")
    }
  },

  modules: {
  }

})
