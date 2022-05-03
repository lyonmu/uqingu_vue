// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import SiteIndex from "../pages/SiteIndex";
import ArticleContext from "../pages/ArticleContext";
// import ArticleIndex from "../pages/ArticleIndex";
import ArticleList from "../pages/ArticleList";


//创建并暴露一个路由器
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: SiteIndex
        },
        {
            path: '/essay',
            name: "essay",
            component: ArticleContext
        },
        // {
        //     path: '/essayindex',
        //     name: "essayindex",
        //     component: ArticleIndex
        // },
        {
            path: '/essaylist',
            name: "essaylist",
            component: ArticleList
        }
    ]
})
