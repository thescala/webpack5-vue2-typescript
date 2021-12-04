<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-vertical"
		@open="handleOpen"
		@close="handleClose"
		:collapse="isCollapse"
		router
	>
		<SideMenu :menuList="menuList"></SideMenu>
	</el-menu>
</template>
<script lang="ts">
// @ts-ignore
import initMenuList from '@/mock/menu.json'
/*
 */
import { Vue, Component } from 'vue-property-decorator'
@Component({
	components: {
		// @ts-ignore
		SideMenu: () => import('@/components/layout/SideMenu.vue')
	}
})
export default class Aside extends Vue {
	get activeIndex() {
		return this.$route.path
	}
	get isCollapse(){
		return this.$store.getters.getIsCollapse
	}
	handleOpen(key: string | number, keyPath: string) {
		console.log(key, keyPath)
		console.log(this.activeIndex)
	}
	handleClose(key: string | number, keyPath: string) {
		console.log(key, keyPath)
	}
	menuList = initMenuList
}
/*
import Vue from "vue"
const Aside = Vue.extend({
	name: 'Aside',
	 data: function () {
		return {
			activeIndex: '',
			menuList: initMenuList,
			isCollapse: false
		}
	},
	components: {
		// @ts-ignore
		SideMenu: () => import('@/components/layout/SideMenu.vue')
	},
	created() {
		this.activeIndex = this.$route.path
		this.menuList = initMenuList
	},
	methods: {
		handleOpen(key: string | number, keyPath: string) {
			console.log(key, keyPath)
			console.log(this.activeIndex)
		},
		handleClose(key: string | number, keyPath: string) {
			console.log(key, keyPath)
		}
	}
})
export default Aside
*/
</script>
<style scoped lang="scss">
.el-menu {
	background-color: #e6e6fa;
}
.el-menu-vertical:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
