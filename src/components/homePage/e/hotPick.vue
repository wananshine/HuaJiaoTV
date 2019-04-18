<template>
    <section class="living-pick">
        <div class="living-try">
        	<div  class="prism-player" id="J_prismPlayer" style="position: absolute"></div>
        </div>

        <div class="living-row">
        	<aside class="live-list">
        		<div class="live-chunk" v-for="(live, liveNo) in livesList">
        			<h2 class="live-title">
        				<span class="dt-icon"><mu-icon size="32" color="red" :value="live.icon"></mu-icon></span>
        				<p class="dt-txt">
	        				{{live.title}}
	        			</p>
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
                    /*width: 49% !important;*/
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
                            top: 0px; //font-size: 14px;
                            //color: @999;
                            cursor: pointer;
                        }
                        .dt-txt {
                            width: 50%;
                            text-indent: 36px;
                            text-align: left;
                            line-height: 30px;
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
                            /*min-width: 24%;*/
                            width: 169px;
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
                                    font-size: 0px;
                                    img {
                                        .all;
                                        height: @full;
                                        -webkit-transform: scale(1);
                                        .transition;
                                    }
                                    .el-person {
                                        .ellipsis;
                                        .poa;
                                        left: 0;
                                        right: 0;
                                        bottom: 0px;
                                        text-align: left;
                                        color: @fff;
                                        background-color: rgba(0, 0, 0, 0.3);
                                        line-height: 20px;
                                        font-size: 12px;
                                    }
                                }
                                .el-name {
                                    font-size: 12px;
                                    padding: 5px 0 0 10px;
                                    height: 24px;
                                    .ellipsis;
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
    import {
        liveList,
        lol
    } from '../../../api/api'
    import {
        postJSON,
        getJSON
    } from '../../../api/api2'
    // import { fetch, post } from '../../../api/api3'
    export default {
        components: {},
        name: "",
        data() {
            return {
                livesList: [{
                        "title": "颜值",
                        "icon": "face",
                        "vlist": [{
                                "src": "http://image.huajiao.com/8c6468dd3ae5a24760ec44669ca42676-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/8ccbfa956aaefa2e4566691177ab46a2-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/107aa9d5272a34c3a057ad3ee3812cf1-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/f181add08f1051d1df75b5dc1d7ae79c-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                        ]
                    },
                    {
                        "title": "跳舞",
                        "icon": "local_florist",
                        "vlist": [{
                                "src": "http://image.huajiao.com/02bd72d0abfe80f8c94a40a630868da1-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/e0686e095bcbece86849b9c9fd416c58-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/7e011df7cad2fb187a3ebdce87847eab-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://image.huajiao.com/f31e359fe87ccf56c7467f203a95ad1d-150_150.jpg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                        ]
                    },
                    {
                        "title": "女神",
                        "icon": "whatshot",
                        "vlist": [{
                                "src": "http://p3.qhimgs4.com/t0153f49cd12938cab3.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://p3.qhimgs4.com/t019c242dfdc3952420.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://p3.qhimgs4.com/t01e7ee528737bc4486.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://p3.qhimgs4.com/t01b396af21bf68f799.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                        ]
                    },
                    {
                        "title": "音乐娱乐",
                        "icon": "queue_music",
                        "vlist": [{
                                "src": "http://p3.qhimgs4.com/t01fe1f19ca1fdd6db1.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://p3.qhimgs4.com/t0195439905527b1fff.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://p3.qhimgs4.com/t0184b6b1bc6331157f.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                            {
                                "src": "http://p3.qhimgs4.com/t018fbfc11ecc74030d.jpeg",
                                "person": 14622,
                                "name": "漠燃~Ashley💋"
                            },
                        ]
                    }
                ],
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

                // liveList().then(res=>{
                // 	console.log(123)
                // 	_this.liveList = res.data
                // 		console.log('liveList:',_this.liveList)
                // 	if(res.code == 1){
                // 		_this.liveList = res.data
                // 		console.log('liveList:',_this.liveList)
                // 	}
                // 	console.log(res)
                // }, error =>{
                // }).catch(error =>{
                // 	console.log(error)
                // });

                // lol
                // lol().then(res=>{
                // 	console.log(res)
                // }, error =>{
                // }).catch(error =>{

                // });

                // getJSON('http://api.douyutv.com/api/v1/live/lol', {})
                // .then(res=>{
                // 	console.log(res)
                // }).catch(err=>{
                // 	console.log(err)
                // })

                // postJSON("../api/live/lol", {})
                // .then(res=>{
                // 	if(res.code == 1){
                // 		// _this.liveList = res.data
                // 		console.log('liveList:',_this.liveList)
                // 	}
                // 	console.log(res)
                // }).catch(err=>{
                // 	console.log(err)
                // })


                // post("http://flnet-wap.flnet.cn/flnet_live/liveList", {})
                // .then(res=>{
                // 	console.log(res)
                // }).catch(err=>{
                // 	console.log(err)
                // })

            });
        },
        beforeMount() {},
        mounted() {
            const _this = this;
            this.$nextTick(function() {
                _this.fetchGoodsId();
                //_this.initVideo();

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
            },

            initVideo() {
                var player = new Aliplayer({
                    id: 'J_prismPlayer',
                    width: '100%',
                    autoplay: false,
                    isLive: true,

                    //支持播放地址播放,此播放优先级最高
                    source: 'blob:https://www.douyu.com/e79a258b-a496-4a35-812c-cd021058e74d',

                    //播放方式二：点播用户推荐
                    vid: '1e067a2831b641db90d570b6480fbc40',
                    playauth: '',
                    cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
                    //播放方式三：仅MPS用户使用
                    vid: '1e067a2831b641db90d570b6480fbc40',
                    accId: '',
                    accSecret: '',
                    stsToken: '',
                    domainRegion: '',
                    authInfo: '',

                    //播放方式四：使用STS方式播放
                    vid: '1e067a2831b641db90d570b6480fbc40',
                    accessKeyId: '',
                    securityToken: '',
                    accessKeySecret: ''
                }, function(player) {
                    console.log('播放器创建好了。')
                });
            }
        }
    }

</script>
