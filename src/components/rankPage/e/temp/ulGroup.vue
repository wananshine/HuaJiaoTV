<template>
	<ul class="rank-list">
		<li class="rank-cell" v-for="(rk, dataNo) in dataList" :key="dataNo">
			<!-- NO 1 -->
			<a class="first-el" v-if="dataNo === 0">
				<div class="avatar-headimg">
	    			<img class="head-pic" :src="rk.src">
	    			<img src="https://p2.ssl.qhimg.com/d/inn/80893f57/no1.png">
	    		</div>
	    		<div class="nick-name">
	    			{{rk.nick}}
	    			<span class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</span>
	    		</div>
	    		<div class="get-coin"><span>{{rk.coin}}</span>花椒币</div>
			</a>

			<!-- NO 2 -->
			<a class="second-el" v-if="dataNo === 1">
				<div class="avatar-headimg">
					<img class="head-pic" :src="rk.src">
	    			<img src="https://p4.ssl.qhimg.com/d/inn/80893f57/no2.png">
	    			<span class=""></span>
	    		</div>
	    		<div class="nick-name">{{rk.nick}}</div>
	    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
	    		<div class="get-coin">{{rk.coin}}花椒币</div>
			</a>

			<!-- NO 3 -->
			<a class="third-el" v-if="dataNo === 2">
				<div class="avatar-headimg">
		            <img class="head-pic" src="http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg">
	    			<img src="https://p0.ssl.qhimg.com/d/inn/80893f57/no3.png">
	    		</div>
	    		<div class="nick-name">{{rk.nick}}</div>
	    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
	    		<div class="get-coin">{{rk.coin}}花椒币</div>
			</a>

			<!-- 大于等于 NO 4  -->
			<a class="cell-el" v-if="dataNo > 2">
				<div class="avatar-headimg">{{dataNo+1}}</div>
	    		<div class="nick-name">{{rk.nick}}</div>
	    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
	    		<div class="get-coin">{{rk.coin}}花椒币</div>
			</a>
		</li>
	</ul>
</template>

<!-- <template id="child-el">
	<a>
		12312
	</a>
</template> -->

<script type="text/javascript">
    export default {
        components: {
            'child': {
                template: '#child-el',
                data: function() {
                    return {
                        msg: 'child'
                    };
                }
            },
            'child2': {
                template: '#child-component2',
                data: function() {
                    return {
                        msg: 'child2'
                    };
                }
            }
        },
        name: "ulGroup",
        props: ["dataList"],
        data() {
            return {}
        },
        computed: {},
        watch: {},
        beforeCreate() {},
        created() {
            this.$nextTick(function() {
                console.log(this.dataList);
            });
        },
        beforeMount() {},
        mounted() {
            this.$nextTick(function() {})
        },
        beforeUpdate() {},
        updated() {},
        methods: {}
    }

</script>

<style lang="less" scoped>
    @import (reference) url(../../../../assets/css/base.less);

    .rank-list {
        .rank-cell {
            .all;
            a {
                .all;
                display: block;
            }
            .first-el {
                .avatar-headimg {
                    .por;
                    .hid;
                    margin: 20px auto 0;
                    position: relative;
                    width: 256px;
                    height: 108px;
                    text-align: center; // background-image: url("https://p2.ssl.qhimg.com/d/inn/80893f57/no1.png"); 
                    background-position: center;
                    background-repeat: no-repeat;
                    -webkit-background-size: cover;
                    background-size: cover;
                    .head-pic {
                        // .hid;
                        // .colCenter;
                        left: 52%;
                        top: 52%;
                        display: block;
                        width: 90px;
                        height: 90px;
                        border-radius: 50px;
                    }
                    img {
                        .all;
                        .colCenter;
                    }
                }
                .nick-name {
                    .ellipsis;
                    text-align: center;
                    line-height: 48px;
                }
                .level-number {
                    width: 32px;
                    height: 19px;
                    line-height: 16px;
                    font-size: 10px;
                    padding-left: 10px;
                    color: #fff;
                    margin-top: 16px;
                    display: inline-block;
                }
                .get-coin {
                    .ellipsis;
                    color: @999;
                    text-align: center;
                    font-size: 12px;
                    padding-bottom: 20px;
                }
            }
            .second-el {
                .all;
                padding: 10px 10px 10px 0;
                border-top: 1px solid #eee;
                height: 48px;
                display: table;
                .avatar-headimg {
                    .por;
                    .hid;
                    width: 54px;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    margin-right: 12px;
                    img {
                        .all;
                        .colCenter;
                    }
                    .head-pic {
                        display: block;
                        width: 40px;
                        height: 40px;
                        left: 56%;
                        top: 56%;
                        border-radius: 50px;
                    }
                }
                .nick-name {
                    .ellipsis;
                    max-width: 180px;
                    line-height: 48px;
                    font-size: 14px;
                    color: @333;
                    float: left;
                    margin-right: 12px;
                }
                .level-number {
                    width: 32px;
                    height: 16px;
                    line-height: 16px;
                    font-size: 10px;
                    padding-left: 15px;
                    color: @fff;
                    margin-top: 16px;
                }
                .get-coin {
                    .ellipsis;
                    max-width: 180px;
                    line-height: 48px;
                    font-size: 14px;
                    color: @999;
                    float: right;
                }
                div {
                    vertical-align: middle;
                    display: table-cell;
                    float: left;
                    .cell-txt {
                        margin-right: 10px;
                        display: inline-block;

                    }
                }
            }
            .third-el {
                .second-el;
            }
            .cell-el {
                .second-el;
            }
        }
    }

</style>
