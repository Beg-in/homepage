import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/team',
      name: 'Team',
      component: () => import(/* webpackChunkName: "team" */ './views/Team.vue'),
    },
    {
      path: '/case-studies',
      name: 'CaseStudies',
      component: () => import(/* webpackChunkName: "case-studies" */ './views/CaseStudies.vue'),
    },
    {
      path: '/case-studies/chaser',
      name: 'Chaser',
      component: () => import(/* webpackChunkName: "chaser" */ './views/CaseStudies/chaser.vue'),
    }, {
      path: '/case-studies/govflex',
      name: 'GovFlex',
      component: () => import(/* webpackChunkName: "govflex" */ './views/CaseStudies/govflex.vue'),
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import(/* webpackChunkName: "faq" */ './views/FAQ.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
