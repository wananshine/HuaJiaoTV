<template>
	<section class="station">
		<div class="station-layer">
			<div class="station-l">
				<h2 class="sl-title">
					<span class="sl-name">全站直播</span>
					<span class="sl-tab">
						<a class="slt-hot">最热</a>
						<a class="slt-new">最新</a>
					</span>
					<span class="slt-more">更多</span>
				</h2>
				<ul class="station-list">
					<li class="station-cell" v-for="(st, cellNo) in stationList " :key="cellNo">
            <a class="station-el">
              <div class="el-headimg">
                <img :src="st.src">
                <p class="el-person">{{st.person}}</p>
                <p class="el-play"></p>
                <p class="el-mask"></p>
              </div>
              <div class="el-name">{{st.name}}</div>
            </a>
          </li>
				</ul>
			</div>
			<div class="station-r">
        <h2 class="sr-title">
          <span class="sl-name">花椒新闻</span>
          <span class="slt-more">更多</span>
        </h2>
				<figure class="sr-top">
					<img src="https://p5.ssl.qhimg.com/t01e2bb6b31e9e03590.jpg">
					<p class="sr-top-txt">上热门方法教程 这样直播才能上热门</p>
				</figure>
				<aside class="sr-list">
					<dl class="sr-cell">
						<dt class="sr-cell-title">时下最红的十大主播都在这里</dt>
						<dd class="sr-cell-news">流云 关妙甜 老外没毛病 获“年度十大主播”奖项</dd>
					</dl>
					<dl class="sr-cell">
						<dt class="sr-cell-title">时下最红的十大主播都在这里</dt>
						<dd class="sr-cell-news">流云 关妙甜 老外没毛病 获“年度十大主播”奖项</dd>
					</dl>
					<dl class="sr-cell">
						<dt class="sr-cell-title">时下最红的十大主播都在这里</dt>
						<dd class="sr-cell-news">流云 关妙甜 老外没毛病 获“年度十大主播”奖项</dd>
					</dl>
					<dl class="sr-cell">
						<dt class="sr-cell-title">时下最红的十大主播都在这里</dt>
						<dd class="sr-cell-news">流云 关妙甜 老外没毛病 获“年度十大主播”奖项</dd>
					</dl>
				</aside>
			</div>
		</div>
    <button @click="showCustomer()">click me</button>
	</section>
</template>


<script>
    export default {
        components: {},
        name: "",
        data() {
            return {
                stationList: [{
                        "src": "http://image.huajiao.com/9c36e7caaad59509012453c19e69828a.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/512fd0d6aabc8e1c76f5fed2547896aa.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/e2882813305545137989d1d7c5df17e7.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/7830bc710914602282338aeffd2059ea.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/3c6e8a82585a8d028212f4b7a0ca47e6.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/920afcf159551652bb5626c81bafa90e.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/8fa3b619ae2a19df57b8e1a92d1d14ca.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/35ba5302c745c70ec84fe9f645e9c351.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/fc0a187defd350be4fc87d4742fa09ca.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://image.huajiao.com/f181add08f1051d1df75b5dc1d7ae79c-150_150.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    }
                ],
            }
        },
        methods: {
            showCustomer() {
                const _this = this;
                _this.$store.commit('isShowCustomer')
                //_this.$store.commit('behavior',_this.) //点击提交的时候才改变vuex的值
                //_this.$store.getters.isShow = !_this.$store.getters.isShow
                console.log(3, _this.$store)
            }
        }
    }

</script>

<style lang="less" scoped>
    @import (reference) url(../../../assets/css/base.less);
    ._stTitle {
        height: 36px;
        line-height: 36px;
        .sl-name {
            float: left;
            font-size: 24px;
            margin-right: 10px;
        }
        .sl-tab {
            float: left;
            font-size: 14px;
            a {
                border: 1px solid #ccc;
                padding: 3px 10px;
                cursor: pointer;
                &:nth-last-of-type(1) {
                    margin-left: -4px;
                }
            }
            .slt-hot {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
            .slt-new {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
        .slt-more {
            float: right;
            cursor: pointer;
            font-size: 14px;
            color: @999;
            cursor: pointer;
        }
    }

    ;
    .station {
        .station-layer {
            .flexbox;
            align-items: flex-start;
            .station-l {
                .flex1;
                margin-right: 32px;
                .sl-title {
                    ._stTitle;
                }
                .station-list {
                    .flexbox;
                    flex-wrap: wrap;
                    .station-cell {
                        .flexauto;
                        background-color: @fff;
                        width: 188px;
                        margin-bottom: 10px;
                        .station-el {
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
            .station-r {
                width: 380px;
                .sr-title {
                    ._stTitle;
                }
                .sr-top {
                    .all;
                    height: 190px;
                    img {
                        .all;
                    }
                    .sr-top-txt {
                        .ellipsis;
                        .poa;
                        left: 0px;
                        right: 0px;
                        bottom: 0px;
                        color: @fff;
                        line-height: 30px;
                        font-size: 14px;
                        background: rgba(0, 0, 0, 0.5);
                    }
                }
                .sr-list {
                    .all;
                    .sr-cell {
                        padding: 16px 5px;
                        margin: 0 auto;
                        border-bottom: 1px solid @f5f5;
                        text-align: left;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:nth-last-of-type(1) {
                            border-bottom: 0px;
                        }
                        .sr-cell-title {
                            font-size: 14px;
                            color: @333;
                            padding-bottom: 5px;
                            .ellipsis;
                        }
                        .sr-cell-news {
                            font-size: 12px;
                            color: #999;
                            padding-bottom: 5px;
                            .ellipsis;
                        }
                    }
                }
            }
        }
    }

</style>
