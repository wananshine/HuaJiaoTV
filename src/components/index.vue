<template>
  <div class="all-container">
    <div>
      <transition :name="transitionName">
        <router-view />
      </transition>
      <bottom-footer></bottom-footer>
    </div>
    <login-mask></login-mask>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
// @import (reference) url(../../assets/css/cost.less);
@import "../assets/css/reset.css";
.all-container{
  min-width: 980px;
}
</style>



<script>

import bottomFooter from './ssi/footer'
import loginMask from './ssi/loginMask'  //登录弹出框

export default {
  components: {
      bottomFooter,
      loginMask
    },
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionName: 'slide-left',
    }
  },

  // 接着在父组件内,   watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  created(){

  }
}



// console.log([
//     "                   _ooOoo_",
//     "                  o8888888o",
//     "                  88\" . \"88",
//     "                  (| -_- |)",
//     "                  O\\  =  /O",
//     "               ____/`---'\\____",
//     "             .'  \\\\|     |//  `.",
//     "            /  \\\\|||  :  |||//  \\",
//     "           /  _||||| -:- |||||-  \\",
//     "           |   | \\\\\\  -  /// |   |",
//     "           | \\_|  ''\\---/''  |   |",
//     "           \\  .-\\__  `-`  ___/-. /",
//     "         ___`. .'  /--.--\\  `. . __",
//     "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
//     "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
//     "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
//     "======`-.____`-.___\\_____/___.-`____.-'======",
//     "                   `=---='",
//     "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
//     "             佛祖保佑       永无BUG",
//     " 佛曰:",
//     // "           写字楼里写字间，写字间里程序员；",
//     // "           程序人员写程序，又拿程序换酒钱。",
//     // "           酒醒只在网上坐，酒醉还来网下眠；",
//     // "           酒醉酒醒日复日，网上网下年复年。",
//     // "           但愿老死电脑间，不愿鞠躬老板前；",
//     // "           奔驰宝马贵者趣，公交自行程序员。",
//     // "           别人笑我忒疯癫，我笑自己命太贱；",
//     // "           不见满街漂亮妹，哪个归得程序员？"
    

    
// ].join('\n'));
</script>



