<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData='barContentData' :text='student'></Bar>
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
		name: "student",
		data() {
			return {
				barContentData: [{
					title: "学员管理",
					content: [{
						text: "学员列表",
						url: 'Student'
					}, {
						text: "学员管理",
						url: 'xueyuanguanli'
					}, ]
				}, ]

			}
		},
		components: {
			Header,
			Bar,
		},
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
