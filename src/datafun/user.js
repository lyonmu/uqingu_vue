// 获取数据的函数
import axios from "axios";
// 后端服务地址
const SERVER_URl = "http://192.168.0.103:8001";
//用户信息相关
export default {
    getUserInfo: async (id) => {
        try {
            const data = await axios.get(SERVER_URl + "/user/get" + id);
            return data.data.data
        } catch (error) {
            console.error(error);
        }
    }
}
