import Vue from 'vue'
import App from './App.vue'
import {
  Button, DatePicker, Avatar,
  Row, Col, Container, Header,
  Main, Footer, Backtop, Menu,
  Submenu, MenuItem, Descriptions, DescriptionsItem, Tag
} from 'element-ui';
//引入store
import store from './store'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

//关闭Vue的生产提示
Vue.config.productionTip = false

//按需引入ElementUI
Vue.component(DatePicker.name, DatePicker);
Vue.component(Button.name, Button);
Vue.component(Avatar.name, Avatar);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Backtop.name, Backtop);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Descriptions.name, Descriptions);
Vue.component(DescriptionsItem.name, DescriptionsItem);
Vue.component(Tag.name, Tag);

Vue.config.productionTip = false

new Vue({
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')
