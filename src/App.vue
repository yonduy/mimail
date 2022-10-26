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
    this.axios.get('/mock/user/login.json').then((res)=>{
      this.res = res
    //通过easy-mock平台实现数据mock
    

    })

   

  }
}
</script>

<style>
</style>
