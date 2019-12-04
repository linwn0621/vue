<template>
  <div class="for">
    <h1>v-for使用</h1>
    <p v-for="(value,index) in arr" :key="index">1</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style>
</style>