<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData="barContentData" :text="Pay"></Bar>
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
		name: "Pay",
		data() {
			return {
				barContentData: [{
					title: "支付中心",
					content: [{
						text: "支付管理",
						url: 'zhifuzhongxin'
					}, {
						text: "优惠券管理",
						url: 'pay'
					}, ]
				}, ]
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
