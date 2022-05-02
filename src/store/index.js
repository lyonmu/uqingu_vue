//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import { getSiteInfo } from "../datafun";
import dayjs from 'dayjs';

// 引入获取数据的函数模块
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    getSiteInfoActions(context) {
        getSiteInfo().then((response) => {
            context.commit('getSiteInfoMutations', response);
        });
    }
}
//准备mutations——用于操作数据（state）
const mutations = {
    getSiteInfoMutations(state, value) {
        state.SiteInfo = value;
    }
}
//准备state——用于存储数据
const state = {
    SiteInfo: {},
}

//准备getters——用于将state中的数据进行加工
const getters = {
    runtime(state) {
        let end = Date.parse(new Date());
        let fend = dayjs(end).format("YYYY年MM月DD日 HH:mm:ss")

        console.log(fend)
        const x = state.SiteInfo.createtime
        let fx = dayjs(x).format("YYYY年MM月DD日 HH:mm:ss")
        console.log(fx)
        return fx
    }
}

//创建并暴露store
export default new Vuex.Store({
    getters,
    actions,
    mutations,
    state,
})
