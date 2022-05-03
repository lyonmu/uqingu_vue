//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import siteOptions from './site'
import essayOptions from './essay'
import classifyOptions from './classify'

//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules: {
        siteOptions,
        essayOptions,
        classifyOptions
    }
})
