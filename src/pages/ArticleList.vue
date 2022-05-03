<template>
  <div class="divbackground">
    <el-row>
      <el-col v-for="item in ArticleList" :key="item.id" :span="8">
        <ArticleIndex
          v-show="item.visibility === 0"
          class="testchildStyle"
          :Article="item"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleIndex from "./ArticleIndex";
import { mapActions, mapState } from "vuex";
export default {
  name: "ArticleList",
  components: {
    ArticleIndex,
  },
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
  },
};
</script>

<style scoped>
.divbackground {
  background-image: url(https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/pexels-daniel-torobekov-11258462.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(35, 118, 183);
  min-height: calc(100vh - 95px)
}
.testchildStyle {
  margin-top: 120px;
  margin-left: 100px;
}
</style>
