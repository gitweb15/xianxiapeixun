<template>
	<div>
		<div style="margin-top: 110px;">
			<van-icon name="checked" size="100" style="position: relative;left: 37%;"/>
			<p class="p1">支付成功</p>
		</div>
		<div style="margin-top: 100px;">
			<van-button round block type="info" native-type="submit" style="width: 80%;margin: 20px auto;" @click="xxz">查看订单
			</van-button>
			<van-button round plain block hairline type="info" style="width: 80%;margin-left: 40px;" @click="kc">返回首页</van-button>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			xxz(){
				this.$router.push({path:'/xxz'})
			},
			kc(){
				this.$router.push({path:'/kc'})
			}
		}
	}
</script>

<style scoped>
	.p1{
		font-size: 20px;
		font-weight: 600;
		text-align: center;
	}
</style>
