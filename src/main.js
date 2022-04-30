import Vue from 'vue'
import App from './App.vue'
import {
  Button, DatePicker, Avatar,
  Row, Col, Container, Header,
  Main, Footer, Backtop, Menu,
  Submenu, MenuItem,
} from 'element-ui';

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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
