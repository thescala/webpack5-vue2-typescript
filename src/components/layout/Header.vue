<template>
	<div>{{ header }}</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Header extends Vue {
	public header = '头部';
}
</script>
<style scoped lang="scss"></style>
