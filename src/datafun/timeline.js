// 获取数据的函数
import axios from "axios";
// 后端服务地址
const SERVER_URl = "http://192.168.0.103:8001";
//时间轴信息相关
export default {
    getTimelineInfo: async () => {
        try {
            const data = await axios.get(SERVER_URl + "/timeline/gets");
            return data.data.data
        } catch (error) {
            console.error(error);
        }
    }
}
