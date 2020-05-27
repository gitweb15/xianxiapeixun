<template>
	<div>
			<van-search placeholder="请输入学员姓名进行搜索" style="margin-top: 20px;" />
		<van-index-bar style="margin-top: 20px;">
			<van-index-anchor index="A" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />

			<van-index-anchor index="B" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-index-anchor index="C" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-index-anchor index="D"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />

		</van-index-bar>
		<FootOne></FootOne>
	</div>
</template>

<script>
	import FootOne from '../footone.vue'
	export default{
		components:{
			FootOne
		}
	}
</script>

<style>
</style>
