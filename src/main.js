import Vue from 'vue'
// import App from './App.vue'
// import App from './components/01插值表达式.vue'
// import App from './components/v-text.vue'
// import App from './components/v-html.vue'
// import App from './components/v-bind.vue'
// import App from './components/v-for.vue'
import App from './components/v-model.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')