// 获取数据的函数
import axios from "axios";
// 后端服务地址
const SERVER_URl = "http://192.168.0.103:8001";
export default {
    getSiteInfo: async () => {
        try {
            const data = await axios.get(SERVER_URl + "/site/get");
            return data.data.data;
        } catch (error) {
            console.error(error);
        }
    }
}
