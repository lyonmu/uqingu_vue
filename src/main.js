import Vue from 'vue'
import App from './App.vue'
import { Button,DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//按需引入ElementUI
Vue.component(DatePicker.name, DatePicker);
Vue.component(Button.name, Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
