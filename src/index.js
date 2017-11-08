let build = require('begin-build');

// HACK: vue-loader exports an ES6 module and doesn't support CommonJS
module.exports = build({
  components: { app: require('./app/component.vue').default },
  router: {
    routes: [
      {
        name: 'home',
        path: '/',
        component: require('./home/component.vue').default,
      },
      {
        name: 'team',
        path: '/team',
        component: require('./team/component.vue').default,
      },
      {
        name: 'faq',
        path: '/faq',
        component: require('./faq/component.vue').default,
      },
      // {
      //   name: '404',
      //   path: '/404',
      //   component: require('./404/component.vue').default,
      // },
      {
        path: '*',
        redirect: '/',
      },
    ],
  },
});

