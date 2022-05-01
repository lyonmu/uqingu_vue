// 获取数据的函数
import axios from "axios";

async function getSiteInfo() {
    try {
        const data = await axios.get("http://192.168.0.103:8001/site/get");
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
//导出所有函数
export { getSiteInfo };
