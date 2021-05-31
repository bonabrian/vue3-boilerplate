import {
  createApp,
  h,
  onBeforeMount,
  onMounted
} from 'vue';

// service worker
import './registerServiceWorker';

// router
import router from './router';

// store
import store from './store';

// i18n
import i18n from './plugins/i18n';

// register global components
import registerGlobalComponents from './plugins/global-components';

// app component
import AppComponent from './App.vue';

// root instance
const rootInstance = {
  setup() {
    onMounted(() => {
      store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth);
      window.addEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth));
    });

    onBeforeMount(() => {
      window.removeEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth));
    });
  },
  render() {
    return h(AppComponent);
  }
};

const app = createApp(rootInstance)
  .use(router)
  .use(store)
  .use(i18n);

registerGlobalComponents(app);

router.isReady()
  .then(() => app.mount('#root'))
  .catch((err) => {
    console.log(err);
  });

if (module.hot) {
  module.hot.accept();
}
