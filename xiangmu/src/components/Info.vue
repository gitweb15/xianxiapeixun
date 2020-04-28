<template>
	<div id="contain">
		<h2>班级基本信息</h2>
		<ul class="ulli">
			<li>课程编号：BJKC-20190405</li>
			<li>课程名称：初中一年级班级课程</li>
			<li>课程编号：BJKC-20190405-01</li>
			<li>班级名次：<input placeholder="请输入内容" /></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Info'
	}
</script>

<style scoped>
	input {
		height: 40px;
		padding-left: 10px;
		width: 300px;
	}

	#contain {
		margin-top: 30px;
		border: 1px solid #FFFFFF;
		box-shadow: 0px 2px 25px gainsboro;
	}

	h2 {
		margin-left: 20px;
	}

	.ulli li {
		width: 500px;
		line-height: 50px;
		list-style: none;
		display: inline-block;
	}

	.ulli {
		margin-left: -20px;
	}
</style>
