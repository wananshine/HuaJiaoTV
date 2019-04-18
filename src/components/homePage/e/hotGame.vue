<template>
    <section class="living-pick">
        <div class="living-row">
        	<aside class="live-list">
        		<div class="live-chunk" v-for="(live, liveNo) in livesList">
        			<h2 class="live-title">
        				<span class="dt-icon"><mu-icon size="36" color="red" :value="live.icon"></mu-icon></span>
        				<p class="dt-txt">{{live.title}}</p>
        				<span class="dt-more">更多</span>
        			</h2>
        			<ul class="live-team">
        				<li class="live-cell" v-for="(cell, cellNo) in live.vlist">
        					<a class="living-el">
	        					<div class="el-headimg">
	        						<img :src="cell.src">
	        						<p class="el-person">{{cell.person}}</p>
	        						<p class="el-play"></p>
	        						<p class="el-mask"></p>
	        					</div>
	        					<div class="el-name">
	        						<span class="el-head-url"><img :src="cell.headurl"></span>
	        						<span>{{cell.name}}</span>
	        					</div>
	        					<div class="el-name">{{cell.name}}</div>
	        				</a>
        				</li>
        			</ul>
        		</div>
        	</aside>

        </div>
    </section>   
</template>

<style lang="less" scoped>
    @import (reference) url(../../../assets/css/base.less);
    .living-pick {
        .all;

        .living-try {
            .all;
        }

        .living-row {
            .all;
            .live-list {
                .all;
                .flexbox;
                flex-wrap: wrap;
                .live-chunk {
                    .flexauto;
                    width: 49% !important;
                    margin-top: 20px;
                    margin-bottom: 10px;
                    .live-title {
                        .all;
                        font-size: 24px;
                        border-bottom: 1px solid #ededed;
                        padding-bottom: 5px;
                        margin-bottom: 10px;
                        .dt-icon {
                            .poa;
                            left: 0;
                            top: -3px; //font-size: 14px;
                            //color: @999;
                            cursor: pointer;
                        }
                        .dt-txt {
                            width: 50%;
                            text-align: left;
                            line-height: 30px;
                            text-indent: 38px;
                            cursor: pointer;
                            .ellipsis;
                        }
                        .dt-more {
                            .poa;
                            right: 0;
                            top: 7px;
                            font-size: 14px;
                            color: @999;
                            cursor: pointer;
                        }
                    }
                    .live-team {
                        .flexbox;
                        .live-cell {
                            .por;
                            .hid;
                            .flex1auto;
                            min-width: 24%;
                            display: block;
                            cursor: pointer;
                            background-color: @fff;
                            &:not(:nth-last-of-type(1)) {
                                margin-right: 8px;
                            }
                            .living-el {
                                .all;
                                display: block;
                                &:hover {
                                    color: @fff;
                                    background: #ff3e69;
                                    .el-headimg {
                                        img {
                                            -webkit-transform: scale(1.2);
                                            .transition;
                                        }
                                    }
                                    .el-mask {
                                        display: block;
                                        .transition;
                                    }
                                }
                                .el-headimg {
                                    .all;
                                    height: 130px;
                                    font-size: 0px;
                                    img {
                                        .all;
                                        -webkit-transform: scale(1);
                                        .transition;
                                    }
                                    .el-person {
                                        .poa;
                                        left: 0;
                                        right: 0;
                                        bottom: 0px;
                                        text-align: left;
                                        color: @fff;
                                        background-color: rgba(0, 0, 0, 0.3);
                                        line-height: 20px;
                                        font-size: 12px;
                                        .ellipsis;
                                    }
                                }
                                .el-name {
                                    .por;
                                    .hid;
                                    font-size: 12px;
                                    padding: 5px 0 0 10px;
                                    height: 24px;
                                    .ellipsis;
                                    .el-head-url {
                                        .por;
                                        .hid;
                                        width: 24px;
                                        height: 24px;
                                        border-radius: 50%;
                                        .colCenter;
                                        left: 12px;
                                        img {
                                            .all;
                                        }
                                    }
                                }
                                .el-mask {
                                    .all;
                                    .colCenter;
                                    .transition;
                                    height: @full;
                                    display: none;
                                    background-color: rgba(0, 0, 0, 0.4);
                                }
                            }
                        }

                    }
                }
            }

        }

    }

</style>

<script>
    // import { liveList, lol } from '../../../api/api'
    // import { postJSON, getJSON } from '../../../api/api2'
    // import { fetch, post } from '../../../api/api3'
    //http://image.huajiao.com/43481593368e31f162888e8aa14f75f2-320_180.jpg
    export default {
        components: {},
        name: "",
        data() {
            return {
                livesList: [{
                        "title": "吃鸡",
                        "icon": "games",
                        "vlist": [{
                                "src": "http://image.huajiao.com/47393c8989420f14678b1358c8a9145d-320_180.jpg",
                                "person": 14622,
                                "headurl": "http://image.huajiao.com/1d516f648de1b35fec50921f4b8a97d4-100_100.jpg",
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/43481593368e31f162888e8aa14f75f2-320_180.jpg",
                                "person": 14622,
                                "headurl": "http://image.huajiao.com/1d516f648de1b35fec50921f4b8a97d4-100_100.jpg",
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/54553cfcafafda2924dbc403c41599ef-320_180.jpg",
                                "person": 14622,
                                "headurl": "http://image.huajiao.com/1d516f648de1b35fec50921f4b8a97d4-100_100.jpg",
                                "name": "漠燃~Ashley💋"
                            },
                        ]
                    },
                    {
                        "title": "玩乐",
                        "icon": "important_devices",
                        "vlist": [{
                                "src": "http://image.huajiao.com/43481593368e31f162888e8aa14f75f2-320_180.jpg",
                                "person": 14622,
                                "headurl": "http://image.huajiao.com/1d516f648de1b35fec50921f4b8a97d4-100_100.jpg",
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/43481593368e31f162888e8aa14f75f2-320_180.jpg",
                                "person": 14622,
                                "headurl": "http://image.huajiao.com/1d516f648de1b35fec50921f4b8a97d4-100_100.jpg",
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/43481593368e31f162888e8aa14f75f2-320_180.jpg",
                                "person": 14622,
                                "headurl": "http://image.huajiao.com/1d516f648de1b35fec50921f4b8a97d4-100_100.jpg",
                                "name": "漠燃~Ashley💋"
                            },
                        ]
                    }
                ],
                liveStation: []
            }
        },
        computed: {},
        watch: {
            //监听数组
            goodsData: {
                handler: function(newVal) {
                    // console.log(newVal.length)
                },
                deep: true
            },
            //监听路由
            '$route' (to, from) {
                // 获取最新的id 调用获取数据方法
                //this.$route.params.goodsId;
                //this.fetchGoodsId()
            }
        },
        beforeCreate() {},
        created() {
            const _this = this;
            this.$nextTick(function() {

            });
        },
        beforeMount() {},
        mounted() {
            const _this = this;
            this.$nextTick(function() {


                _this.fetchGoodsId();

            })
        },
        beforeUpdate() {},
        updated() {},
        methods: {
            fetchGoodsId() {
                //console.log(this.$route.params.goodsId);
            },
            //立即购买
            nowbuyCustomer(product, e) {
                // this.$router.replace({ path: '/indexCart' })
                // console.log(product, e)
            }
        }
    }

</script>
