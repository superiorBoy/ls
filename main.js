import Vue from 'vue'
import App from './App'
import VueClipboard from 'vue-clipboard2'
import http from './common/http.js'

Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.prototype.websiteUrl = 'http://www.ls.xyz/'; 
Vue.prototype.$http = http
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
