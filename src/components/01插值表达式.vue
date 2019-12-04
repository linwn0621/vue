<template>
  <div class="first">
    你好
    <p>{{msg}}</p>
    <p>{{"我叫"+myname}}</p>
    <p>{{age+1}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      myname: "牛大",
      age: 60
    };
  }
};
</script>

<style>
</style>