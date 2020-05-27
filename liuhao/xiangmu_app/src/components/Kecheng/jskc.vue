<template>
	<div class="zhu"> 
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>已结束课程</span></p>
				
				<div class="he">
					<ul>
						<li>
							<p class="nei">
								<span><img src="../../../public/img/hao.jpg" width="40%"></span>
								<span style="float: right;">
									<p>英语个性化一对一</p>
									<p style="color: red;">￥1500/10课时</p>
								</span>
								<span>
									<span style="font-size: 14px;">结束于2019-04-12</span>
									<span style="margin-left: 90px;"> <el-button type="primary" size="small" @click="kcgm">重新报名</el-button></span>
								</span>
							</p>
						</li>
						<li>
							<p class="nei">
								<span><img src="../../../public/img/hao.jpg" width="40%"></span>
								<span style="float: right;">
									<p>英语个性化一对一</p>
									<p style="color: red;">￥1500/10课时</p>
								</span>
								<span>
									<span style="font-size: 14px;">结束于2019-04-12</span>
									<span style="margin-left: 90px;"> <el-button type="primary" size="small" @click="kcgm">重新报名</el-button></span>
								</span>
							</p>
						</li>
						<li>
							<p class="nei">
								<span><img src="../../../public/img/hao.jpg" width="40%"></span>
								<span style="float: right;">
									<p>英语个性化一对一</p>
									<p style="color: red;">￥1500/10课时</p>
								</span>
								<span>
									<span style="font-size: 14px;">结束于2019-04-12</span>
									<span style="margin-left: 90px;"> <el-button type="primary" size="small" @click="kcgm">重新报名</el-button></span>
								</span>
							</p>
						</li>
						<li>
							<p class="nei">
								<span><img src="../../../public/img/hao.jpg" width="40%"></span>
								<span style="float: right;">
									<p>英语个性化一对一</p>
									<p style="color: red;">￥1500/10课时</p>
								</span>
								<span>
									<span style="font-size: 14px;">结束于2019-04-12</span>
									<span style="margin-left: 90px;"> <el-button type="primary" size="small">重新报名</el-button></span>
								</span>
							</p>
						</li>
					</ul>
					<p style="text-align: center;margin-top: 20px;">没有更多内容了</p>
				</div>
	</div>
</template>

<script>
	export default{
		methods:{
			kc(){
				this.$router.go(-1)
			},
			kcgm(){
				this.$router.push({path:'/kcgm'})
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
	.he{
		margin-top: 60px;
	}
	.he ul li{
		width: 93%;
		height: 152px;
		background-color: #f2f2f2;
		margin: 0 auto;
		margin-top: 20px;
	}
	.nei span{
		display: inline-block;
	}
	.nei span:nth-of-type(1){
		margin-left: 30px;
		margin-top: 18px;
	}
	.nei span:nth-of-type(2){
		margin-top: -80px;
		margin-right: 30px;
		
	}
</style>
