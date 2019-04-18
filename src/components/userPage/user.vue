<template>
	<section class="user">
		
		<div class="user-wrap">
			<!-- Not including the default CSS -->
			<!--<link href="https://vjs.zencdn.net/4.0.4/video-js.css" rel="stylesheet"> -->
			<!-- <script src="https://vjs.zencdn.net/4.0.4/video.js"></script> -->

			<!--<video id="" controls class="" width="100%" height="360"  preload="auto" data-setup="{}">
				<source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
				<source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
				<p class="vjs-no-js"> To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a> </p>
			</video>-->

			<information></information>
			<div class="middle">
				<hot-dynamic></hot-dynamic>
				<defend-rank></defend-rank>
			</div>
		</div>
		<sidebar-left></sidebar-left>
	</section>
</template>

<script type="text/javascript">
	
	import sidebarLeft from '../ssi/sidebarLeft'
	import loading from './../ssi/loading'

	import information   from './e/information' //主播信息
	import hotDynamic   from './e/hotDynamic'	//主播动态
	import defendRank from './e/defendRank' 	//守护榜 
  	

	export default{
		components: {

			sidebarLeft,
			loading,

			information,
			hotDynamic,
			defendRank

		},

		data(){
			return{

			}
		},
		computed:{},
		watch: {
	        //监听数组
	        goodsData: {
	            handler: function (newVal) {
	                // console.log(newVal.length)
	            },
	            deep: true
	        },
	        //监听路由
	        '$route' (to, from) {
	          	// 获取最新的id 调用获取数据方法
			  	const _this = this;
				console.log(to, from)
				console.log(_this.$router,_this.$router.params,_this.$router.matched)
	          	//this.$route.params.goodsId;
	        }
		},
		beforeCreate() {
			const _this = this;
			console.log(_this.$http,_this.$router,_this.$router.params,_this.$router.matched)
		},
		created() {
			const _this = this;
			console.log(_this.$http,_this.$router,_this.$router.params,_this.$router.matched)
		},
		beforeMount() {
			const _this = this;
			console.log(_this.$http,_this.$router,_this.$router.params,_this.$router.matched)
		},
		mounted() {
			const _this = this;
			console.log(_this.$http,_this.$router,_this.$router.params,_this.$router.matched)
		},
		updated() {
			const _this = this;
			console.log(_this.$http,_this.$router,_this.$router.params,_this.$router.matched)
		},
	}

	
</script>

<style lang="less">
@import 'https://yourwebsite.com/style.css';
//@import (reference) url('https://codepen.io/username/pen/aBcDef');
@import (reference) url(../../assets/css/base.less);


.user{
	.all;
	.user-wrap{
		.pd-wrap;
		.middle{
			.flexbox;
			align-items: flex-start;
		}
	}
}

</style>