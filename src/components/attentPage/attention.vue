<!--
attention 关注
//Ping
 -->

<template>
    <section class="attenion">
    	<div class="atn-layer">
    		<div class="atn-col atn-col-l">
    			<my-attent></my-attent>
    			<else-attent></else-attent>
    			<today-rec></today-rec>
    		</div>
    		<div class="atn-col atn-col-r">
    			<dynamic></dynamic>
    			<guess-love></guess-love>
    		</div>
    	</div>
    	<slidebar-left></slidebar-left>
    </section>
</template>

<script type="text/javascript">
    import slidebarLeft from '../ssi/sidebarLeft' //左侧栏

    import myAttent from './e/myAttent' //全部关注
    import dynamic from './e/dynamic' //动态
    import elseAttent from './e/elseAttent' //大家还关注
    import guessLove from './e/guessLove' //猜你喜欢
    import todayRec from './e/todayRec' //今日推荐
    export default {
        components: {
            slidebarLeft,
            myAttent,
            dynamic,
            elseAttent,
            guessLove,
            todayRec
        },
        name: "attenion",
        data() {
            return {}
        },
        computed: {},
        watch: {},
        beforeCreate() {},
        created() {
            const _this = this;
            const isLogin = this.$store.getters.isLogin;
            console.log(isLogin)
            if (isLogin === 1) {

            } else {
                _this.signinPop();
            }


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

            //显示登录框
            signinPop() {
                const _this = this;
                _this.$store.commit('signinShow')
                console.log(1243, _this.$store)
            },
        }
    }

</script>


<style lang="less" scoped>
    @import (reference) url(../../assets/css/base.less);


    .attenion {
        .all;
        .atn-layer {
            .clearfix;
            .flexbox;
            padding-top: 20px;
            margin: 0 20px 20px 90px;
            width: auto;
            .atn-col {}
            .atn-col-l {
                width: 380px;
            }
            .atn-col-r {
                .flex1;
            }

        }
    }

</style>
