<template>
  <header class="header">
    <div class="head-layer">
      <div class="log"></div>
      <nav class="nav-list">
        <!-- 
          :class="{'nav-current': navIndex === navNo}" target="_blank"  
          :to="{ name: 'type', params: { id: tagid  } }"
          :to="{  path:'index/type, query: { id: sku.sku_id } }"
          :to="{  path:'index/demoDetail/'+sku.sku_id, query: { id: sku.sku_id } }"
        -->
        <div class="nav-cell" v-for="(nav, navNo) in navList" :key="navNo"  @click="navCustomer(nav, navNo)">
            <router-link class="nav-el" :to="nav.link" >{{nav.navtxt}}</router-link>
            <div v-if="navNo == 1" class="dropdown">
                <router-link v-for="(tag, tagNo) in nav.tags" :to="'type/'+tag.tagid" class="tag" :key="tagNo">
                  {{tag.tagtxt}}
                </router-link>
            </div>
        </div>
      </nav>
      <div class="login-box">
        <div class="search-group">
          <input class="search-input" v-model="searchKey" @input="keyCustomer(searchKey)" @keyup="keyupHandle(searchKey,$event)" placeholder="搜ID/名称/标题"/>
        </div>
        <!--未登录-->
        <div class="no-login" v-show="isLogin === 2">
          <mu-button color="secondary" @click="signinPop()">登录</mu-button>
          <mu-button @click="signupPop()">注册</mu-button>
          <!-- <a class="login" href="javascript:void(0);" @click="signinPop()">登录</a>
          <a class="register" href="javascript:void(0);" @click="signupPop()">注册</a> -->
        </div>

        <!--已登录-->
        <div class="already-login" v-show="isLogin === 1">
          <mu-button flat color="gray">
            <mu-icon left value="grade"></mu-icon>
            关注
          </mu-button>
          <a class="myCenter" @click="userCustomer()">
            <mu-avatar>
              <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg">
            </mu-avatar>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    import { game } from '../../api/api'
  export default {
    components: {},
    name: "",
    data(){
      return{
        searchKey: '',
        navIndex: 0,
        navList: [
          {
            "link": "home",
            "navtxt":"首页"
          },
          {
            "link": "type/801",  //living
            "navtxt":"直播",
            "tags": [
                { "tagtxt": "热门",       "tagid": "801" },
                { "tagtxt": "吃鸡",       "tagid": "802" },
                { "tagtxt": "女神",       "tagid": "803" },
                { "tagtxt": "男神",       "tagid": "804" },
                { "tagtxt": "校园",       "tagid": "805" },
                { "tagtxt": "颜值",       "tagid": "806" },
                { "tagtxt": "脱口秀",     "tagid": "807" },
                { "tagtxt": "玩乐",       "tagid": "808" },
                { "tagtxt": "游戏",       "tagid": "807" },
                { "tagtxt": "娱乐明星",   "tagid": "808" },
                { "tagtxt": "小视频"  ,   "tagid": "809" },
            ]
          },
          {
            "link": "type/802",  //dancing
            "navtxt":"跳舞"
          },
          {
            "link": "type/803", //musical
            "navtxt":"弹唱",
          },
          {
            "link": "rank",
            "navtxt":"排行榜"
          },
          {
            "link": "maobo",
            "navtxt":"猫啵直播"
          },
          {
            "link": "detail",
            "navtxt":"测试"
          }
          
        ],
      }
    },
    computed: {
      navDate(){
        return this.$store.getters.navList
      },
      isLogin(){
        return this.$store.getters.isLogin
      }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to, from)
      }
    },
    beforeCreate(){},
    created(){
        
      this.$nextTick(function(){

      });
    },
    beforeMount(){},
    mounted(){
      this.$nextTick(function(){
          
          console.log(game)
          game().then( res =>{
            console.log('res',res)
            console.log('1111111111111111111111111:')
        }).catch( error => {
            console.log(error)
        })
      })
    },
    beforeUpdate(){},
    updated(){},
    methods: {

      //个人中心
      userCustomer(){
        console.log("个人中心")
        const _this = this;
          _this.$router.push({
            name: 'user', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
            params: { 
              params: '00000000'
            }
            // path: '/index/home', 
            // query: {}
        })
      },

      //输入关键词
      keyCustomer(key){
        //console.log(this.searchKey)
      },

      //关键词搜索
      keyupHandle(key,e){
        //console.log(e)
        if(e.code === 'Enter' || e.key === 'Enter'){
          console.log(this.searchKey,e.code, e.key)
        }
      },

      navCustomer(nav, navno){
        const _this = this;
        _this.navIndex = navno;

        
      },

      signinPop(){
        const _this = this;
        _this.$store.commit('signinShow')
        console.log(1233,_this.$store)
      },
      signupPop(){

      }
    },

    beforeRouteEnter(to, from, next){
        console.log(this, 'beforeRouteEnter'); // undefined
        console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
        console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
        console.log(next, '组件独享守卫beforeRouteEnter第三个参数');
        next(vm => {
          //因为当钩子执行前，组件实例还没被创建
          // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
          console.log(vm);//当前组件的实例
        });
    },
    beforeRouteUpdate(to, from, next){
        //在当前路由改变，但是该组件被复用时调用
        //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
        // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log(this, 'beforeRouteUpdate'); //当前组件实例
        console.log(to, '组件独享守卫beforeRouteUpdate第一个参数');
        console.log(from, '组件独享守beforeRouteUpdate卫第二个参数');
        console.log(next, '组件独享守beforeRouteUpdate卫第三个参数');
        next();
    },
    beforeRouteLeave(to, from, next){
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log(this, 'beforeRouteLeave'); //当前组件实例
        console.log(to, '组件独享守卫beforeRouteLeave第一个参数');
        console.log(from, '组件独享守卫beforeRouteLeave第二个参数');
        console.log(next, '组件独享守卫beforeRouteLeave第三个参数');
        next();
    }
  }
