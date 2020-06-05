import Vue from "vue";
import Router from "vue-router";
//import store from './store/store'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: "",
          name: "",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: '/home',
              name: 'Home',
              component: () => import('../views/HomePage.vue'),
            },
            {
              path: '/cases',
              name: 'Cases',
              component: () => import('../views/ConsultCases.vue'),
            },
            {
              path: '/settings',
              name: 'Settings',
              component: () => import('../views/Settings.vue')
            },
            {
              path: '/about',
              name: 'About',
              component: () => import('../views/About.vue')
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

export default router;
