<template>
    <div class="sunshine-list">
    	<h2 class="rank-title">阳光榜</h2>
    	<div>
    		<mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
			    <mu-tab v-for="(tab, tabNo) in tabList" :key="tabNo">{{tab}}</mu-tab>
		  	</mu-tabs>
			<div class="demo-text" v-if="active1 === 0">
			    <ul class="rank-list">
			    	<li class="rank-cell" v-for="(rk, rkNo) in dayList" :key="rkNo">
			    		<!-- NO 1 -->
			    		<a class="first-el" v-if="rkNo === 0">
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
			    		<a class="second-el" v-if="rkNo === 1">
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
			    		<a class="third-el" v-if="rkNo === 2">
			    			<div class="avatar-headimg">
					            <img class="head-pic" src="http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg">
				    			<img src="https://p0.ssl.qhimg.com/d/inn/80893f57/no3.png">
				    		</div>
				    		<div class="nick-name">{{rk.nick}}</div>
				    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
				    		<div class="get-coin">{{rk.coin}}花椒币</div>
			    		</a>

			    		<!-- 大于等于 NO 4  -->
			    		<a class="cell-el" v-if="rkNo > 2">
			    			<div class="avatar-headimg">{{rkNo+1}}</div>
				    		<div class="nick-name">{{rk.nick}}</div>
				    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
				    		<div class="get-coin">{{rk.coin}}花椒币</div>
			    		</a>
			    	</li>
			    </ul>
			</div>
			<div class="demo-text" v-if="active1 === 1">
			    <ul class="rank-list">
			    	<li class="rank-cell" v-for="(rk, rkNo) in weekdayList" :key="rkNo">
			    		<!-- NO 1 -->
			    		<a class="first-el" v-if="rkNo === 0">
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
			    		<a class="second-el" v-if="rkNo === 1">
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
			    		<a class="third-el" v-if="rkNo === 2">
			    			<div class="avatar-headimg">
					            <img class="head-pic" src="http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg">
				    			<img src="https://p0.ssl.qhimg.com/d/inn/80893f57/no3.png">
				    		</div>
				    		<div class="nick-name">{{rk.nick}}</div>
				    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
				    		<div class="get-coin">{{rk.coin}}花椒币</div>
			    		</a>

			    		<!-- 大于等于 NO 4  -->
			    		<a class="cell-el" v-if="rkNo > 2">
			    			<div class="avatar-headimg">{{rkNo+1}}</div>
				    		<div class="nick-name">{{rk.nick}}</div>
				    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
				    		<div class="get-coin">{{rk.coin}}花椒币</div>
			    		</a>
			    	</li>
			    </ul>
			</div>
			<div class="demo-text" v-if="active1 === 2">
				<ul class="rank-list">
			    	<li class="rank-cell" v-for="(rk, rkNo) in totalList" :key="rkNo">
			    		<!-- NO 1 -->
			    		<a class="first-el" v-if="rkNo === 0">
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
			    		<a class="second-el" v-if="rkNo === 1">
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
			    		<a class="third-el" v-if="rkNo === 2">
			    			<div class="avatar-headimg">
					            <img class="head-pic" src="http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg">
				    			<img src="https://p0.ssl.qhimg.com/d/inn/80893f57/no3.png">
				    		</div>
				    		<div class="nick-name">{{rk.nick}}</div>
				    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
				    		<div class="get-coin">{{rk.coin}}花椒币</div>
			    		</a>

			    		<!-- 大于等于 NO 4  -->
			    		<a class="cell-el" v-if="rkNo > 2">
			    			<div class="avatar-headimg">{{rkNo+1}}</div>
				    		<div class="nick-name">{{rk.nick}}</div>
				    		<div class="level-number" :class="'lv-bg-'+rk.level">{{rk.level}}</div>
				    		<div class="get-coin">{{rk.coin}}花椒币</div>
			    		</a>
			    	</li>
			    </ul>
			</div>
    	</div>
    </div>
</template>

<script type="text/javascript">
    export default {
        components: {

        },
        name: "rank",
        data() {
            return {
                active1: 0,
                tabList: ["日榜", "周榜", "总榜"],
                dayList: [{
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "气质👑朵妃👄ฅ(≚ᄌ≚)🧚‍♀️DF",
                        "level": "3",
                        "coin": "99999999"
                    },
                    {
                        "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                        "nick": "司曼^O^",
                        "level": "8",
                        "coin": "8888888"
                    },
                    {
                        "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                        "nick": "艾歆然Olivia",
                        "level": "12",
                        "coin": "7777777"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "心有林夕⛱️Cc",
                        "level": "12",
                        "coin": "6666"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "诺诺Milk🍥",
                        "level": "16",
                        "coin": "12656464"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "_兔妹妹",
                        "level": "22",
                        "coin": "66666"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "29",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "33",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "38",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "45",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "50",
                        "coin": "555555"
                    }
                ],
                weekdayList: [{
                        "src": "http://image.huajiao.com/0a489c53bc1f7438eedae61963a2edc1-100_100.jpg",
                        "nick": "九千胜大人",
                        "level": "3",
                        "coin": "99999999"
                    },
                    {
                        "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                        "nick": "司曼^O^",
                        "level": "8",
                        "coin": "8888888"
                    },
                    {
                        "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                        "nick": "艾歆然Olivia",
                        "level": "12",
                        "coin": "7777777"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "心有林夕⛱️Cc",
                        "level": "12",
                        "coin": "6666"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "诺诺Milk🍥",
                        "level": "16",
                        "coin": "12656464"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "_兔妹妹",
                        "level": "22",
                        "coin": "66666"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "29",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "33",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "38",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "45",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "50",
                        "coin": "555555"
                    }
                ],
                totalList: [{
                        "src": "http://image.huajiao.com/37cdf16d461fad3d2e5a921d7e6bda68-100_100.jpg",
                        "nick": "大祭司",
                        "level": "3",
                        "coin": "99999999"
                    },
                    {
                        "src": "http://image.huajiao.com/08e76729da0e7c34f67e6e02e12e9c8c-100_100.jpg",
                        "nick": "司曼^O^",
                        "level": "8",
                        "coin": "8888888"
                    },
                    {
                        "src": "http://image.huajiao.com/7d82a4765eb286c4f7b09936d726390d-100_100.jpg",
                        "nick": "艾歆然Olivia",
                        "level": "12",
                        "coin": "7777777"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "心有林夕⛱️Cc",
                        "level": "12",
                        "coin": "6666"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "诺诺Milk🍥",
                        "level": "16",
                        "coin": "12656464"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "_兔妹妹",
                        "level": "22",
                        "coin": "66666"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "29",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "33",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "38",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "45",
                        "coin": "555555"
                    },
                    {
                        "src": "http://image.huajiao.com/636f9bad88d7dd5340e7260b2eed3a75-100_100.jpg",
                        "nick": "小白zoe",
                        "level": "50",
                        "coin": "555555"
                    }
                ],
            }
        },
        computed: {},
        watch: {},
        beforeCreate() {},
        created() {
            this.$nextTick(function() {

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
    @import (reference) url(../../../assets/css/base.less);

</style>
