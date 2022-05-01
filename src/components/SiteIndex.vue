// 网站首页组件
<template>
  <div>
    <el-container>
      <NavigationBar />
      <el-main class="banner">
        <div>
          <!-- <p class="titlefont">木青笔记</p> -->
          <p class="titlefont">{{ SiteInfo.title }}</p>
          <!-- <p class="sloganfont">即使如此，我依然会选择这滚烫的生活!</p> -->
          <p class="sloganfont">{{ SiteInfo.slogan }}</p>
          <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__rotateIn"
            leave-active-class="animate__rotateOut"
          >
            <el-avatar
              v-show="isShow"
              @click.native="test()"
              class="img"
              :size="size"
              :src="SiteInfo.logo"
              :fit="fit"
            />
          </transition>
        </div>
      </el-main>
      <el-footer>
        <OverFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import "animate.css";
import NavigationBar from "./NavigationBar";
import OverFooter from "./OverFooter";
import { mapActions,mapState } from "vuex";
export default {
  name: "SiteIndex",
  data() {
    return {
      size: 200,
      fit: "fill",
      isShow: true,
    };
  },
  components: {
    NavigationBar,
    OverFooter,
  },
  methods: {
    test() {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
      }, 500);
    },
    ...mapActions(["getSiteInfoActions"]),
  },
  mounted() {
    this.getSiteInfoActions();
  },
  computed: {
    ...mapState(['SiteInfo']),
  },
};
</script>

<style scoped>
.img {
  margin: 0 auto;
  height: 200px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
.banner {
  overflow: auto;
  height: 100vh;
  display: -webkit-flex;
  background-image: url(https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/pexels-daniel-torobekov-11258462.jpg);
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(35, 118, 183);
}
p {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.titlefont {
  font-family: "STKaiti";
  font-size: 70px;
  -webkit-text-stroke: 1px rgb(43, 51, 62);
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.sloganfont {
  font-family: "Party LET";
  font-size: 36px;
  font-weight: bold;
  -webkit-text-stroke: 1px rgb(86, 152, 195);
}
</style>
