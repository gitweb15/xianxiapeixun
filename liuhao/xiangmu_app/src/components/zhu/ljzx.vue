<template>
	<div class="z">
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>立即资讯</span></p>
		<div class="zhu">
			<img src="../../../public/img/hao.jpg" width="100%" style="margin-top: 20px;">
			<div class="pp">
				<h3>联系我们</h3>
				<p>城南校区: 17746084680</p>
				<p>水榭校区: 0591-85220810
				</p>
				<p>世贸校区: 0591-85211969</p>
				<p>花之南校区: 0591-85150106</p>
				<p>滨江校区: 0591-86001316</p>
				<p>九洞桥校区: 0591-86550125</p>
			</div>
			<div class="pp">
				<h3>联系地址</h3>
				<p>福清市中联天御财富广场4</p>
				<p>福清市水南车站旁景园公寓208
				</p>
				<p>福清市龙山车站农商银行旁3楼</p>
				<p>福清市玫瑰园27#临街2层</p>
				<p>福清市国际公馆2#2层(大地影院对面)</p>
				<p>福清市融侨城17# 207 .208店面</p>
			</div>
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
	* {
		margin: 0px;
		padding: 0px;
	}

	.head{
		position: fixed;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}

	.zhu {
		width: 92%;
		height: 735px;
		margin: 0 auto;
		padding-top: 40px;
	}

	.z {
		width: 100%;
		height: 100%;
		background-color: ;
	}
	.pp p{
		text-align: center;
		margin-top: 5px;
		color: #616161;
		font-size: 15px;
	}
	.pp{
		margin-top: 30px;
	}
	.pp h3{
		text-align: center;
		color: #3776ff;
	}
</style>
