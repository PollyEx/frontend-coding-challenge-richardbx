import Vue from 'vue';
import VueRouter from 'vue-router';
import Instructions from '../views/Instructions.vue';
import Challenge1 from '../views/Challenge1.vue';
import Challenge2 from '../views/Challenge2.vue';
import Challenge3 from '../views/Challenge3.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions,
  },
  {
    path: '/challenge-1',
    name: 'Challenge1',
    component: Challenge1,
  },
  {
    path: '/challenge-2',
    name: 'Challenge2',
    component: Challenge2,
  },
  {
    path: '/challenge-3',
    name: 'Challenge3',
    component: Challenge3,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
