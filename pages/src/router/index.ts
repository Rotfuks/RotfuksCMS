import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RfPage from '../views/RfPage.vue';
import pageService from '@/services/pageService';

Vue.use(VueRouter);

const routes: RouteConfig[] = [];

for (const page of pageService.getPages()) {
  const route = {
    path: page.getUrl(),
    name: page.getName(),
    component: RfPage,
    meta: {title: page.getTitle()},
    props: {page},
  };
  routes.push(route);
}

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
