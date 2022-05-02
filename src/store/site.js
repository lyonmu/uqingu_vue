import { getSiteInfo } from "../datafun";
import dayjs from 'dayjs';
//网站信息相关
export default {
    namespaced: true,
    actions: {
        getSiteInfoActions(context) {
            getSiteInfo().then((response) => {
                context.commit('getSiteInfoMutations', response);
            });
        }
    },
    mutations: {
        getSiteInfoMutations(state, value) {
            state.SiteInfo = value;
        }
    },
    state: {
        SiteInfo: {},
    },
    getters: {
        runtime(state) {
            const x = state.SiteInfo.createtime
            let fx = dayjs(x).format("YYYY年MM月DD日 HH:mm:ss")
            return fx
        }
    },
}
