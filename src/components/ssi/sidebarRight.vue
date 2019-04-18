<template>
	<div class="rbar-wrap" v-show="rbShow">
		<div class="rb-list">
			<dl class="rb-dl" @click="returnTopCustomer($event)">
				<dt class="rb-dt"><mu-icon size="36" color="red" value="expand_less"></mu-icon></dt>
				<dd class="rb-dd">返回顶部</dd>
			</dl>
			<dl class="rb-dl">
				<dt class="rb-dt"><mu-icon size="36" color="red" value="phone_iphone"></mu-icon></dt>
				<dd class="rb-dd">下载app</dd>
			</dl>
			<dl class="rb-dl">
				<dt class="rb-dt"><mu-icon size="30" color="red" value="desktop_windows"></mu-icon></dt>
				<dd class="rb-dd">下载客户端</dd>
			</dl>
			<dl class="rb-dl">
				<dt class="rb-dt"><mu-icon size="36" color="red" value="video_call"></mu-icon></dt>
				<dd class="rb-dd">我要开直播</dd>
			</dl>
		</div>
	</div>
</template>

<script>
  export default {
    components: {},
    name: "sidebarRight",
    props:[],
    data(){
      return{
      	rbShow: false,
      }
    },
    computed: {},
    watch: {
		},
	beforeCreate(){},
	created(){

		window.addEventListener('scroll', this.scrollCustomer);//监听页面滚动事件

		this.$nextTick(function(){});

	},
	beforeMount(){},
	mounted(){

		// window.onscroll = ()=>{
		// 	this.scrollCustomer()
		// }

		this.$nextTick(function(){
		})
	},
	beforeUpdate(){},
	updated(){},
	activated(){},
	deactivated(){},
	beforeDestroy(){},
	destroyed(){
		window.removeEventListener('scroll', this.scrollCustomer);//监听页面滚动事件
	},
	errorCaptured(){},
    methods: {

    	returnTopCustomer(e){
    		
    		var scrollTop = document.documentElement.scrollTop;

    		
    		var timer = setInterval(()=>{
    			if(scrollTop > 0){
    				document.documentElement.scrollTop = 0;
    				clearInterval(timer);
    			}else{
    				clearInterval(timer);
    			}
    		},100);

    		console.log(scrollTop,e)
    	},

    	//根据滚动条显示 or 隐藏 
    	scrollCustomer(){
    		const _this = this;
    		//console.log(_this.STCustomer(), _this.SHCustomer(), _this.winCustomer(), _this.STCustomer()+_this.winCustomer())
    		if(_this.STCustomer() > 500){
    			_this.rbShow = true;
    		}else{
    			_this.rbShow = false;
    		}
    	},

    	//获取滚动条高度
    	STCustomer(){
    		const bodyH = document.body.scrollTop;
    		const docuH = document.documentElement.scrollTop;
    		return docuH - bodyH > 0 ? docuH : bodyH
    	},

    	
    	//获取浏览器高度
    	winCustomer(){
    		let windowHeight = 0;
    		if(document.compatMode == "CSS1Compat"){
				windowHeight = document.documentElement.clientHeight;
		　　}else{
				windowHeight = document.body.clientHeight;
		　　}
    		return windowHeight
    	},

    	//获取文档总高度
    	SHCustomer(){
    		const bodyScrollH = document.body.scrollHeight;
    		const docuScrollH = document.documentElement.scrollHeight;
    		return docuScrollH - bodyScrollH > 0 ? docuScrollH : bodyScrollH
    	},
    }
  }
</script>

<style lang="less" scoped>
	@import (reference) url(../../assets/css/base.less);
	.rbar-wrap{
		position: fixed;
	    right: 64px;
	    bottom: 35px;
	    z-index: 1;
	    width: 45px;
	    // background-color: yellow;
	    .rb-list{
	    	.rb-dl{
	    		background-color: @999;
	    		margin: 10px auto;
	    		padding: 3px 0px;
	    		cursor: pointer;
	    		.rb-dt{
	    			text-align: center;
	    		}
	    		.rb-dd{
	    			display: none;
	    		}
	    	}
	    }
	}
</style>