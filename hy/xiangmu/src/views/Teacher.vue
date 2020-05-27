<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData='barContentData' :text='teacher'></Bar>
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
		name: "Teacher",
		components: {
			Header,
			Bar,
		},
		data() {
			return {
				barContentData: [{
					title: '教师管理',
					content: [{
							text: '校区管理',
							url: 'xiaoqu',
						},
						{
							text: '教师管理',
							url: 'teacher',
						},
					]
				}]
			}
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
