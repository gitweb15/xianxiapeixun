<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData="barContentData" :text="Course"></Bar>
			</div>
			<div class="left wfdcss">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../components/Header";
	import Bar from "../components/Bar";
	export default {
		name: "Course",
		data() {
			return {
				barContentData: [{
						title: "课程管理",
						content: [{
								text: "班级课程管理",
								url: 'Course'
							}, {
								text: "晚辅导课程管理",
								url: 'wanfudao'
							},
							{
								text: "一对一课程管理",
								url: 'yiduiyiguanli'
							}
						]
					},
					{
						title: "课程消耗",
						content: [{
								text: "班级课程消耗",
								url: '/banjikechengxiaohao'
							}, {
								text: "晚辅导课程消耗",
								url: 'wanfudaokechengxiaohao'
							},
							{
								text: "一对一课程消耗",
								url: 'yiduiyixiaohao'
							}
						]
					},
					{
						title: "活动课程管理",
						content: [{
								text: "班级课程活动管理",
								url: 'banjikechenghuodongguanli'
							}, {
								text: "晚辅导课程活动管理",
								url: 'wanfudaokechenghuodong'
							},
							{
								text: "一对一课程活动管理",
								url: 'yiduiyikechenghuodong'
							}
						]
					},
					{
						title: "试学课程管理",
						content: [{
								text: "班级课程试学管理",
								url: 'banjikechengshixueguanli'
							}, {
								text: "晚辅导课程试学管理",
								url: 'wanfudaokechengshixue'
							},
							{
								text: "一对一课程试学管理",
								url: 'yiduiyikechengshixue'
							}
						]
					},
				]
			}
		},
		components: {
			Header,
			Bar,
		}
	};
</script>

<style scoped>
	.barmain {
		height: 100%;
	}

	.main {
		height: 92%;
	}
</style>
