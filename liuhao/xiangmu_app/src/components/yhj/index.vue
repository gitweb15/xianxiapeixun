<template>
	<div class="zhu">
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>优惠卷</span></p>
				<p class="lan"><span></span><span>优惠卷管理</span></p>
				<div class="tu">
					<p><img src="../../assets/yhj.jpg" width="95%"></p>
					<p><img src="../../assets/yhj.jpg" width="95%"></p>
					<p><img src="../../assets/yhj.jpg" width="95%"></p>
					<p><img src="../../assets/yhj.jpg" width="95%"></p>
					<p><img src="../../assets/yhj.jpg" width="95%"></p>
				</div>
	</div>
</template>

<script>
	export default{
		methods:{
			kc(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.zhu{
		width: 100%;
		height: 100%;
	}
	* {
		margin: 0px;
		padding: 0px;
		cursor: pointer;
	}
	.head{
		position: fixed;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
	.lan{
		padding-top: 50px;
		margin-left: 15px;
	}
	.lan span:nth-of-type(1){
		display: inline-block;
		width: 10px;
		height: 20px;
		background-color: blue;
	}
	.lan span:nth-of-type(2){
		display: inline-block;
		font-size: 18px;
		margin-left: 5px;
		margin-top: -5px;
	}
	.tu{
		padding-top: 10px;
	}
	.tu p{
		padding-top: 12px;
		margin-left: 10px;
	}
</style>
