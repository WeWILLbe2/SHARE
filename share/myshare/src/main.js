import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mynav from '@/components/mynav.vue';
import myreg from '@/components/myreg.vue';
import mylog from '@/components/mylog.vue';
import dynamic from '@/components/dynamic.vue';
import pertop from '@/components/pertop.vue';
import mybtn from '@/components/mybtn.vue';
import publish from '@/components/publish.vue';
import axios from 'axios'
import '../src/icon-font/iconfont.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.axios=axios;
//定义全局axios 的公用服务端口
axios.defaults.baseURL = "http://localhost:8081";
Vue.component("mynav", mynav);
Vue.component("myreg", myreg);
Vue.component("mylog", mylog);
Vue.component("dynamic", dynamic);
Vue.component("pertop", pertop);
Vue.component("mybtn", mybtn);
Vue.component("publish", publish);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
