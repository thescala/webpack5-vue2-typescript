<template>
	<el-container>
		<el-aside width="200px">Aside</el-aside>
		<el-container>
			<el-header>Header</el-header>
			<el-main>
				<div>
					<i class="el-icon-edit"></i>
					<i class="el-icon-share"></i>
					<i class="el-icon-delete"></i>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</div>
				{{ message }}
			</el-main>
		</el-container>
	</el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	public message = 'welcome to webpack5 and typescript vue2';
}
</script>
<style scoped lang="scss">
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
</style>
