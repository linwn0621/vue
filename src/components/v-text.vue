<template>
  <div class="text">
    <h1>你好</h1>
    <p v-text="msg"></p>
    <p v-text="msg+'你好棒'"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello666"
    };
  }
};
</script>

<style>
</style>