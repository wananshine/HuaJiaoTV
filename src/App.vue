<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
        
      }
    },
    computed: {}
}
</script>

<style lang="less">
@import (reference) url(./assets/css/base.less);
html{
  .scrollbar;
  *,#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: left;
    // color: #2c3e50;
    /*margin-top: 60px;*/
  }
}

</style>
