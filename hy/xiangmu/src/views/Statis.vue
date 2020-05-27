<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData='barContentData' :text='Statis'></Bar>
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
		name: "Statis",
		components: {
			Header,
			Bar,
		},
		data() {
			return {
				barContentData: [{
					title: "统计分析",
					content: [{
							text: "考勤流水分析",
							url: '/Statis'
						}, {
							text: "报班量统计分析",
							url: 'baobanliangtongjifenxi'
						},
						{
							text: "报班金额统计分析",
							url: 'baobanjinertongjifenxi'
						}, {
							text: "教师业务流水分析",
							url: 'jiaoshiyewushuiliufenxi'
						},
						{
							text: "学员支付流水分析",
							url: 'xueyuanzhifuliushuifenxi'
						}
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
