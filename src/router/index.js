import Vue from 'vue'
import store from '../store/store'
import Router from 'vue-router'
Vue.use(Router)


import HelloWorld from '@/components/HelloWorld'

import indexBox from '@/components/index'

//首页
import homeBox from '@/components/homePage/home'   //直接引用
//const homeBox = resolve => require(['@/components/homePage/home'], resolve);   //路由懒加载


//排行榜
//import rankBox from '@/components/rankPage/rank'   //直接引用
const rankBox = resolve => require(['@/components/rankPage/rank'], resolve);   //路由懒加载


//类别
//import typeBox from '@/components/typePage/type'   //直接引用
const typeBox = resolve => require(['@/components/typePage/type'], resolve);   //路由懒加载


//关注
//import attentionBox from '@/components/attentPage/attention'  //直接引用
const attentionBox = resolve => require(['@/components/attentPage/attention'], resolve);   //路由懒加载


//直播详情
//import detailBox from '@/components/detailPage/detail'        //直接引用
const detailBox = resolve => require(['@/components/detailPage/detail'], resolve);   //路由懒加载


//主播主页
//import userBox from '@/components/userPage/user'        //直接引用
const userBox = resolve => require(['@/components/userPage/user'], resolve);   //路由懒加载


//登录页面
//import signinBox from '@/components/ssi/signin'        //直接引用
const signinBox = resolve => require(['@/components/ssi/signin'], resolve);   //路由懒加载

//404页面
//import NotFound from '@/components/ssi/404'        //直接引用
const NotFound = resolve => require(['@/components/ssi/404'], resolve);   //路由懒加载





// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//     store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }



const routes = [
    {
      path: '/',
      name: '/',
      redirect: 'index/home',
      component: indexBox,
    },
    {
      path: '/index',
      name: 'index',
      redirect: 'index/home',
      component: indexBox,
      children: [
        // {
        //   path: '/',
        //   name: '',
        //   redirect: 'home',
        //   component: homeBox,
        // },
        {
          path: 'home',
          name: 'home',
          component: homeBox,
        },
        {
          path: 'type/:params',
          name: 'type',
          component: typeBox,
        //   beforeEnter: (to, from, next) => {
        //     console.log(to.params, from)
        //   }
        },
        {
          path: 'rank',
          name: 'rank',
          component: rankBox,
        },
        {
          path: 'attention',
          name: 'attention',
          component: attentionBox,
        //   beforeEnter: (to, from, next) => {
        //     console.log(to, from)
        //   }
        },
        {
          path: 'detail',
          name: 'detail',
          meta: {
              requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: detailBox,
        },
        {
          path: 'user/:params',
          name: 'user',
          component: userBox,
        }

      ]
    },
    {
        path: '/signin',
        name: 'signIn',
        component: signinBox,
    },
    {
        path:'*',
        name: '404',
        component: NotFound  //全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
    }
  ]



const router = new Router({
    linkActiveClass: 'nav-current',
    linkExactActiveClass: '',
    mode: "history",
    hashbang: false,
    history: true,
    routes,
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return {x: 0,y: 0}
        }
    }
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {  //判断是否需要登录权限
        if (store.state.token) {  //判断是否登录
            console.log(store.state)
            next();
        }
        else {  //没登录权限则跳转到登录界面
            console.log(store.state)
            console.error('Place login!')
            next({
                // path: '/login',
                path: '/signIn',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
//   if (sessionStorage.getItem('sid')) { // 查询本地存储信息是否已经登陆
//    next();
//   } else {
//    next({
//     path: '/login', // 未登录则跳转至login页面
//     query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
//     });
//   }
//  } else {
//   next();
//  }
// });

// export default new Router({
//     linkActiveClass: 'nav-current',
//     linkExactActiveClass: '',
//     mode: "history",
//     hashbang: false,
//     history: true,
//     routes,
// })

export default router
