import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const scrollBehavior = (to) => {
  const position = {};
  if (to.hash) {
    position.selector = to.hash;
  }
  if (to.matched.some((m) => m.meta.scrollTop)) {
    position.x = 0;
    position.y = 0;
  }

  return position;
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior,
  routes
});

// add your middleware here
// router.beforeEach(yourMiddleware);

export default router;
