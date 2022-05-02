<template>
  <div class="footerstyle">
    <p>
      <a href="http://beian.miit.gov.cn/" target="_blank"
        >豫ICP备2021021610号-1</a
      >
    </p>
    <p>{{ runtime }}</p>
    <p>Copyright © 2022 muqingcloud.space</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "OverFooter",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState("siteOptions", ["SiteInfo"]),
    ...mapGetters("siteOptions", ["runtime"]),
  },
  mounted() {},
};
</script>

<style scoped>
.footerstyle {
  text-align: center;
  background-color: #bbcdc5;
  border: 0ch;
  padding-top: 0%;
  width: 100%;
}
p {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  color: #003472;
  font-size: 5px;
}
a {
  color: var(--base-color);
  text-decoration: none;
  transition: 0.3s;
}
</style>
