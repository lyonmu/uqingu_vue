import { EssayServer } from "../datafun";

//文章信息相关
export default {
    namespaced: true,
    actions: {
        getEssayListActions(context) {
            EssayServer.getEssayList().then((response) => {
                context.commit('getEssayListMutations', response);
            });
        }
    },
    mutations: {
        getEssayListMutations(state, value) {
            state.ArticleList = value;
        }
    },
    state: {
        ArticleList: {},
        ArticleInfo: {}

    },
    getters: {
    },
}
