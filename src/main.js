import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMeta from 'vue-meta'
import './registerServiceWorker';

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  },
  render: (h) => h(App),
}).$mount('#app');
