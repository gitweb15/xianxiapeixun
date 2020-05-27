<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>所有订单</span></p>
				
				<ul class="ul">
					<li>
						<div class="zhong">
							<div class="iu1">
								<van-image width="120" height="89" src="https://img.yzcdn.cn/vant/cat.jpeg" style="float: left;display: inline-block;"/>
								<div style="float: right;" class="iu">
									<p>英语个性化一对一教学</p>
									<p style="color: red;">￥1500 / 10课时</p>
								</div>
								<hr style="position: relative;top: 20px;width: 300px;color: #f2f2f2;"/>
							</div>
							<img src="../../assets/dzf.jpg" style="position: absolute;top:-10px;right: -40px;">
							<p class="time-p">
								<span style="float: left;">2019-04-12 11:12:13</span>
								<span style="float: right;">剩余 
								<van-count-down :time="time" style="display: inline-block;" class="time">
								  <template v-slot="timeData" class="time">
								    <span class="block1">{{ timeData.hours }}</span>
									 <span class="colon">:</span>
								    <span class="block1">{{ timeData.minutes }}</span>
									 <span class="colon">:</span>
								    <span class="block1">{{ timeData.seconds }}</span>
								  </template>
								</van-count-down>
								</span>
							</p>
							<p class="po">
								<van-button type="primary" color="#cccccc" size="small">取消支付</van-button>
								<van-button type="primary" style="box-shadow: 2px 2px 7px blue;" color="#327af3" size="small" @click="kcgm">立即支付</van-button>
							</p>
						</div>
						
					</li>
					<li>
						<div class="zhong">
							<div class="iu1">
								<van-image width="120" height="89" src="https://img.yzcdn.cn/vant/cat.jpeg" style="float: left;display: inline-block;"/>
								<div style="float: right;" class="iu">
									<p>英语个性化一对一教学</p>
									<p style="color: red;">￥1500 / 10课时</p>
								</div>
								<hr style="position: relative;top: 20px;width: 300px;color: #f2f2f2;"/>
							</div>
							<img src="../../assets/dzf.jpg" style="position: absolute;top:-10px;right: -40px;">
							<p class="time-p">
								<span style="float: left;">2019-04-12 11:12:13</span>
								<span style="float: right;">剩余 
								
								<van-count-down :time="time" style="display: inline-block;" class="time">
								  <template v-slot="timeData" class="time">
								    <span class="block1">{{ timeData.hours }}</span>
									 <span class="colon">:</span>
								    <span class="block1">{{ timeData.minutes }}</span>
									 <span class="colon">:</span>
								    <span class="block1">{{ timeData.seconds }}</span>
								  </template>
								</van-count-down></span>
							</p>
							<p class="po">
								<van-button type="primary" color="#cccccc" size="small">取消支付</van-button>
								<van-button type="primary" style="box-shadow: 2px 2px 7px blue;" color="#327af3" size="small" @click="kcgm">立即支付</van-button>
							</p>
						</div>
					</li>

						<li>
							<div class="zhong">
								<div class="iu1">
									<van-image width="120" height="89" src="https://img.yzcdn.cn/vant/cat.jpeg" style="float: left;display: inline-block;" />
									<div style="float: right;" class="iu">
										<p>英语个性化一对一教学</p>
										<p style="color: red;">￥1500 / 10课时</p>
									</div>
									<hr style="position: relative;top: 20px;width: 300px;color: #f2f2f2;" />
								</div>
								<img src="../../assets/jxz.jpg" style="position: absolute;top: -10px;right: -35px;">
								<div class="ong">
									<p>课时剩余节数 : 12节</p>
									<p style="font-size: 13px;color: #9F9F9F;">如需退款请线下联系</p>
								</div>
								<p style="position: absolute;top: 120px;left: 210px;">
									<van-button type="primary" style="box-shadow: 2px 2px 7px blue;" color="#327af3" size="small" @click="kcgm">立即续费</van-button>
								</p>
							</div>
					
						</li>
						<li style="background-color: #f2f2f2;height: 160px;">
							<p class="nei">
								<span><img src="../../../public/img/hao.jpg" width="40%"></span>
								<span style="float: right;">
									<p>英语个性化一对一</p>
									<p style="color: red;">￥1500/10课时</p>
								</span>
								<span>
									<span style="font-size: 14px;">结束于2019-04-12</span>
									<span style="margin-left: 80px;"> <el-button type="primary" size="small" @click="kcgm">重新报名</el-button></span>
								</span>
							</p>
						</li>
						<li style="background-color: #f2f2f2;height: 160px;">
							<p class="nei">
								<span><img src="../../../public/img/hao.jpg" width="40%"></span>
								<span style="float: right;">
									<p>英语个性化一对一</p>
									<p style="color: red;">￥1500/10课时</p>
								</span>
								<span>
									<span style="font-size: 14px;">结束于2019-04-12</span>
									<span style="margin-left: 80px;"> <el-button type="primary" size="small" @click="kcgm">重新报名</el-button></span>
								</span>
							</p>
						</li>
					</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				time: 30 * 60 * 60 * 1000,
			}
		},
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
	.ong {
		font-size: 14px;
		margin-top: 30px;
	}
	.nei span{
		display: inline-block;
		font-size: 14px;
	}
	.nei span:nth-of-type(1){
		margin-left: 30px;
		margin-top: 18px;
	}
	.nei span:nth-of-type(2){
		margin-top: -80px;
		margin-right: 30px;
		
	}
	.ong p {
		margin-top: 12px;
	}
	.head{
		position: fixed;
		top: -20px;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
	.ul{
		margin-top: 40px;
	}
	.ul li{
		width: 90%;
		height: 80%;
		border-radius: 5%;
		box-shadow: 2px 2px 3px 4px #f9f9f9;
		margin-left: 20px;
		margin-top: 20px;
	}
	.zhong{
		width: 85%;
		height: 180px;
		margin: 10px auto;
		position: relative;
		top: 10px;
	}
	.iu p{
		font-size: 15px;
		padding-left: 6px;
		font-size: 13px;
		margin-right: 20px;
	}
	.time span{
		padding-left: 12px;
	}
	.time-p{
		font-size: 14px;
		margin-top: 25px;
	}
	.po button{
		margin-top: 15px;
		margin-left: 20px;
	}
	.po{
		position: absolute;
		top: 110px;
		right: 0px;
	}
</style>
