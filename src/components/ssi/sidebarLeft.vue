<template>
	<div class="lbar-wrap">
		<transition name="fade">
			<div class="bar-pack" v-show="lbShow">
				<div class="bar-top">
					<!-- 
						name  && params
						path  && query
						:to="{  path:'index/demoDetail/'+sku.sku_id, params: { id: sku.sku_id } }"
	          			:to="{  path:'index/demoDetail/'+sku.sku_id, params: { id: sku.sku_id } }" 
	          		-->
					<dl class="bar-dl" @click="homeCustomer()">
						<dt><mu-icon size="36" color="#787878" value="home"></mu-icon></dt>
						<dd class="bar-txt">首页</dd>
					</dl>
					<dl class="bar-dl" @click="serCustomer()">
						<dt><mu-icon size="36" color="#787878" value="search"></mu-icon></dt>
						<dd class="bar-txt">搜索</dd>
					</dl>
					<dl class="bar-dl" @click="attCustomer()">
						<!-- adjust -->
						<dt><mu-icon size="36" color="#787878" value="album"></mu-icon></dt>
						<dd class="bar-txt">关注</dd>
					</dl>
					<dl class="bar-dl" @click="tpCustomer()">
						<!-- category dashboard-->
						<dt><mu-icon size="36" color="#787878" value="dashboard"></mu-icon></dt>
						<dd class="bar-txt">分类</dd>
					</dl>
				</div>
				<!--未登录-->
				<div class="bar-btm no-login" v-show="isLogin === 2">
					<dl class="bar-dl">
						<!-- monochrome_photos movie_creation movie_filter linked_camera missed_video_call video_call videocam-->
						<dt><mu-icon size="36" color="#ff466e" value="videocam"></mu-icon></dt>
						<dd class="bar-txt" style="color: #ff466e">开播</dd>
					</dl>
					<dl class="bar-dl" @click="signinPop()">
						<dt><mu-icon size="36" color="#787878" value="vpn_key"></mu-icon></dt>
						<dd class="bar-txt">登录</dd>
					</dl>
				</div>
				<!--已登录-->
				<div class="bar-btm already-login" v-show="isLogin === 1">
					<dl class="bar-dl">
						<dt><mu-icon size="36" color="#787878" value="monochrome_photos"></mu-icon></dt>
						<dd class="bar-txt">提现</dd>
					</dl>
					<dl class="bar-dl">
						<dt><mu-icon size="36" color="#ff466e" value="videocam"></mu-icon></dt>
						<dd class="bar-txt" style="color: #ff466e">开播</dd>
					</dl>
					<dl class="bar-dl" @click="userCustomer()">
						<dt>
							<mu-avatar>
								<img src="https://muse-ui.org/img/uicon.ac3913bf.jpg">
							</mu-avatar>
						</dt>
					</dl>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div class="bar-spread" v-show="!lbShow">
				<div class="bar-top">
					<div class="tbar-item tbar-logo">logo</div>
					<div class="tbar-item tbar-home" @click="homeCustomer()">网站首页</div>
					<div class="tbar-item tbar-sear">
						<input class="search-input" v-model="searchKey" @input="keyCustomer(searchKey)" @keyup="keyupHandle(searchKey,$event)" placeholder="搜ID/名称/标题"/>
					</div>
					<div class="tbar-item tbar-atten" @click="attCustomer()">我的关注</div>
					<div class="tbar-item tbar-alltype">全部分类</div>
					<div class="tbar-item">
						<!--router-link :to="{'path': '/index/type/'+tag.categoryID }" -->
						<a class="tbar-fix" v-for="(tag, tagNO) in lbCategorys" :key="tagNO" @click="linkCustomer(tag, $event)">{{tag.categoryName}}</a>
					</div>
				</div>
				<!--未登录-->
				<div class="bar-btm no-login" v-show="isLogin === 2">
					<div></div>
					<div>
						<mu-button full-width color="secondary">开播</mu-button>
						<p class="btn-group">
							<mu-button class="" color="" @click="signinPop()">登录</mu-button>
						    <mu-button>注册</mu-button>
						</p>
					</div>
				</div>

				<!--已登录-->
				<div class="bar-btm already-login" v-show="isLogin === 1">
					<div class="">
						<mu-button full-width color="">我要提现</mu-button>
					</div>
					<div class="premiere">
						<mu-button full-width color="secondary">我要开播</mu-button>
					</div>
					<figure class="head-pic">
						<figcaption @click="userCustomer()">
							<mu-avatar>
								<img src="https://muse-ui.org/img/uicon.ac3913bf.jpg">
							</mu-avatar>
						</figcaption>
						<div class="link-cont">
							<p @click="userCustomer()">在路上</p>
							<p class="loginout" @click="loginoutCustomer()">退出</p>
						</div>
					</figure>
				</div>

			</div>
		</transition>
		<a class="bar-btn" @click="lbCustomer()"></a>
	</div>
</template>

