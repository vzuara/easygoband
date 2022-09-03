import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'beerList',
    component: HomeView,
  },
  {
    path: '/:id',
    name: 'beerDetails',
    component: DetailsView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
