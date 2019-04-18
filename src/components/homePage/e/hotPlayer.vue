<template>
    <section class="living-slider">
        <div class="living-layer">

        	<div class="obs-player">
        		<!-- <embed src='http://player.youku.com/player.php/sid/XMzcxNjI0NjQ4MA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed> -->
        		
				<!-- 直播 -->
        		<video class="player-video" src=""></video>
        		
				<!-- 主播资料 -->
        		<div class="author-info">
        			<div class="author-bd">
        				<div class="author-content">
        					<div class="baseinfo">
        						<div class="avatar-cont">
        							<router-link class="avatar-el" :to="'/index/user/'+userdata.hjNO"><img src="http://image.huajiao.com/b0a75c84ef980c9a631fa634146366b7-100_100.jpg"></router-link>
        						</div>
        						<div class="user-cont">
        							<span @click="userCustomer(userdata, $event)">{{userdata.userNick}}</span>
        							<span>觀看人數{{userdata.seeperson}}</span>
        						</div>
        						<div class="follow" @click="followCustomer($event)">
        							<mu-button small color="secondary">
								      <mu-icon left :value="valueIcon"></mu-icon>
								      {{attentionTXT}}
								    </mu-button>
        						</div>
        					</div>
        					<div class="user-tags">
        						<span class="tag" v-for="(tg, tgNO) in userdata.usertag" :key="tgNO">{{tg}}</span>
        					</div>
        					<div class="statics-base">
        						<dl class="st-dl">
        							<dt class="st-txt">粉丝</dt>
        							<dd class="st-number">{{userdata.fans}}万</dd>
        						</dl>
        						<dl class="st-dl">
        							<dt class="st-txt">获赞</dt>
        							<dd class="st-number">{{userdata.praise}}万</dd>
        						</dl>
        						<dl class="st-dl">
        							<dt class="st-txt">送礼</dt>
        							<dd class="st-number">{{userdata.gift}}万</dd>
        						</dl>
        						<dl class="st-dl">
        							<dt class="st-txt">关注</dt>
        							<dd class="st-number">{{userdata.attention}}万</dd>
        						</dl>
        					</div>
        					<div class="statics-currency">
        						花椒币131131321
        					</div>
        					<div class="statics-level">
        						<!-- <dl class="st-lv-dl">
        							<dt class="slv-dt">
        								<mu-icon value="star"></mu-icon>
        							</dt>
        							<dd class="slv-dd">
        								<p>用户等级</p>
        								<p>21</p>
        							</dd>
        						</dl>
        						<dl class="st-lv-dl">
        							<dt class="slv-dt">
        								 <mu-icon value="brightness_5"></mu-icon>
        							</dt>
        							<dd class="slv-dd">
        								<p>主播等级</p>
        								<p>24</p>
        							</dd>
        						</dl> -->
        						<mu-button large color="red">
							      <mu-icon value="star"></mu-icon>
							      <div class="slv-info">
							      	<p>用户等级</p>
							      	<p>25</p>
							      </div>
							    </mu-button>
							    <mu-button large color="red">
							      <mu-icon value="brightness_5"></mu-icon>
							      <div class="slv-info">
							      	<p>主播等级</p>
							      	<p>25</p>
							      </div>
							    </mu-button>
        					</div>
        				</div>
        			</div>
        		</div>

        		<!-- 二维码 -->
        		<div class="qrcode">
        			<img src="https://p3.ssl.qhimg.com/t01c51cef8cead5a99b.jpg">
        			<div class="qrcode-close"><mu-icon left color="#fff"  value="close"></mu-icon></div>
        		</div>

				<!-- 进入直播间  -->
        		<div class="enter-link">
        			<a>进入直播间</a>
        		</div>

				<!-- 花椒号  -->
        		<div class="user-number">
        			<a>花椒号:464564646</a>
        		</div>


	        </div>

	        <div class="living-switch">
	        	<ul class="switch-list">
	        		<li class="switch-cell" v-for="(sw, index) in switchList">
	        			<a class="switch-a">
	        				<div class="switch-img"><img :src="sw.src"></div>
	        				<p class="switch-txt">{{sw.txt}}</p>
	        			</a>
	        		</li>
	        	</ul>
	        </div>
        </div>
    </section>
</template>



