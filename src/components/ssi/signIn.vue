<template>
    <section class="signIn">
        <div class="signin-layer">
            <div class="sg-title">登录</div>
            <div class="sg-form">

                <mu-form ref="form" :model="validateForm" class="form-horizontal mu-demo-form">
                    <mu-form-item label="用户名" help-text="用户名由中文英文组成" prop="username" prefix="" label-float :rules="usernameRules">
                        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                    </mu-form-item>

                    <mu-form-item label="密码" prop="password" prefix="" label-float :rules="passwordRules">
                        <mu-text-field v-model="validateForm.password" prop="password" :rules="passwordRules" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="isAgree" :rules="argeeRules">
                        <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                    </mu-form-item>

                    <mu-flex justify-content="center" align-items="center" @click="submit">
                        <mu-button round color="#ff4081">立即登录</mu-button>
                    </mu-flex>

                  </mu-form>
                    
            </div>
        </div>
    </section>
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
                token: '9e57c50a0116cbe2aaaf96b46218e7ea4b5c39ef',
                validateForm: {
                    username: '',
                    password: '',
                    isAgree: false
                },
                visibility: false,
                usernameRules: [
                    { validate: (val) => !!val, message: '必须填写用户名'},
                    { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ],
                passwordRules: [
                    { validate: (val) => !!val, message: '必须填写密码'},
                    { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
                ],
                argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
                
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
                    if(result === true){
                        console.log('form valid: ', result)
                        //sessionStorage.setItem('token', _this.token);
                        //localStorage.setItem('token', _this.token);
                        // localStorage.getItem('username')
                        // localStorage.getItem('token')
                        // localStorage.removeItem('token')
                        //console.log(localStorage.getItem('token'))
                        // window.location.href=''
                        _this.$store.commit('SIGNIN', _this.token);
                        console.log("this.$route.query.redirect:",this.$route.query.redirect)
                        _this.$router.push(this.$route.query.redirect);
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

    .signIn {
        .pof;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: @full;
        height: @full;
        overflow: hidden;
        box-shadow: 6px 6px 88px #717171 inset;
        background-color: #eaedf1;
        filter: blur(0px);
        .signin-layer {
            width: 500px;
            height: 430px;
            background-color: #ff4081;
            border-radius: 6px;
            .hid;
            .colCenter;
            .sg-title {
                color: @fff;
                text-align: center;
                font-size: 26px;
                line-height: 80px;
            }
            .sg-form {
                .all;
                width: 92%;
                height: 330px;
                border-radius: 5px;
                background-color: @fff;
                .form-horizontal {
                    .all;
                    border-radius: 5px;
                    background-color: @fff;
                    margin: 22px auto 62px;
                    padding: 0px 60px;
                }
            }
        }
    }

</style>
