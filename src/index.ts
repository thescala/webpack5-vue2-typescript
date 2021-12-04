import Vue from 'vue'
import ElementUI from 'element-ui'
//  @ts-ignore
import router from '@/router/index'
import '@/styles/main.scss'
//  @ts-ignore
import App from '@/App.vue'
//  @ts-ignore
import store from '@/store/index'

Vue.use(ElementUI)

new Vue({
	el: '#app',
	router,
	 store,
	render: (h) => h(App)
})
