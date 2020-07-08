<template>
  <el-row>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
  </el-row>
</template>

<script>
export default {
  name: "HelloWorld",
  async created() {
    const comments = await this.getComments();
    console.log(comments);
  },
  methods: {
    getComments() {
      return this.$http.get("/comments");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
