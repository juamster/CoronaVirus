import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store';
import "./components/_loader";


Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router,
  store,
  render: h => h(App),
  // watch: {
  //   store: {
  //     handler() {
  //       console.log("store changed")
  //     }
  //   }
  // }
}).$mount('#app')
