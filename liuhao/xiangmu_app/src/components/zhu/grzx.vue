<template>
	<div>
		<div class="bg">
			<van-image
			  round
			  width="6rem"
			  height="5rem"
			  src="https://img.yzcdn.cn/vant/cat.jpeg"
			  style="margin-top: 40px;margin-left: 30px;"
			/>
			<div class="cl">
				<p>吴京</p>
				<p>18845678901</p>
			</div>
		</div>
		<div class="zhong">
			<p class="pp">
				<span><van-icon name="star-o" />    密码修改</span>
				<span style="float: right;"><van-icon name="arrow" /></span>
			</p>
		</div>
		<div style="margin: 18px;position: relative;top: 20px;">
		  <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
		    退出登录
		  </van-button>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '../foot.vue'
	export default{
		name:'grzx',
		components:{
			Foot
		}
	}
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0px;
	}
	.bg{
		width: 100%;
		height: 163px;
		background-color: #748aa1;
	}
	.cl{
		color: white;
		font-size: 18px;
		margin-top: -70px;
		margin-left: 150px;
	}
	.cl p{
		line-height: 30px;
	}
	.zhong{
		width: 93%;
		height: 350px;
		background-color: white;
		box-shadow: 0px 0px 18px #cacaca;
		margin-left: 14px;
		margin-top: -10px;
	}
	.pp{
		width: 88%;
		border-bottom: 1px solid #f1f1f1;
		padding-top: 20px;
		margin-left: 14px;
		padding-bottom: 15px;
		font-size: 17px;
	}
</style>
