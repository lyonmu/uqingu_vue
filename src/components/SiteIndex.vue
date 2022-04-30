// 网站首页组件
<template>
  <div>
    <el-container>
      <!-- <NavigationBar /> -->
      <el-main class="banner">
        <!-- <div><h1>木青笔记</h1></div> -->

        <el-avatar class="img" :size="size" :src="circleUrl" :fit="fit" />
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
// import NavigationBar from "./NavigationBar";
export default {
  name: "SiteIndex",
  data() {
    return {
      circleUrl:
        "https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/avatar.png",
      size: 200,
      fit: "fill",
    };
  },
  components: {
    // NavigationBar,
  },
};
</script>

<style scoped>
.indexBanner {
  height: auto;
  background-color: blue;
}
.img {
  margin: 0 auto;
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
}
.wrap {
  line-height: 200px; /*垂直居中关键*/
  text-align: center;
  height: 200px;
  font-size: 36px;
  background-color: #ccc;
}
</style>
