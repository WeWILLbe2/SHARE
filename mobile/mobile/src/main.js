import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myreg from '@/components/myreg.vue';
import mylog from '@/components/mylog.vue';
import bottoms from '@/components/bottom.vue';

import axios from 'axios'
import {
  Field,
  Uploader
} from 'vant';
Vue.use(Uploader);
Vue.use(Field);
Vue.prototype.axios=axios;
axios.defaults.baseURL = "http://localhost:8081";

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
