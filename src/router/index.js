import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import PortfolioDetail from '../views/PortfolioDetail.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio/:nameUrl',
    component: PortfolioDetail,
    props: true,
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/:NotFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router