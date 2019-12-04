<template>
  <div class="bind">
    <h1>说明bind使用</h1>
    <a v-bind:href="'/del?id='+id">删除</a>
    <p v-bind:style="'font-size:'+fontsize">你好</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 10,
      fontsize: "90px"
    };
  }
};
</script>

<style>
</style>