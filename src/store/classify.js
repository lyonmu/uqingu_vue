import { ClassifyServer } from "../datafun";
//分类信息相关
export default {
    namespaced: true,
    actions: {
        getClassifyListActions(context) {
            ClassifyServer.getClassifyList().then((response) => {
                context.commit('getClassifyListMutations', response);
            });
        },
        getClassifyActions(context, value) {
            ClassifyServer.getClassifyInfo(value).then((response) => {
                context.commit('getClassifyMutations', response);
            });
        },
    },
    mutations: {
        getClassifyListMutations(state, value) {
            state.ClassifyList = value;
        },
        getClassifyMutations(state, value) {
            state.ClassifyInfo = value;
        }

    },
    state: {
        ClassifyList: {},
        ClassifyInfo: {}

    },
    getters: {

    },
}