<script>
  export default {
    components: {},
    name: "sidebarLeft",
    data(){
      return{
      	searchKey: '',
      	lbShow: true,
      	lbCategorys: [
      		{ "categoryName": "热门", "categoryID": "102" },
      		{ "categoryName": "吃鸡", "categoryID": "103" },
      		{ "categoryName": "女神", "categoryID": "104" },
      		{ "categoryName": "男神", "categoryID": "105" },
      		{ "categoryName": "校园", "categoryID": "106" },
      		{ "categoryName": "颜值", "categoryID": "107" },
      		{ "categoryName": "脱口秀", "categoryID": "108" },
      		{ "categoryName": "弹唱", "categoryID": "109" },
      		{ "categoryName": "玩乐", "categoryID": "202" },
      		{ "categoryName": "跳舞", "categoryID": "302" },
      		{ "categoryName": "游戏", "categoryID": "402" },
      		{ "categoryName": "娱乐明星", "categoryID": "502" },
      		{ "categoryName": "城市之声", "categoryID": "602" },
      		{ "categoryName": "小视频", "categoryID": "702" }
      	]
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
    methods: {

      	//左侧栏收起 or 展开 
      	lbCustomer(){
        	const _this = this;
        	_this.lbShow = !_this.lbShow;
        	// _this.$store.commit('signinShow')
        	// console.log(123,_this.$store)
      	},

	    //显示登录框
	    signinPop(){
	        const _this = this;
	        _this.$store.commit('signinShow')
	        console.log(1203,_this.$store.getters)
	    },

     	//返回首页
      	homeCustomer(){
      		const _this = this;
      		_this.$router.push({
				// name: 'demoDetail', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
				// params: { }
				path: '/index/home', 
				query: {}
        	})
      	},

      	//搜索
      	serCustomer(){
      		const _this = this;
        	_this.lbShow = !_this.lbShow;
      		console.log("左侧栏搜索")
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

      	//跳转到关注列表
      	attCustomer(){
      		const _this = this;

      		//跳转到关注页面
      		_this.$router.push({
        	     // name: 'demoDetail', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
        	     // params: { }
        	     path: '/index/attention', 
        	     query: {}
        	 })

      		console.log(_this.lbShow)

			//在新页面打开关注页面
      		//const { href } = _this.$router.resolve({
            	// name: 'demoDetail', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
            	// params: { }
            //	path: '/index/attention', 
            //	query: {}
        	//})
        	//window.open(href, '_blank')  //还可以设置'toolbar=yes, width=1300, height=900'

        	//在新页面打开关注页面
      		//const newWin = _this.$router.resolve({
            	// name: 'demoDetail', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
            	// params: { }
            //	path: '/index/attention', 
            //	query: {}
        	//})
        	//window.open(newWin.href, '_blank')  //还可以设置'toolbar=yes, width=1300, height=900'
      	},

      	//分类
      	tpCustomer(){
      		const _this = this;
        	_this.lbShow = !_this.lbShow;
      		console.log("左侧栏分类",'linkCustomer',_this.lbShow)
      	},

      	//分类跳转
      	linkCustomer(tag, e){
      		const _this = this;
      		//跳转到关注页面
      		_this.$router.push({
        	     // name: 'demoDetail', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
        	     // params: { }
        	     path: '/index/type/'+tag.categoryID, 
        	     query: {}
        	 })

      		console.log('linkCustomer',_this.lbShow)
      	},

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

		//退出登录
		loginoutCustomer(){
			console.log('removeItem');
			localStorage.removeItem('token');
			window.location.href="";
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
	// @import "../../../assets/css/level.less";
	@url:'';

	.mgtop{
		margin-top: 20px;
	}
	.fs-14{
		font-size: 14px;
	}
	.fs-12{
		font-size: 12px;
	}

	.lbar-wrap{
		.pof;
		left: 0px;
		top: 0px;
		bottom: 0px;
		text-align: center;
		z-index: 100;
		background-color: @fff;
		//侧边栏收起
		.bar-pack{
			width: 70px;
			.bar-top{
				padding: 0px 15px;	
			}
			.bar-btm{
				.colCenter;
				top: 82%;
			}
			.bar-dl{
				cursor: pointer;
			    padding: 8px 0px;
			    border-bottom: 1px solid @f5f5;
				.bar-txt{
					color: @333;
					.fs-12;
				}
			}
		}

		//侧边栏展开
		.bar-spread{
			width: 280px;
			text-align: left;
    		padding: 22px 6px 0px 22px;
    		.bar-top{
    			.tbar-item{
					.mgtop;
					.fs-14;
					cursor: pointer;
					.tbar-fix{
						width: 74px;
					    height: 26px;
					    line-height: 26px;
					    text-align: center;
					    background-color: @efef;
					    border-radius: 3px;
					    display: inline-block;
					    margin: 0 10px 5px 0;
					    margin-bottom: 5px;
					    color: @3131;
					    .fs-12;
					    &:hover{
					    	color: @fff;
					    	background-color: #fa3a70;
					    }
					}
					input{
						.input;
					}
				}
    		}
			.bar-btm{
				.colCenter;
				top: 82%;
				width: @full;
				padding: 0px 20px;
				.btn-group{
					button{
						margin: 20px 10px 0px;
					}
				}
				.premiere{
					margin: 10px auto;
				}
				.head-pic{
					text-align: center;
					figcaption{
						display: inline-block;
						vertical-align: top;
                        cursor: pointer;
					}
					.link-cont{
						display: inline-block;
						vertical-align: top;
						p{
							line-height: 22px;
                            cursor: pointer;
						}
						.loginout{
							font-size: 12px;
							color: @999;
							cursor: pointer;
						}
					}
				}
			}
		}
		
		.bar-btn{
			.poa;
		    top: 50%;
		    right: -10px;
		    background: url('http://p0.qhimg.com/d/inn/3d8a5276/icon_sidemenu.png') no-repeat 0 -397px;
		    width: 10px;
		    height: 80px;
		    float: right;
		    margin-top: -80px;
		    margin-left: 0;
		    margin-right: 0;
		    border: 0;
		    transition: none;
		    cursor: pointer;
		}
	}



	.fade-enter{
		opacity: 0;
	}
	.fade-enter-active{
  		transition: opacity 1s;
	}
	.fade-leave-active{

	}
	.fade-leave-to {
  		opacity: 0;
	}
</style>