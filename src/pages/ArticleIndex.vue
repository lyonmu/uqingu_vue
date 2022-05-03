<template>
  <!-- <div class="centertext"> -->
  <div>
    <div class="borderStyle">
      <p class="pstyle">{{ Article.title }}</p>
      <el-descriptions :column="1" :direction="direction[0]" :size="size[0]">
        <el-descriptions-item
          label-class-name="my-label"
          content-class-name="my-content"
          :contentStyle="{ 'text-align': 'left' }"
          label="文章简介"
        >
          <!-- {{ Article.introduce }} -->
          李晓教授的讲话：国家命运与个人命运
        </el-descriptions-item>
        <el-descriptions-item
          label="作者"
          label-class-name="my-label"
          content-class-name="my-content"
        >
          <!-- {{ Article.userid }} -->
          木青
        </el-descriptions-item>
        <el-descriptions-item
          label="发布时间"
          label-class-name="my-label"
          content-class-name="my-content"
        >
          {{ Article.updatetime | timeFormater }}
        </el-descriptions-item>
        <el-descriptions-item
          label="分类"
          label-class-name="my-label"
          content-class-name="my-content"
        >
          <!-- <el-tag size="small">{{ Article.classifyid }}</el-tag> -->
          <el-tag size="medium" effect="dark">编程</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "ArticleIndex",
  props: ["Article"],
  data() {
    return {
      direction: ["vertical", "horizontal"],
      size: ["medium ", "small", "mini"],
    };
  },
  methods: {},
  mounted() {},
  computed: {},

  filters: {
    timeFormater(value, str = "YYYY年MM月DD日") {
      return dayjs(value).format(str);
    },
  },
};
</script>

<style>
.centertext {
  margin: 100px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.borderStyle {
  width: 280px;
  background-color: #dff0e8;
  border: 5px inset #b5e4f1;
  border-radius: 10px;
}
.pstyle {
  margin-left: 100px;
  margin-top: 5px;
  font-family: "STKaiti";
  font-size: 20px;
  font-weight: bold;
}
.my-label {
  font-family: "STKaiti", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  background: #e1f3d8;
}
.my-content {
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  padding-top: 5px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #c2ccd0;
}
</style>
