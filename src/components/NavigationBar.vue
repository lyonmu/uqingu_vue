// 顶部导航栏组件
<template>
  <div>
    <el-header class="header">
      <el-menu
        :default-active="activeIndex2"
        mode="horizontal"
        class="elmenu"
        @select="handleSelect"
        background-color="#758a99"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">处理中心</el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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
  background-color: rgb(191, 228, 59);
  padding: 0px 0px;
  margin: 0%;
  border: 0ch;
}
.elmenu {
  padding: 0;
  width: 100%;
  border: 0ch;
}
</style>
