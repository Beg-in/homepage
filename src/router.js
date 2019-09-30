import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "team" */ './views/Team.vue'),
    },
    {
      path: '/our-work',
      name: 'our-work',
      component: () => import(/* webpackChunkName: "our-work" */ './views/OurWork.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
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
