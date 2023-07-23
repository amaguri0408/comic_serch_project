import Vue from 'vue';
import App from './App.vue';
import router from './router';
// const { dynamicImportCSS } = dynamicImportCSS("./style.css");
// const { css } = dynamicImportCSS("./assets/style.css");
import css from "./assets/style.css";

Vue.config.productionTip = false

new Vue({
  router,
  css,
  render: h => h(App)
}).$mount('#app')
