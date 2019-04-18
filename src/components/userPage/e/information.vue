<!-- 主播信息 -->
<template>
	<div class="user-info">
		<dl class="info-l">
			<dt class="l-img" data-icon="http://p9.qhimg.com/t01882b9a8855248edc.png">
                <img src="http://image.huajiao.com/243513fc61d79d3177f18fa53515f05a-100_100.jpg" />
            </dt>
			<dd class="l-introduce">
				<div class="l-txt">
					<span class="l-user-name">小金豆儿</span>
					<strong class="l-user-no">花椒靓号: <i>12600989</i></strong>
					<address class="l-user-location">内蒙古 包头</address>
				</div>
				<div class="l-txt">
					<mu-button small>
						<mu-icon left color="#11d680" value="send"></mu-icon>
						28
					</mu-button>
					<mu-button small>
						<mu-icon left color="#c7258c" value="send"></mu-icon>
						22
					</mu-button>
				</div>
				<div class="l-txt about">百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝百代繁華一朝都，誰非過客；千秋明月吹角寒，花是主人。。🤝</div>
				<div class="l-txt attribute" v-if="attrList.length > 0" >
					<span v-for="(attr, attrNO) in attrList" :key="attrNO" v-text="attr"></span>
				</div>
			</dd>
		</dl>
		<div class="info-r">
			<div class="follow" @click="followCustomer($event)">
				<mu-button small color="secondary">
					<mu-icon left value="add"></mu-icon>
					关注
				</mu-button>
			</div>
			<ul class="division">
				<li class="ds-cell">
					<h4>21万</h4>
					<p>粉丝数</p>
				</li>
				<li class="ds-cell">
					<h4>21万</h4>
					<p>粉丝数</p>
				</li>
				<li class="ds-cell">
					<h4>21万</h4>
					<p>粉丝数</p>
				</li>
				<li class="ds-cell">
					<h4>21万</h4>
					<p>粉丝数</p>
				</li>
			</ul>
			<div class="user-share">
				<blockquote>http://www.huajiao.com/user/113271860</blockquote>
                <span>分享</span>
			</div>
		</div>
	</div>
</template>



<style lang="less" scoped>
    @import 'https://yourwebsite.com/style.css'; //@import (reference) url('https://codepen.io/username/pen/aBcDef');
    @import (reference) url(../../../assets/css/base.less);

    .user-info {
        .all;
        .flexbox;
        padding: 30px 20px 30px 45px;
        margin: 20px auto 90px;
        background-color: @fff;
        .info-l {
            .por;
            .hid;
            .flex1;
            .flexbox;
            justify-content: flex-start;
            max-width: 68%;
            .l-img {
                .por;
                width: 100px;
                margin-right: 6%;
                &:after {
                    content: "";
                    background-image: url("http://p9.qhimg.com/t01882b9a8855248edc.png");
                    background-repeat: no-repeat;
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    position: absolute;
                    right: 12px;
                    bottom: 6px;
                    background-position: -60px -10px;
                }
                img {
                    border-radius: 50px;
                }
            }
            .l-introduce {
                .all;
                .l-txt {
                    margin: 10px 0;
                    address {
                        display: inline-block;
                    }
                    .l-user-no {
                        color: red;
                        font-size: 12px;
                    }
                    .l-user-location {
                        color: @999;
                        font-size: 12px;
                        padding-left: 20px;
                    }
                }
                .about {
                    .por;
                    .hid;
                    line-height: 25px;
                    font-size: 12px;
                    color: @999;
                    .ellipsis;
                }
                .attribute {
                    line-height: 22px;
                    span {
                        display: inline-block;
                        vertical-align: middle;
                        background: #eee;
                        padding: 0 10px;
                        border-radius: 4px;
                        font-size: 12px;
                        margin-right: 5px;
                    }
                }
            }
        }
        .info-r {
            width: 20%;
            text-align: right;
            .follow {
                .all;
            }
            .division {
                .all;
                display: table;
                margin: 20px auto 15px;
                .ds-cell {
                    display: table-cell;
                    h4 {
                        font-size: 18px;
                        color: @333;
                        margin-bottom: 4px;
                    }
                    p {
                        font-size: 12px;
                        color: @999;
                    }
                }
            }
            .user-share {
                color: @999;
                font-size: 12px;
                line-height: 22px;
                blockquote {
                    display: inline-block;
                    margin-right: 10px;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                    color: @666;
                    background: #eee;
                    padding: 0 10px;
                    border-radius: 4px;
                    font-size: 12px;
                    margin-right: 5px;
                    cursor: pointer;
                }
            }
        }
        .user-wrap {
            //.pd-wrap;
        }
    }

</style>


<script type="text/javascript">
    export default {
        components: {},
        name: "",
        data() {
            return {
                attrList: [ "唱歌", "可爱", "全职主播" ]
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
            }
        },
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
        methods: {},

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
