<template>
	<div>
		<template v-for="menu in menuList">
			<el-submenu
				:index="menu.path"
				v-if="menu.children && menu.children.length > 0"
			>
				<template slot="title">
					<i :class="menu.meta.icon"></i>
					<span slot="title">{{ menu.meta.title }}</span>
				</template>
				<SideMenu :menuList="menu.children"></SideMenu>
			</el-submenu>
			<el-menu-item v-else @click="print" :index="menu.path">
				<i :class="menu.meta.icon"></i>
				<span slot="title">{{ menu.meta.title }}</span>
			</el-menu-item>
		</template>
	</div>
</template>
<script lang="ts">
// @ts-ignore
// import { Menu } from '@/types/Menu';
import Vue from 'vue'

const SideMenu = Vue.extend({
	name: 'SideMenu',
	props: ['menuList'],
	methods: {
		print() {
			console.log(this.$route.path)
		}
	}
})
export default SideMenu
// import { Vue, Component, Prop } from 'vue-property-decorator';

// @Component
// export default class SideMenu extends Vue {
// 	@Prop()
// 	menuList!: Array<Menu>;

// 	print(args: any) {
// 		console.log(args);
// 	}
// }
</script>
<style scoped lang="scss">
</style>
