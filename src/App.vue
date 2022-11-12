<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {

    }
  },
  mounted() {
    //本地json请求
    /* this.axios.get('/mock/user/login.json').then((res)=>{
      this.res = res */
    //通过easy-mock平台实现数据mock  修改app.vue中的baseURL即可
    /* this.axios.get('user/login').then((res)=>{
      this.res = res */
    //本地集成mockjs实现数据mock
    this.axios.get('user/login').then((res)=>{
      this.res = res
    })
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
@import './assets/scss/config.scss';
</style>
