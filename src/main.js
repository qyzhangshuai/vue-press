import Vue from 'vue'
import App from './App.vue'
import zfUi from "wy-zf-ui";
import "wy-zf-ui/dist/zf-ui.css";
Vue.config.productionTip = false
Vue.use(zfUi);
new Vue({
  render: h => h(App),
}).$mount('#app')
