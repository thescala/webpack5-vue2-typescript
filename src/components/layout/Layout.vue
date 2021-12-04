<template>
	<el-container>
		<el-aside class="scrollbar-style">
			<el-scrollbar class="scrollbar-style">
				<!-- <div class="logo-style">webpack</div> -->
				<Aside></Aside>
			</el-scrollbar>
		</el-aside>
		<el-container>
			<el-header>
				<div class="toggle-btn" @click="changeCollapse">
					<i :class="!showCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
				</div>
				<Header></Header>
			</el-header>
			<el-main>
				<el-scrollbar class="scrollbar-style">
					<router-view></router-view>
				</el-scrollbar>
				<div class="affix" @click="drawer = true">
					<i class="el-icon-s-tools"></i>
				</div>
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>

		<el-drawer title="我是标题" :visible.sync="drawer" :with-header="true">
			<span>我来啦!</span>
		</el-drawer>
	</el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// @ts-ignore
import Aside from '@/components/layout/Aside.vue'
// @ts-ignore
import Header from '@/components/layout/Header.vue'
@Component({
	components: {
		Aside,
		Header
	}
})
export default class Layout extends Vue {
	drawer = false
	get showCollapse() {
		return this.$store.getters.getIsCollapse
	}
	changeCollapse() {
		this.$store.commit('setIsCollapse', !this.$store.getters.getIsCollapse)
	}
}
</script>
<style scoped lang="scss">
.logo-style {
	margin: 10px;
	padding-left: 20px;
	text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff,
		0 0 100px #0ebeff, 0 0 200px #0ebeff;
}
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}
.el-aside {
	width: auto !important;
	background-color: #e6e6fa;
	color: #333;
}
.scrollbar-style {
	height: 100%;
	::v-deep .el-scrollbar__wrap {
		overflow: auto !important;
	}
}
.el-main {
	background-color: #e9eef3;
	color: #333;
}
body > .el-container {
	margin-bottom: 0;
	height: 100%;
}

.toggle-btn {
	cursor: pointer;
}
.el-header {
	display: flex;
	flex-wrap: nowrap;
}
.affix {
	position: fixed;
	background-color: #fff;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	font-size: 20px;
	-webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
	cursor: pointer;
	z-index: 5;
	right: 20px;
	bottom: 50%;
	font-size: x-large;
}
.affix i:hover{
	color: rgb(1, 59, 1);
}
</style>
