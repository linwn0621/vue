<template>
  <div class="for">
    <h1>v-for使用</h1>
    <p v-for="(value,index) in arr" :key="index">1</p>
    <table>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
      <tr v-for="(value,index) in arr" :key="index">
        <th>{{value.name}}</th>
        <th>{{value.age}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "jack",
          age: 20
        },
        {
          name: "jack111",
          age: 30
        }
      ]
    };
  }
};
</script>

<style>
</style>