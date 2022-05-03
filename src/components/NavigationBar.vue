// 顶部导航栏组件
<template>
  <div class="header">
    <el-menu
      mode="horizontal"
      class="elmenu"
      background-color="#bbcdc5"
      text-color="#fff"
      active-text-color="#faff72"
      :router="true"
      :default-active="activeIndex"
    >
      <el-menu-item index="/" class="elmenuitem">
        <el-avatar :size="size" :src="url" :fit="fit" />
      </el-menu-item>
      <el-menu-item index="/" class="elmenuitem"> Index </el-menu-item>
      <el-menu-item index="essay" class="elmenuitem"> About Me </el-menu-item>
      <el-menu-item index="essaylist" class="elmenuitem">
        我的文章
      </el-menu-item>
      <!-- <el-menu-item index="#" class="elmenuitem">时间轴</el-menu-item> -->
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
      size: 30,
      activeIndex: "index",
    };
  },
  methods: {},
};
</script>

<style scoped>
.header {
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
  text-decoration: none;
  height: 40px;
  line-height: 40px;
}
</style>
