import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bottom from '@/components/bottom.vue'
import top from '@/components/top.vue'
import { NavBar,Tabbar, TabbarItem,Row, Col,Image,Icon,Uploader,ActionSheet,Field,Button,Search,Popup  } from 'vant'

Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Row).use(Col);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Field);
Vue.use(Button);
Vue.use(Search);
Vue.use(Popup);
Vue.config.productionTip = false

Vue.component('bottoms',bottom)
Vue.component("tops", top)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
