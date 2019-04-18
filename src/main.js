// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import { ApolloClient, createNetworkInterface, apolloProvider } from 'apollo-client'
//import VueApollo from 'vue-apollo'

//完整引用 MuseUI
// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
// Vue.use(MuseUI)

//按需加载 MuseUI
//import { Button, Select, Helpers  } from 'muse-ui';
// Vue.use(Helpers);
// Vue.use(Button);
// Vue.use(Select);
// import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';


import  '@/museUI/museui';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';


Vue.use(VueAxios, axios, Vuex)
//Vue.use(VueApollo)
//Vue.prototype.$axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
//  apolloProvider,
  components: { App },
  template: '<App/>'
})
