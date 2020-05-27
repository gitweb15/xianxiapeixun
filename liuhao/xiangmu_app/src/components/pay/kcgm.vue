<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>课程购买</span></p>
		<div class="zhong">
			<div class="one">
				<p>用户名称:耐寒教育</p>
				<p>用户手机:18873092156</p>
			</div>
			<div class="two">
				<p>
					<span><img src="../../../public/img/hao.jpg" width="130px" height="80px"></span>
					<span style="float: right;position: relative;left: -25px;top: -10px;">
						<p>英语个性化一对一教学</p>
						<p style="color: red;">￥1500/10课时</p>
					</span>
				</p>
			</div>
			<div class="there">
				<p @click="xzxy">
					<span>选择学员</span>
					<span>已选择2人 <van-icon name="arrow" /> </span>
				</p>
				<p @click="xzjs">
					<span>选择校区及教师</span>
					<span>福清校区 嗯嗯嗯 <van-icon name="arrow" /></span>
				</p>
				<p @click="xzjs">
					<span>请选择优惠价</span>
					<span>已选择200元 <van-icon name="arrow" /></span>
				</p>
			</div>
			<div class="four">
				<p>
					<span>价格</span>
					<span>￥1500.00</span>
				</p>
				<p>
					<span>学员数量</span>
					<span>2</span>
				</p>
				<p>
					<span>优惠卷</span>
					<span>-200.00</span>
				</p>
				<p>
					<span>实付</span>
					<span style="color: red;font-size: 22px;">￥2800.00</span>
				</p>
			</div>
		</div>
		<p style="position: fixed;bottom: -13px;width: 100%;">
			<span class="sp1">￥1500.00</span>
			<span class="sp2" @click="cg">立即购买</span>
		</p>
	</div>
</template>

<script>
	export default{
		methods:{
			kc(){
				this.$router.go(-1)
			},
			xzxy(){
				this.$router.push({path:'/xzxy'})
			},
			cg(){
				this.$router.push({path:'/cg'})
			},
			xzjs(){
				this.$router.push({path:'/xzjsc'})
			}
		}
	}
</script>

<style scoped>
	.head{
		position: fixed;
		top: -20px;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
	.zhong{
		width: 93%;
		height: 620px;
		margin: 40px auto;
		padding-bottom: 30px;	}
	.one{
		border: 1px solid #fbfbfb;
		box-shadow: 2px 2px 15px #fbfbfb;
	}
	.one p{
		margin-left: 15px;
	}
	.two{
		border: 1px solid #fbfbfb;
		box-shadow: 5px 5px 15px #fbfbfb;
		margin-top: 20px;
	}
	.two p span{
		display: inline-block; 
		margin-left: 20px;
	}
	.there{
		margin-top: 30px;
		margin-left: 10px;
		border-bottom: 1px solid #e3e3e3;
	}
	.there p span:nth-of-type(1){
		font-weight: 600;
	}
	.there p span:nth-of-type(2){
		color: #969696;
		float: right;
		font-size: 18px;
	}
	.there p{
		line-height: 30px;
	}
	.four{
		margin-top: 30px;
		margin-left: 10px;
		color: #a6a6a6;
	}
	.four p span:nth-of-type(2){
		color: #969696;
		float: right;
		font-size: 18px;
	}
	.four p{
		line-height: 30px;
	}
	.sp1{
		width: 50%;
		height: 50px;
		color: red;
		font-size: 20px;
		display: inline-block;
		text-align: center;
		padding-top: 20px;
		background-color: white;
	}
	.sp2{
		width: 50%;
		height: 50px;
		font-size: 20px;
		display: inline-block;
		text-align: center;
		background-color: #3078ff;
		padding-top: 20px;
		color: white;
	}
</style>
