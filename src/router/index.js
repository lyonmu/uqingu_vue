// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import SiteIndex from "../pages/SiteIndex";
import ArticleContext from "../pages/ArticleContext";

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/index',
            component: SiteIndex
        },
        {
            path: '/essay',
            component: ArticleContext
        }
    ]
})
