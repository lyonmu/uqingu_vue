// 顶部导航栏组件
<template>
  <div class="header">
    <el-menu
      mode="horizontal"
      class="elmenu"
      background-color="#bbcdc5"
      text-color="#fff"
      active-text-color="#faff72"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="1" class="elmenuitem" disabled>
        <el-avatar class="img" :size="size" :src="url" :fit="fit" />
      </el-menu-item>
      <el-menu-item index="index" class="elmenuitem">
        <!-- <router-link class="elmenuitem" to="/index"> -->
          Index
        <!-- </router-link> -->
      </el-menu-item>
      <el-menu-item index="essay" class="elmenuitem">
        <!-- <router-link class="elmenuitem" active-class="active" to="/essay"> -->
          About Me
        <!-- </router-link> -->
      </el-menu-item>
      <el-menu-item index="4" class="elmenuitem">全部文章</el-menu-item>
      <el-menu-item index="5" class="elmenuitem">时间轴</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      url: "https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/avatar.png",
      fit: "fill",
      size: 20,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.header {
  /* background-color: rgb(191, 228, 59); */
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  border: 0ch;
  height: 40px;
}
.elmenu {
  padding: 0;
  width: 100%;
  border: 0ch;
  height: 40px;
}
.elmenuitem {
  text-decoration:none;
  height: 40px;
  line-height: 40px;
}
</style>
