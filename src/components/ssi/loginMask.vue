<template>
	<mu-container>
	  <mu-flex class="mu-transition-row">
			<div class="signin" v-show="signinShow">
				<mu-fade-transition>
					<div class="signin mu-transition-box mu-primary-color mu-inverse" v-if="signinShow">
						<div class="signin-layer">
						<h2 class="signin-title">
							登录
							<mu-icon size="36" class="close" value="close" color="#fff" @click="closeCustomer"></mu-icon>
							<!-- <i class="close" @click="closeCustomer">X</i> -->
						</h2>
						<div class="signin-bd">
							<div class="signin-else">
								<!-- <div class="sg-list">
									<a class="sg-el">微博登录</a>
									<a class="sg-el">微信登录</a>
									<a class="sg-el">QQ登录</a>
								</div> -->
								<mu-flex align-items="center" justify-content="around" style="width: 400px;">
									<dl class="sg-dl" v-for="(el, elNo) in elseSign" :key="elNo">
											<dt class="sg-dt">
												<mu-button fab large color="red">
													<mu-icon :value="el.val"></mu-icon>
											</mu-button>
											</dt>
											<dd class="sg-dd" v-text="el.txt"></dd>
									</dl>
								</mu-flex>
							</div>
							<div class="signin-account">
								<!-- <div class="sg-group"><input type="number" name=""></div>
								<div class="sg-group"><input type="number" name=""></div>
								<div class="sg-group"><input type="number" name=""><input type="number" name=""></div> -->
								<mu-form ref="form" :model="validateForm" class="mu-demo-form">
										<mu-form-item label="用户名" help-text="" prop="username" :rules="usernameRules">
											<mu-text-field v-model="validateForm.username" prop="username" placeholder="邮箱/手机号码"></mu-text-field>
										</mu-form-item>
										<mu-form-item label="密码" help-text="" prop="password" :rules="passwordRules">
												<mu-text-field v-model="validateForm.password" prop="password" placeholder="请输入密码" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
										</mu-form-item>
										<mu-form-item prop="isAgree" :rules="argeeRules">
											<mu-checkbox label="我已阅读并同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
										</mu-form-item>
										<mu-form-item>
											<mu-button full-width large color="red" @click="submit">登录</mu-button>
											<!-- <mu-button @click="clear">重置</mu-button> -->
										</mu-form-item>
								</mu-form>
							</div>
						</div>
						<!-- <div class="signin-btn">
							<mu-flex justify-content="center" align-items="center">
									<mu-button full-width large color="red" @click="submit">登录</mu-button>
							</mu-flex>
						</div> -->
						</div>
					</div>
				</mu-fade-transition>
			</div>
	  </mu-flex>
	</mu-container>
</template>

<script type="text/javascript">
    import {
        Button,
        Select,
        Helpers
    } from 'muse-ui';

    export default {
        components: {},
        name: "login",
        data() {
            return {
                token: "9e57c50a0116cbe2aaaf96b46218e7ea4b5c39ef",
                visibility: false,
                usernameRules: [{
                        validate: (val) => !!val,
                        message: '必须填写用户名'
                    },
                    {
                        validate: (val) => val.length >= 3,
                        message: '用户名长度大于3'
                    }
                ],
                passwordRules: [{
                        validate: (val) => !!val,
                        message: '必须填写密码'
                    },
                    {
                        validate: (val) => val.length >= 3 && val.length <= 20,
                        message: '密码长度大于3小于20'
                    }
                ],
                argeeRules: [{
                    validate: (val) => !!val,
                    message: '必须同意用户协议'
                }],
                validateForm: {
                    username: '',
                    password: '',
                    isAgree: false
                },

                //使用第三方登录方式
                elseSign: [{
                        "val": "home",
                        "txt": "新浪登录"
                    },
                    {
                        "val": "send",
                        "txt": "QQ登录"
                    },
                    {
                        "val": "thumb_up",
                        "txt": "微信登录"
                    },
                ]
            }
        },
        computed: {
            signinShow() {
                return this.$store.getters.signinShow;
            }
        },
        methods: {

            //关闭登录框
            closeCustomer() {
                const _this = this;
                _this.$store.commit('closeSignin')
            },

            //登录
            submit() {
                const _this = this;
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                    if (result === true) {
                        console.log(_this.validateForm);
                        //sessionStorage.setItem('token', _this.token);
                        localStorage.setItem('token', _this.token);
                        // localStorage.getItem('username')
                        // localStorage.getItem('token')
                        // localStorage.removeItem('token')
                        console.log(sessionStorage.getItem('token'))
                        window.location.href = ''
                    }
                });
            },

            //重置
            clear() {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }
        }
    }

</script>

<style lang="less" scoped>
    @import (reference) url(../../assets/css/base.less);
    .pd {
        padding: 0px 10px;
    }


    .signin {
        .all;
        .pof;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        .signin-layer {
            width: 380px;
            height: 520px;
            .colCenter;
            background-color: @fff;
            .signin-title {
                .por;
                .hid;
                height: 54px;
                line-height: 54px;
                font-size: 22px;
                font-weight: normal;
                text-align: center;
                background: @d34;
                color: @fff;
                .close {
                    .poa;
                    top: 15%;
                    right: 10px;
                    cursor: pointer;
                }
            }
            .signin-bd {
                .all;
                .clearfix;
                .signin-else {
                    padding: 0px 24px 15px;
                    margin-top: 20px;
                    background: @fff;
                    padding-top: 2px;
                    border-bottom: 1px solid @e6e6;
                    .flexbox;
                    .clearfix;
                    .sg-el {
                        .flex1;
                    }
                    .sg-dl {
                        .sg-dt {}
                        .sg-dd {
                            text-align: center;
                            color: @666;
                            margin-top: 10px;
                            font-size: 14px;
                        }
                    }
                }
                .signin-account {
                    .pd;
                }
            }
            .signin-btn {
                .poa;
                left: 5%;
                bottom: 5%;
                width: calc(@full - 10%);
            }
        }
    }




    .mu-transition-box {
        min-width: 200px;
    }

    .button-wrapper {
        text-align: center;
        .mu-button {
            margin: 8px;
            vertical-align: middle;
        }
        a.mu-button {
            text-decoration: none;
        }
    }

    .mu-form-item {
        .mu-button {
            margin: 0px !important;
        }
    }

</style>
