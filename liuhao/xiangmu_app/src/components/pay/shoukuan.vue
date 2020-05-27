<template>
	<div>
		<div class="zhu-one">
			<p class="p1"><span></span><span>向客服收款</span></p>
			<p style="text-align: center;color: #9a9a9a;font-weight: 600;font-size: 18px;">￥15000</p>
			<p style="text-align: center;"><img src="../../../public/img/liu.jpg"></p>
		</div>
		<div style="margin: 18px;position: relative;top: 100px;">
		  <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
			客服线下支付完成
		  </van-button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.zhu-one{
		width: 90%;
		height: 440px;
		box-shadow: 1px 1px 2px 2px #ebebeb;
		margin: 0 auto;
		margin-top: 40px;
	}
	.p1 {
		display: inline-block;
		color: #737373;
		font-size: 17px;
		font-weight: 600;
		margin-left: 0px;
		margin-top: 10px;
	}
	
	.p1 span:nth-of-type(1) {
		display: inline-block;
		width: 5px;
		height: 25px;
		background-color: #2e79ff;
	}
	
	.p1 span:nth-of-type(2) {
		display: inline-block;
		position: relative;
		top: -5px;
		left: 5px;
	}
</style>
