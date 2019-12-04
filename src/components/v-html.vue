<template>
  <div class="text">
    <h1>你好</h1>
    <p v-html="msg"></p>
    <p v-html="msg+'你好棒'"></p>
    <p v-html="msg+'你好棒'"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello666<hr>"
    };
  }
};
</script>

<style>
</style>