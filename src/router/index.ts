// import path from 'path'
import VueRouter, { RouteConfig } from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// @ts-ignore
import Layout from '@/components/layout/Layout.vue'

// const __dirname = path.resolve()
const routers: RouteConfig[] = [
	{
		path: '/',
		name: 'home',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				// @ts-ignore
				component: () => import('@/components/view/Dashboard.vue'),
				meta: {
					title: '首页',
					icon: 'el-icon-menu'
				}
			}
		]
	},
	{
		path: '/system',
		name: 'system',
		component: Layout,
		redirect: '/department',
		meta: {
			title: '系统管理',
			icon: 'el-icon-menu',
			roles: ['sys:manage']
		},
		children: [
			{
				path: '/department',
				// @ts-ignore
				component: () => import('@/components/view/system/Department.vue'),
				name: 'department',
				meta: {
					title: '机构管理',
					icon: 'el-icon-document',
					roles: ['sys:dept']
				}
			},
			{
				path: '/userList',
				// @ts-ignore
				component: () => import('@/components/view/system/UserList.vue'),
				name: 'userList',
				meta: {
					title: '用户管理',
					icon: 'el-icon-s-custom',
					roles: ['sys:user']
				}
			},
			{
				path: '/roleList',
				// @ts-ignore
				component: () => import('@/components/view/system/RoleList.vue'),
				name: 'roleList',
				meta: {
					title: '角色管理',
					icon: 'el-icon-s-tools',
					roles: ['sys:roles']
				}
			},
			{
				path: '/menuList',
				// @ts-ignore
				component: () => import('@/components/view/system/MenuList.vue'),
				name: 'menuList',
				meta: {
					title: '权限管理',
					icon: 'el-icon-document',
					roles: ['sys:menu']
				}
			}
		]
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: routers
})
export default router
