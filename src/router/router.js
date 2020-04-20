// 导入vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 导入login组件
import login from '../views/login/index.vue'
// 注册router
Vue.use(VueRouter)
// 创建路由实例
const router = new VueRouter({
    routes:[
        {
            path:'/login',
            component:login
        }
    ]
})
export default router
