<template>
	<div>
		<div style="margin-top: 110px;">
			<van-icon name="checked" size="100" style="position: relative;left: 37%;"/>
			<p class="p1">提交成功</p>
			<p class="p2">请等待管理员审核</p>
		</div>
		<div style="margin-top: 100px;">
			<van-button round block type="info" native-type="submit" style="width: 80%;margin: 20px auto;">查看订单
			</van-button>
			<van-button round plain block hairline type="info" style="width: 80%;margin: 0 auto;">返回首页</van-button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.p1{
		font-size: 20px;
		font-weight: 600;
		text-align: center;
		margin-top: -6px;
	}
	.p2{
		font-size: 17px;
		color: #e2e2e2;
		text-align: center;
		font-weight: 600;
		margin-top: -16px;
	}
</style>
