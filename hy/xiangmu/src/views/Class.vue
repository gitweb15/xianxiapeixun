<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :text='Class' :barContentData="barContentData"></Bar>
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
		name: "Class",
		data() {
			return {
				barContentData: [{
						title: "班级管理",
						content: [{
								text: "分班管理",
								url: 'Class'
							}, 
						]
					},
					{
						title: "排课管理",
						content: [{
								text: "教室管理",
								url: '/jiaoshi'
							}, {
								text: "课时管理",
								url: 'hour'
							},
							{
								text: "课表管理",
								url: 'kebiaoliebiao'
							},
							{
								text: "调课管理",
								url: 'tiaoke'
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
