let build = require('begin-build');

module.exports = build({
  components: { app: require('./app/vue.pug') },
  router: {
    routes: [
      {
        name: 'home',
        path: '/',
        component: require('./home/vue.pug'),
      },
      {
        name: 'team',
        path: '/team',
        component: require('./team/vue.pug'),
      },
      {
        name: 'faq',
        path: '/faq',
        component: require('./faq/vue.pug'),
      },
      {
        name: 'slate',
        path: '/slate',
        component: require('./slate/vue.pug'),
      },
      {
        name: 'our-work',
        path: '/our-work',
        component: require('./our-work/vue.pug'),
      },
      {
        name: 'contact',
        path: '/contact',
        component: require('./contact/vue.pug'),
      },
      // {
      //   name: '404',
      //   path: '/404',
      //   component: require('./404/vue.pug'),
      // },
      {
        path: '*',
        redirect: '/',
      },
    ],
  },
});

