<template>
  <div>
    <el-backtop :bottom="60" :visibility-height="200">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        <rocket-one
          theme="multi-color"
          size="30"
          :fill="['#d41013', '#fffa2f', '#FFF', '#f8a843']"
          strokeLinecap="square"
        />
      </div>
    </el-backtop>
    <el-container :direction="direction">
      <el-header class="clear" :height="height"><NavigationBar /></el-header>
      <el-main class="clear elmain">
        <!-- 指定组件的呈现位置 -->
        <router-view />
      </el-main>
      <el-footer class="clear" :height="height"><OverFooter /></el-footer>
    </el-container>
    <div
      id="cc-myssl-id"
      style="
        position: fixed;
        right: 0;
        bottom: 0;
        width: 65px;
        height: 65px;
        z-index: 99;
      "
    >
      <a href="https://myssl.com/muqingcloud.space?from=mysslid"
        ><img
          src="https://static.myssl.com/res/images/myssl-id.png"
          alt=""
          style="width: 100%; height: 100%"
      /></a>
    </div>
  </div>
</template>

<script>
import { RocketOne } from "@icon-park/vue";
import NavigationBar from "./components/NavigationBar";
import OverFooter from "./components/OverFooter";

export default {
  name: "App",
  components: {
    NavigationBar,
    RocketOne,
    OverFooter,
  },
  data() {
    return {
      direction: "vertical",
      height: "40px",
    };
  },
  mounted() {
    var css = `
            background-image: linear-gradient(to right, orange, purple);
            -webkit-background-clip: text;
            color: white;
            font-size: 15px;
            border-radius:5px;`;
    console.log("%cuqingu 0.0.1-rc", css);
  },
};
</script>

<style scoped>
.clear {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  border: 0ch;
}
.container {
  min-height: 100vh;
}
.elmain{
  min-height: calc(100vh - 95px)
}
</style>
