<template>
  <div class="divbackground">
    <div class="test">
      <div class="c-html-render">
        <Markdown
          :isPreview="true"
          :theme="theme[1]"
          :value="ArticleInfo.body"
        ></Markdown>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "vue-meditor";
import { mapActions, mapState } from "vuex";
export default {
  name: "ArticleContext",
  data() {
    return {
      theme: ["light", "dark", "oneDark", "gitHub"],
      Articleid: 0,
    };
  },
  components: {
    Markdown,
  },
  methods: {
    ...mapActions("essayOptions", ["getEssayActions"]),
  },
  mounted() {
    this.Articleid = this.$route.query.id;
    this.getEssayActions(this.Articleid);
  },
  computed:{
    ...mapState("essayOptions", ["ArticleInfo"]),
  }
};
</script>

<style scoped>
.test {
  width: 900px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.divbackground {
  background-image: url(https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/pexels-daniel-torobekov-11258462.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(35, 118, 183);
  min-height: calc(100vh - 95px);
}
</style>
