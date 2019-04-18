<template>
  <section class="small-video">
    <div class="station-layer">
      <div class="station-l">
        <h2 class="sl-title">
          <span class="sl-name">小视频</span>
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
          <span class="sl-name">小视频热播榜</span>
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
    import {
        liveList,
        lol,
        smallVideo
    } from '../../../api/api'
    import {
        postJSON,
        getJSON
    } from '../../../api/api2'
    // import {
    //     fetch,
    //     post
    // } from '../../../api/api3'
    export default {
        components: {},
        name: "",
        data() {
            return {
                stationList: [
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/NjE3NTkyMjMxNTMwODcwMjE3MzI3MjAwOTYyNTgwOS5qcGc=/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTc5NTc0MTcyMTUzMDg3MjY2ODgxOTEyODEzMTkzMDUuanBn/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTAzMjU2Njc4MTUzMDg2NzExMTk4MTMxOTkzMzkwMTMuanBn/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTc1Mzg2NzIyMTUzMDg2Nzg3NjM0NTE5NDE5ODE3NDcuanBn/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTc5NjI3NzY2MTUzMDg3MDAwNTkzODE0Njg5MzcwMzEuanBn/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/Njg4MzkxMDMxNTMwODcyOTM2OTgyODk4NTg5NDYyMTUzMDg3Mjg5NjQ4Ny5tcDQubXA0LmpwZw==/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEwNzc4OTI2MTUzMDg2OTUyODIxMTY0OTEyMjczNlJFQ19WSURFT18xNTMwODY5MTc0ODQyNTYubXA0Lm1wNC5qcGc=/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/NjAzMTkxMTcxNTMwODY5NDA1NzUzMzAxMzA4NDU4LmpwZw==/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTU5ODQzMjM3MTUzMDg2NzQ2NTExMDIxNTIzMDQ2Ny5qcGc=/188/188",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    },
                    {
                        "src": "http://s3m.mediav.com/galileo/559088-599804812da497cde40f234109717ff9.jpg",
                        "person": 14622,
                        "name": "漠燃~Ashley💋"
                    }
                ],
            }
        },
        computed: {},
        created() {

            // smallVideo('douyucdn/api/v1/live/lol').then((response)=>{
            //   console.log(response)
            // }).catch((err)=>{
            //   console.log(err)
            // })

            // //http://api.open.huajiao.com/live/getVideos
            // fetch('../../../huajiao/live/getVideos')
            //     .then((res) => {
            //         console.log('pppppppppppp', res)
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })

            // getJSON('flnet/live/getVideos', {})
            //     .then(res=>{
            //      console.log(res)
            //     }).catch(err=>{
            //      console.log(err)
            //     })

        },
        mounted() {
            const _this = this;

            // smallVideo('douyucdn/api/v1/live/lol').then((response)=>{
            //   console.log(response)
            // }).catch((err)=>{
            //   console.log(err)
            // })

            //http://api.open.huajiao.com/live/getVideos
            // fetch('../../douyucdn/api/v1/live/lol')
            // .then((res)=>{
            //   console.log(res)
            // })
            // .catch((err)=>{

            // })

            // postJSON('http://api.douyutv.com/api/v1/live/lol', {})
            //   .then(res=>{
            //    console.log(res)
            //   }).catch(err=>{
            //    console.log(err)
            //   })

            this.$nextTick(function() {

            })
        },
        methods: {
            showCustomer() {
                const _this = this;
                _this.$store.commit('isShowCustomer')
                //_this.$store.commit('behavior',_this.) //点击提交的时候才改变vuex的值
                //_this.$store.getters.isShow = !_this.$store.getters.isShow
                console.log(1253, _this.$store)
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
    .small-video {
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
