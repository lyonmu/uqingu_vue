<template>
  <div>
    <div class="test">
      <!-- <div class="markdown-body"> -->
      <div class="c-html-render">
        <Markdown
          :isPreview="true"
          :theme="theme[1]"
          :initialValue="value"
          :value="value"
        ></Markdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Markdown from "vue-meditor";
export default {
  name: "ArticleContext",
  data() {
    return { value: ``, theme: ["light", "dark", "oneDark", "gitHub"] };
  },
  components: {
    Markdown,
  },
  methods: {
    async getOne() {
      try {
        const response = await axios.get(
          "http://192.168.0.103:8001/essay/get/1"
        );
        this.value = response.data.data.body;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getOne();
  },
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
</style>
