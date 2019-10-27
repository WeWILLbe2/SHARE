import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myreg from '@/components/myreg.vue';
import mylog from '@/components/mylog.vue';
import bottoms from '@/components/bottom.vue';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component("myreg", myreg);
Vue.component("mylog", mylog);
Vue.component("bottoms", bottoms);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
