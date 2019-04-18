<template>
    <section class="player-wrap">
        <button @click="oClick()">33333333</button>
    	<top-header></top-header>
        <!-- 播放 -->
        <hot-player></hot-player>

        <!-- 楼层内容 -->
        <article class="player-panel">
        	<hot-pick></hot-pick>
        	<hot-game></hot-game>
        	<station></station>
          <small-video></small-video>
        </article>

        <sidebar-right></sidebar-right>
        <loading></loading>

    </section>
</template>


<script type="text/javascript">
    import topHeader from '../ssi/header'
    import sidebarRight from '../ssi/sidebarRight'
    import loading from './../ssi/loading'

    import hotPlayer from './e/hotPlayer'
    import hotPick from './e/hotPick'
    import hotGame from './e/hotGame'
    import station from './e/station'
    import smallVideo from './e/smallVideo'
    export default {
        components: {
            topHeader,
            sidebarRight,
            loading,
            hotPlayer,
            hotPick,
            hotGame,
            station,
            smallVideo
        },
        name: "",
        data() {
            return {
goodsData: [{a:6,b:2},{a:1,b:2}],
            }
        },
        computed: {
            navDate() {
                return this.$store.getters.navList
            },
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                console.log(to, from)
            },
            //监听数组
            goodsData: {
                handler: function(newVal) {
                    // console.log(newVal.length)
                    // console.log("OOOOOOOOOOOOO",newVal,this.goodsData)
                },
                deep: true
            },
        },
        beforeCreate() {},
        created() {
            console.log('$http', this.$http)
            this.$nextTick(function() {

            });
        },
        beforeMount() {},
        mounted() {

            this.$nextTick(function() {})
        },
        beforeUpdate() {},
        updated() {},
        methods: {
            oClick(){
                this.goodsData = [{a:22222}]
                console.log("OOOOOOOOOOOOO",this.goodsData)
            },
        },

        beforeRouteEnter(to, from, next) {
            console.log(this, 'beforeRouteEnter'); // undefined
            console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
            console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
            console.log(next, '组件独享守卫beforeRouteEnter第三个参数');
            next(vm => {
                //因为当钩子执行前，组件实例还没被创建
                // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
                console.log(vm); //当前组件的实例
            });
        },
        beforeRouteUpdate(to, from, next) {
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
        beforeRouteLeave(to, from, next) {
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

<style lang="less">
    @import (reference) url(../../assets/css/base.less);
    .player-wrap {
        .all;
        background: @fafa;
        .player-panel {
            .all;
            width: @w2;
        }
    }

</style>
