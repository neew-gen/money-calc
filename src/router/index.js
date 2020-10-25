import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from '@/views/Calculator.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator,
  },
  {
    path: '/user-settings',
    name: 'UserSettings',
    component: () => import(/* webpackChunkName: "userSettings" */ '@/views/UserSettings.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