</script>

<style lang="less" scoped>
@import (reference) url(../../assets/css/base.less);
.header{
  .all;
  overflow: visible;
  .head-layer{
    .por;
    width: @w2;
    margin: 0 auto;
    .clearfix;
    color: @333;
    .log{
      .poa;
      top: 22%;
      left: 0px;
      width: 130px;
      height: 29px;
      background-position: 0px -23px;
      background-repeat: no-repeat;
      background-image: url("http://p9.qhimg.com/t01876579f741ec8b00.png");
    }
    .nav-list{
      .por;
      padding-left: 156px;
      text-align: left;
      line-height: 50px;
      .nav-cell{
        .por;
        cursor: pointer;
        display: inline-block;
        .nav-el{
          padding: 0px 15px;
          color: @333;
          line-height: 40px;
          font-size: 18px;
          display: block;
        }
        &:hover{
            color: #ff4970;
            .dropdown{
              display: block;
              .tag{
                display: block;
                color: @333;
              }
            }

        }
        .dropdown{
          .poa;
          top: 40px;
          left: 0;
          display: none;
          background-color: @fff;
          width: 342px;
          padding: 15px 7px 5px;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);
          border-radius: 4px;
          z-index: 100;
          .tag{
            width: 70px;
            line-height: 24px;
            float: left;
            font-size: 14px;
            margin: 0 0 12px;
            text-align: center;
            background-color: @ecec;
            &:not(:nth-of-type(4n)){
              margin-right: 12px;
            }
            &:hover{
                background: #ff4970;
                color: #fff;
            }
          }
        }
      }
      
      .nav-current{
        color: #ff4970;
        border-bottom: 5px solid #ff4970;
      }
    }
    .login-box{
      .poa;
      right: 0%;
      top: 0%;
      padding: 4px 0px;
      .search-group{
        .hid;
        display: inline-block;
        vertical-align: middle;
        margin-right: 16px;
        .search-input{
          .input;
          outline: none;
          display: block;
          padding-right: 10px;
        }
      }
      .no-login{
        display: inline-block;
        a{
          color: @333;
        }
      }
      .already-login{
        .hid;
        display: inline-block;
        vertical-align: middle;
        .myCenter,button{
          display: inline-block;
          vertical-align: middle;
          margin-top: 1px;
          cursor: pointer;
        }
      }
    }
  }

}


</style>
