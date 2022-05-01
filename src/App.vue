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
    <!-- <ArticleContext/> -->
    <!-- <TestElementUI /> -->
    <SiteIndex />
  </div>
</template>

<script>
// import ArticleContext from "./components/ArticleContext";
// import TestElementUI from "./components/TestElementUI";
import SiteIndex from "./components/SiteIndex";
import { RocketOne } from "@icon-park/vue";

export default {
  name: "App",
  components: {
    // ArticleContext,
    // TestElementUI,
    SiteIndex,
    RocketOne,
  },
};
</script>

<style>
</style>
