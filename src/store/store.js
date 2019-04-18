import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        // token: "9e57c50a0116cbe2aaaf96b46218e7ea4b5c39ef",
        token: localStorage.getItem('token') || '',
        switchList1: [
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
        navList: [
            {
                "link": "home",
                "navtxt": "首页"
          },
            {
                "link": "living",
                "navtxt": "直播"
          },
            {
                "link": "dancing",
                "navtxt": "跳舞"
          },
            {
                "link": "type/802",
                "navtxt": "弹唱",
          },
            {
                "link": "rank",
                "navtxt": "排行榜"
          },
            {
                "link": "maobo",
                "navtxt": "猫啵直播"
          }
        ],
        isShow: false,
        signinShow: false,
        isLogin: '',
    },

    getters: {
        switchList1: state => state.switchList1,
        isLogin(state) {
//            if (localStorage.getItem('token')) {
//                return state.isLogin = 1
//            } else {
//                return state.isLogin = 2
//            }
            if(state.token){
                return state.isLogin = 1
            }else{
                return state.isLogin = 2
            }
        },
        isShow(state) {
            return !state.isShow
        },

        //登录框显示隐藏
        signinShow(state) {
            return state.signinShow
        },

        //导航栏
        navList(state) {
            return state.navList
        }
    },

    mutations: {
        isShowCustomer(state) {
            state.isShow = !state.isShow
        },

        signinShow(state) {
            state.signinShow = !state.signinShow
        },

        closeSignin(state) {
            state.signinShow = !state.signinShow
        },

        SIGNIN(state, data) {
            localStorage.token = data;
            state.token = data;
        },
    },

    actions: {
        isShowCustomer(context) {
            context.commit('isShowCustomer')
        },

        signinShow(context) {
            context.commit('signinShow')
        },

        closeSignin(context) {
            context.commit('closeSignin')
        },

        signIn(context) {
            context.commit('SIGNIN')
        }

    }

})

export default store





/*
*
*
    state：存储状态。也就是变量；
    getters：派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
    mutations：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。
    actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。
    modules：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。
    
    在组件中：
    store.commit=>mutations,用来触发同步操作的方法。
    store.dispatch =>actions,用来触发异步操作的方法。  //Action 提交的是 mutation，而不是直接变更状态。
    
    
    在vuex2中, actions并不一定要, 但是mutation是必须要的, state的值, 只能通过mutation来编辑,因为Action提交的也是mutation，而不是直接变更状态。
    你要不想把异步写到actions里, 完全可以在组件里异步, 然后this.$store.commit('xx', yy)来调用mutation
    
*
* */
