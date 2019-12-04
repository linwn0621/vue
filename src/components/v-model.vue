<template>
  <div>
    <input type="text" v-model="name" />
    <input type="password" v-model="pass" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    login() {
      alert(this.name + this.pass);
    }
  }
};
</script>

<style>
</style>