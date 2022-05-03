import { EssayServer } from "../datafun";

//文章信息相关
export default {
    namespaced: true,
    actions: {
        getEssayListActions(context) {
            EssayServer.getEssayList().then((response) => {
                context.commit('getEssayListMutations', response);
            });
        },
        getEssayActions(context,value) {
            EssayServer.getEssayInfo(value).then((response) => {
                context.commit('getEssayMutations', response);
            });
        },
    },
    mutations: {
        getEssayListMutations(state, value) {
            state.ArticleList = value;
        },
        getEssayMutations(state, value) {
            state.ArticleInfo = value;
        }
    },
    state: {
        ArticleList: {},
        ArticleInfo: {}

    },
    getters: {
    },
}
