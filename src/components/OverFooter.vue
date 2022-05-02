<template>
  <div class="footerstyle">
    <el-footer>
      <p>Copyright © 2022 muqingcloud.space</p>
      <p>{{ SiteInfo.createtime }}</p>
      <p><a href="http://beian.miit.gov.cn/" target="_blank">{{ SiteInfo.ministry }}</a></p>
    </el-footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OverFooter",
  data() {
    return {
      runtime:''
    };
  },
  computed: {
    ...mapState(["SiteInfo"]),
  },
};
</script>

<style scoped>
.footerstyle {
  text-align: center;
  height: 11.5vh;
  background-color: #e9f1f6;
}
</style>
