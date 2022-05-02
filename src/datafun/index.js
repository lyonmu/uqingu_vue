// 获取数据的函数
import axios from "axios";
// 后端服务地址
const SERVER_URl = "http://192.168.0.103:8001";

async function getSiteInfo() {
    try {
        const data = await axios.get(SERVER_URl + "/site/get");
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
async function getUserInfo(id) {
    try {
        const data = await axios.get(SERVER_URl + "/user/get" + id);
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
async function getClassifyInfo() {
    try {
        const data = await axios.get(SERVER_URl + "/classify/gets");
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
async function getTimelineInfo() {
    try {
        const data = await axios.get(SERVER_URl + "/timeline/gets");
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
async function getEssaysInfo() {
    try {
        const data = await axios.get(SERVER_URl + "/essay/gets");
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
async function getEssayInfo(id) {
    try {
        const data = await axios.get(SERVER_URl + "/essay/get" + id);
        return data.data.data
    } catch (error) {
        console.error(error);
    }
}
//导出所有函数
export { getSiteInfo, getUserInfo, getClassifyInfo, getTimelineInfo, getEssaysInfo, getEssayInfo };

