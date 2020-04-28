
<template>
	<div id="main">
		<Class></Class>
		<Info></Info>
		<memberInfo></memberInfo>
	</div>
</template>
<script>
	// 引入组件
	import Class from '../components/Class.vue'
	import Info from '../components/Info.vue'
	import memberInfo from '../components/menberInfo.vue'
	export default {
		name: 'stu',
		components: {
			Class,
			Info,
			memberInfo
		}
	}
</script>

<style>
	
</style>
