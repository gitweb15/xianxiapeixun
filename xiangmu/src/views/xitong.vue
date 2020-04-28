<template>
	<div>
		<xitong></xitong>
		<cebianlan></cebianlan>
		<menu1></menu1>
	</div>
</template>

<script>
	import xitong from '../components/系统管理/xitong.vue'
	import cebianlan from '../components/系统管理/cebianlan.vue'
	import menu1 from '../components/菜单管理/menu.vue'
	export default {
		name: 'class',
		components: {
			xitong,
			cebianlan,
			menu1
		}
	}
</script>

<style>
</style>
