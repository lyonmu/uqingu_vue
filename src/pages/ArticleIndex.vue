<template>
  <div class="centertext">
    <div v-for="item in ArticleList" :key="item.id">
      <div class="borderStyle" v-show="item.visibility === 0">
        <p class="pstyle">{{ item.title }}</p>
        <el-descriptions :column="2">
          <el-descriptions-item label="作者">
            {{ item.userid }}
          </el-descriptions-item>
          <el-descriptions-item label="文章发布时间">
            {{ item.updatetime | timeFormater }}
          </el-descriptions-item>
          <el-descriptions-item label="分类">
            <el-tag size="small">{{ item.classifyid }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item
            :contentStyle="{ 'text-align': 'right' }"
            label="文章简介"
          >
            {{ item.introduce }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "ArticleIndex",
  data() {
    return {};
  },
  methods: {
    ...mapActions("essayOptions", ["getEssayListActions"]),
  },
  mounted() {
    this.getEssayListActions();
  },
  computed: {
    ...mapState("essayOptions", ["ArticleList"]),
    ...mapGetters("essayOptions", ["fmttime"]),
  },

  filters: {
    timeFormater(value, str = "YYYY年MM月DD日 HH:mm:ss") {
      return dayjs(value).format(str);
    },
  },
};
</script>

<style>
.centertext {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.borderStyle {
  width: 900px;
  background-color: #a4e2c6;
  border: 10px inset #44cef6;
  border-radius: 10px;
}
.pstyle {
  font-family: "STKaiti";
  font-size: 20px;
  font-weight: bold;
}
</style>
