<!-- 守护榜 -->
<template>
	<div class="feed-rank">
		<mu-list>
			<!--标题-->
			<mu-sub-header>守护榜</mu-sub-header>

			<!--排行榜列表循环-->
			<mu-list-item avatar button :ripple="false" v-for="(feed, feedNo) in feedRank" :key="feedNo">
				<!--头像-->
				<mu-list-item-action>
					<mu-avatar>
						<img :src="feed.avatar">
					</mu-avatar>
				</mu-list-item-action>
				<!--昵称 && 花椒币-->
				<mu-list-item-content>
					<mu-list-item-title>{{feed.nick}}</mu-list-item-title>
					<mu-list-item-sub-title>
						<!--<span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span>-->
						{{feed.coin}}花椒币
					</mu-list-item-sub-title>
				</mu-list-item-content>
				<!--关注按钮-->
				<mu-list-item-action>
					<!--<mu-icon value="add"></mu-icon>-->
					<mu-button small color="secondary">
						<mu-icon left value="add"></mu-icon>
						关注
					</mu-button>
				</mu-list-item-action>
			</mu-list-item>

		</mu-list>
	</div>
</template>

<script type="text/javascript">

  export default {
    components: {},
    name: "",
    data(){
      return{
        feedRank: [
			{
				"avatar": "https://muse-ui.org/img/avatar2.eff5aba4.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/avatar4.9e7d0530.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/uicon.ac3913bf.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/avatar2.eff5aba4.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/avatar4.9e7d0530.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/uicon.ac3913bf.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/avatar2.eff5aba4.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/avatar4.9e7d0530.jpg",
				"nick": "GouGou",
				"coin": "121664"
			},
			{
				"avatar": "https://muse-ui.org/img/uicon.ac3913bf.jpg",
				"nick": "GouGou",
				"coin": "121664"
			}
		]
      }
    },
    computed: {
      navDate(){
        return this.$store.getters.navList
      },
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
      })
    },
    beforeUpdate(){},
    updated(){},
    methods: {
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


<style lang="less" scope>
	.feed-rank{
		width: 380px;
	}
</style>