<script>
    var self = this;
    import {
        mapGetters,
        mapState
    } from 'vuex';
    import {
        livingList,
        liveList,
        lol
    } from '../../../api/api'
    import {
        postJSON,
        getJSON
    } from '../../../api/api2'
    export default {
        components: {},
        name: "",
        data() {
            return {
                userdata: {
                    "hjNO": "60665179",
                    "userNick": "你的昵稱",
                    "seeperson": "4586",
                    "usertag": ["鲜肉", "演员", "颜值"],
                    "fans": "4855",
                    "praise": "885",
                    "gift": "444",
                    "attention": "555"
                },
                attentionTXT: "关注",
                valueIcon: "add",
                switchList: [
                    {
                        "src": "http://image.huajiao.com/6eaf2862c0f5d62329c5f2767726ba0c-320_260.jpg",
                        "txt": "有豆留豆，没豆留人，嘘"
                    },
                    {
                        "src": "http://image.huajiao.com/062a5484ada9945fa34260e367ac0d04-320_260.jpg",
                        "txt": "我缺点甜"
                    },
                    {
                        "src": "http://image.huajiao.com/572c1e9f020f00d06152fea1ed3703bd-320_260.jpg",
                        "txt": "小可爱求守护"
                    },
                    {
                        "src": "http://image.huajiao.com/5bcd3dd5677434af5792e90c63b73aa4-320_260.jpg",
                        "txt": "新主播求关注"
                    },
                ],
            }
        },
        computed: {
            ...mapGetters(['switchList1']),
            //mapState({switchList1: state => state.switchList1}),
            switchList1() {
                return this.$store.getters.switchList1
            }
        },
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
            }
        },
        beforeCreate() {},
        created() {
            const _this = this;
            this.$nextTick(function() {



//                 liveList().then(res=>{
//                 	console.log(123)
//                 	_this.liveList = res.data
//                    console.log('liveList:',_this.liveList)
//                 	if(res.code == 1){
//                 		_this.liveList = res.data
//                 		console.log('liveList:',_this.liveList)
//                 	}
//                 	console.log(res)
//                 }, error =>{
//                 }).catch(error =>{
//                 	console.log(error)
//                 });

                // lol
                // lol().then(res=>{
                // 	console.log(res)
                // }, error =>{
                // }).catch(error =>{

                // });

                 getJSON('http://api.douyutv.com/api/v1/live/lol', {})
                 .then(res=>{
                 	console.log('lol:',)
                 }).catch(err=>{
                 	console.log(err)
                 })

                // postJSON("http://flnet-wap.flnet.cn/flnet_live/liveList", {})
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
            console.log('this.$store', this.$store.getters.switchList1)

            this.$nextTick(function() {
                _this.initVideo();
                console.log('store switchList1', _this.switchList1)
            })
        },
        beforeUpdate() {},
        updated() {},
        methods: {
            //立即购买
            nowbuyCustomer(product, e) {
                // this.$router.replace({ path: '/indexCart' })
                // console.log(product, e)
            },

            //关注
            followCustomer(e) {
                console.log(e)
            },

            //主播详情
            userCustomer(userdata, e) {
                const _this = this;
                _this.$router.push({
                    name: 'user', //要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找
                    params: {
                        params: userdata.hjNO
                    }
                    // path: '/index/home', 
                    // query: {}
                })


            },

            //初始化播放器
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


<style lang="less" scoped>
    @import (reference) url(../../../assets/css/base.less);
    .living-slider {
        .all;
        background-image: url("http://s3m.mediav.com/galileo/396097-34d4856781f6ac52355be82f75741e8d.jpg");
        background-repeat: no-repeat;
        .living-layer {
            .flexbox;
            .w-inner(1420px);
            max-width: 1420px; // height: 576px;
            height: 732px;
            .obs-player {
                .por;
                .flex1;
                height: @full; // filter: blur(5px);
                background-color: #000;
                .player-video {
                    .all;
                    height: @full; // background-image: url("http://img.zcool.cn/community/016e0d5a3b3060a80121db80379d0a.jpg@1280w_1l_2o_100sh.jpg");
                    background-position: center;
                    background-size: contain;
                    background-color: rgba(255, 255, 255, 0.3);
                }
                .author-info {
                    width: 412px;
                    .poa;
                    left: 0;
                    top: 35px;
                    z-index: 2;
                    .author-bd {
                        .author-content {
                            padding: 0px 76px;
                            font-size: 14px;
                            .baseinfo {
                                .por;
                                .clearfix;
                                .avatar-cont {
                                    .poa;
                                    left: 0px;
                                    .avatar-el {
                                        .por;
                                        .hid;
                                        display: block;
                                        width: 40px;
                                        height: 40px;
                                        border-radius: 50px;
                                        img {
                                            .all;
                                        }
                                    }
                                }
                                .user-cont {
                                    height: 40px;
                                    padding: 0px 46px;
                                    box-sizing: border-box;
                                    color: @fff;
                                    font-size: 13px;
                                    span {
                                        display: block;
                                        &:nth-of-type(1) {
                                            line-height: 20px;
                                            cursor: pointer;
                                        }
                                    }
                                }
                                .follow {
                                    .poa;
                                    right: 0px;
                                    top: 5px;
                                }
                            }
                            .user-tags {
                                margin-top: 10px;
                                padding-top: 12px;
                                border-top: 1px solid #c1c1b9;
                                text-align: left;
                                .tag {
                                    display: inline-block;
                                    vertical-align: middle;
                                    height: 22px;
                                    line-height: 22px;
                                    max-width: 55px;
                                    padding: 0 5px;
                                    margin-right: 4px;
                                    cursor: default;
                                    color: #fff;
                                    text-decoration: none;
                                    text-align: center;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    border: 1px solid #fff;
                                    border-radius: 4px;
                                    box-sizing: content-box;
                                }
                            }
                            .statics-base {
                                .flexbox;
                                text-align: center;
                                color: @fff;
                                font-size: 12px;
                                margin-top: 12px;
                                .st-dl {
                                    .flex1;
                                    .st-txt {
                                        line-height: 18px;
                                    }
                                    .st-number {
                                        line-height: 18px;
                                    }
                                }
                            }
                            .statics-currency {
                                color: @fff;
                                font-size: 12px;
                                margin-top: 8px;
                            }
                            .statics-level {
                                .flexbox;
                                margin-top: 12px;
                                .st-lv-dl {
                                    .flex1;
                                    display: table;
                                    text-align: center;
                                    vertical-align: middle;
                                    .slv-dt {
                                        width: 38%;
                                        display: table-cell;
                                        vertical-align: middle;
                                    }
                                    .slv-dd {
                                        display: table-cell;
                                        vertical-align: middle;
                                        color: @fff;
                                        p {
                                            &:nth-of-type(1) {
                                                font-size: 8px;
                                            }
                                        }
                                    }
                                }

                                button {
                                    .flex1;
                                    margin-right: 15px;
                                }

                                .slv-info {
                                    height: 44px;
                                    p {
                                        text-align: center;
                                        line-height: 20px;
                                        &:nth-of-type(1) {
                                            font-size: 8px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .qrcode {
                    .poa;
                    bottom: 55px;
                    left: 20px;
                    z-index: 5;
                    width: 130px;
                    .qrcode-close {
                        .poa;
                        right: -20px;
                        top: -20px;
                        background-color: rgba(0, 0, 0, 1);
                        border-radius: 60px;
                        width: 24px;
                        height: 24px;
                        cursor: pointer;
                    }
                }
                .user-number {
                    .poa;
                    right: 40px;
                    top: 40px;
                    font-size: 14px;
                }
            }
            .living-switch {
                width: 202px;
                .switch-list {
                    .switch-cell {
                        height: 162px;
                        cursor: pointer;
                        &:not(:nth-last-of-type(1)) {
                            margin-bottom: 8px;
                        }
                        .switch-a {
                            .all;
                            display: block;
                            .switch-img {
                                .all;
                                img {
                                    .all;
                                }
                            }
                            .switch-txt {
                                width: @full;
                                .poa;
                                left: 0px;
                                right: 0px;
                                bottom: 0px;
                                height: 25px;
                                line-height: 25px;
                                background-color: #333;
                                background-color: rgba(0, 0, 0, 0.6);
                                padding-left: 9px;
                                padding-right: 5px;
                                box-sizing: border-box;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-size: 12px;
                                text-align: left;
                                color: #FFF;
                            }
                        }
                    }
                }
            }
        }

        .living-try {
            .all;
        }

        .living-floor {
            .all;
        }

    }

</style>
<style type="text/css">
    .mu-raised-button .mu-button-wrapper {
        padding: 0 16px !important;
    }

</style>
