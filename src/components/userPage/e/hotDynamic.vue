<!-- 主播动态 -->
<template>
	<div class="dynamic">
		<h3 class="dy-title">动态</h3>
		<ul class="dy-list" v-if="dyList.length>0">
			<li class="dy-cell" v-for="(dy, dyIndex) in dyList" :key="dyIndex">
				<div class="dy-pic">
					<img :src="dy.headPic">
                    <i class="pic-share">转发</i>
					<i class="pic-tag">视频</i>
					<p class="pic-mask"></p>
					<p class="icon-play"></p>
					<div class="stat">
						<span>{{dy.attention}}</span>
						<span>{{dy.comments}}</span>
						<span>{{dy.watched}}</span>
						<span>{{dy.online}}</span>
					</div>
				</div>
				<div class="dy-nick">{{dy.nick}}</div>
				<div class="dy-tag" v-if="dy.tags.length >0">
					<em class="tag" v-for="(tag, tagIndex) in dy.tags" :kkey="tagIndex">{{tag}}</em>
				</div>
				<div class="dy-time" v-if="dy.time !== null" >{{dy.time}}</div>
			</li>
		</ul>
		<div class="nofound" v-if="dyList.length<=0">o(￣ヘ￣o) Ta还没有直播哦~</div>
	</div>
</template>


<script type="text/javascript">
    export default {
        components: {},
        name: '',
        data() {
            return {
                dyList: [{
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "",
                        "tags": ["恐怖", "地狱", "曼陀罗花"]
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    },
                    {
                        "headPic": "http://img.s3.huajiao.com/Object.getPreview/hj-img/MTEzMjcxODYwMTUzNDQyNzAwNDczNDUyMzU2NzE4OC5qcGc=/220/220",
                        "nick": "会飞的笨蛋",
                        "attention": "18",
                        "comments": "3",
                        "watched": "10",
                        "online": "1122",
                        "time": "2018-08-16 21:43:59",
                        "tags": []
                    }
                ],
                dyNones: []
            }
        },
        mounted() {
            const _this = this;
            console.log(_this.$router, _this.$router.params, _this.$router.matched)
        },
    }

</script>

<style lang="less" scope>
    @import (reference) url(../../../assets/css/base.less);
    .dynamic {
        .all;
        .flex1;
        .dy-title {
            text-indent: 12px;
            line-height: 26px;
            font-size: 18px;
            color: @333;
        }
        .dy-list {
            .flexbox;
            justify-content: flex-start;
            flex-wrap: wrap;
            .dy-cell {
                width: 230px;
                padding: 0 5px;
                cursor: pointer;
                background-color: @fff;
                margin-bottom: 15px;
                .flexauto;
                .dy-pic {
                    .all;
                    img {
                        .all;
                    }
                    .pic-share {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        display: inline-block;
                        height: 20px;
                        line-height: 21px;
                        border-radius: 3px;
                        padding: 0 10px;
                        z-index: 10;
                        color: #000;
                        font-size: 12px;
                        background-color: rgba(255, 255, 255, 0.7);
                    }
                    .pic-tag {
                        .poa;
                        top: 10px;
                        right: 10px;
                        display: inline-block;
                        height: 20px;
                        line-height: 21px;
                        border-radius: 3px;
                        padding: 0 10px;
                        z-index: 10;
                        color: @000;
                        font-size: 12px;
                        background-color: rgba(255, 255, 255, 0.7);
                    }
                    .pic-mask {
                        width: @full;
                        height: @full;
                        background-color: rgba(0, 0, 0, 0.2);
                        .poa;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        right: 0px;
                    }
                    .icon-play {
                        .poa;
                    }
                    .stat {
                        height: 20px;
                        line-height: 20px;
                        font-size: 12px;
                        color: @fff;
                        background-color: rgba(0, 0, 0, 0.3);
                        .poa;
                        bottom: 0px;
                        left: 0px;
                        right: 0px;
                    }
                }
                .dy-nick {
                    line-height: 30px;
                    color: @333;
                    font-size: 13px;
                }
                .dy-tag {
                    .all;
                    font-size: 12px;
                    height: 22px;
                    .tag {
                        display: inline-block;
                        padding: 3px 5px;
                        margin-right: 3px;
                        color: @999;
                        border: 1px solid @999;
                        border-radius: 3px;
                        max-width: 36px;
                        overflow: hidden;
                        white-space: nowrap;
                        .ellipsis
                    }
                }
                .dy-time {
                    line-height: 22px;
                    font-size: 12px;
                    color: @333;
                }
            }
        }
        .nofound {
            .all;
            text-align: center;
            line-height: 80px;
            background-color: @fff;
        }
    }

</style>
