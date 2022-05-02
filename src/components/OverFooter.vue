<template>
  <div class="footerstyle">
    <p>Copyright © 2022 muqingcloud.space</p>
    <p>{{ runtime }}</p>
    <p>
      <a href="http://beian.miit.gov.cn/" target="_blank">{{
        SiteInfo.ministry
      }}</a>
    </p>
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
    ...mapState(["SiteInfo"]),
    ...mapGetters(["runtime"]),
  },
  mounted() {},
};
</script>

<style scoped>
.footerstyle {
  text-align: center;
  background-color: #c2ccd0;
  border: 0ch;
  padding-top: 0%;
  width: 100%;
}
p {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  color: #003472;
  font-size: 10px;
}
a {
  color: var(--base-color);
  text-decoration: none;
  transition: 0.3s;
}
</style>
