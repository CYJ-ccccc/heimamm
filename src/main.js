// 导入vue
import Vue from 'vue'
// 导入App跟组件
import App from './App.vue'
// 导入elementUI组件及css
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 注册elementUI
Vue.use(elementUI)
// 导入路由
import router from './router/router'
// 导入全局css样式
import '../src/style/index.css'
Vue.config.productionTip = false
// 创建vue实例
new Vue({
  render: h => h(App),
  // 挂载路由
  router
}).$mount('#app')
