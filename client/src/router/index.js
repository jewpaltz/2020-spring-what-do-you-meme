import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Login from '../views/Login.vue';
import Users from '../models/Users';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/game', name: 'Game', component: Game, meta: { isSecret: true } },
  { path: '/login', name: 'Login', component: Login },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {
    console.log(Users);
  if( to.meta.isSecret && !Users.CurrentUser) next('/login');
  else next();
});


export default router
