import Vue from 'vue'
import App from './App.vue'

import router from "@/router";

import {
  Card,
  Row,
  Col,
  Spin,
  Icon,
  LocaleProvider,
  Table,
  Divider,
} from 'ant-design-vue';

Vue.config.productionTip = false;

Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Spin);
Vue.use(Icon);
Vue.use(LocaleProvider);
Vue.use(Table);
Vue.use(Divider);

new Vue({
  "el": "#app",
  router,
  render: h => h(App)
});
