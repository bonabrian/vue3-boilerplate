import DefaultLayout from '@layout/DefaultLayout.vue';

const lazyLoad = (path) => {
  return () => import(/* webpackChunkName: "[request]" */ `@pages/${path}.vue`).then((m) => m.default || m);
};

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: lazyLoad('Home')
      },
      {
        path: '/about',
        name: 'about',
        component: lazyLoad('About')
      }
    ]
  }
];

export default routes;
