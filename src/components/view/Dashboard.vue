<template>
	<div>
		<el-tooltip
			v-for="site in sites"
			:key="site"
			:content="site.url"
			placement="bottom"
			effect="light"
		>
			<a
				class="animation-bounce"
				:href="site.url"
				:target="site.target"
				rel="noopener noreferrer"
			>
				<span class="text-break">{{ site.name }}</span>
			</a>
		</el-tooltip>
	</div>
</template>
<script lang="ts">
// @ts-ignore
import sites from '@/mock/site.json'

import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Dashboard extends Vue {
	sites = sites
}
</script>
<style scoped lang="scss">
$width: 100px;
.text-break {
	max-width: $width;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
}
@keyframes bounce {
	0% {
		transform: translateY(-8px);
	}
	50% {
		transform: translateY(-4px);
	}
	100% {
		transform: translateY(-8px);
	}
}
@keyframes bounce-down {
	100% {
		transform: translateY(-8px);
	}
}

.animation-bounce {
	width: $width;
	text-align: center;
	margin: 0.4em;
	padding: 1em;
	cursor: pointer;
	background: #e1e1e1;
	text-decoration: none;
	color: #666;
	display: inline-block;
	vertical-align: middle;
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgb(0 0 0 / 0%);
	border-radius: 10px;
}
.animation-bounce:hover,
.animation-bounce:focus,
.animation-bounce:active {
	animation-name: bounce-down, bounce;
	animation-duration: 0.4s, 1.6s;
	animation-delay: 0s, 0.4s;
	animation-timing-function: ease-out, ease-in-out;
	animation-iteration-count: 1, infinite;
	animation-fill-mode: forwards;
	animation-direction: normal, alternate;
}
</style>
