<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData='barContentData' :text='Order'></Bar>
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
		name: "Order",
		components: {
			Header,
			Bar,
		},
		data() {
			return {
				barContentData: [{
					title: '订单管理',
					content: [{
							text: '订单管理',
							url: 'dingdan',
						},
						{
							text: '退费管理',
							url: 'tuifei',
						},
						{
							text:'转校管理',
							url:'zhuangxiao',
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
