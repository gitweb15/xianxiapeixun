<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>待支付订单</span></p>
		<ul class="ul">
			<li>
				<div class="zhong">
					<div class="iu1">
						<van-image width="130" height="89" src="https://img.yzcdn.cn/vant/cat.jpeg" style="float: left;display: inline-block;"/>
						<div style="float: right;" class="iu">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500 / 10课时</p>
						</div>
						<hr style="position: relative;top: 20px;width: 300px;color: #f2f2f2;"/>
					</div>
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
						<van-image width="130" height="89" src="https://img.yzcdn.cn/vant/cat.jpeg" style="float: left;display: inline-block;"/>
						<div style="float: right;" class="iu">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500 / 10课时</p>
						</div>
						<hr style="position: relative;top: 20px;width: 300px;color: #f2f2f2;"/>
					</div>
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
						<van-button type="primary" style="box-shadow: 2px 2px 7px blue;" color="#327af3" size="small"  @click="kcgm">立即支付</van-button>
					</p>
				</div>
			</li>
			<li>
				<div class="zhong">
					<div class="iu1">
						<van-image width="130" height="89" src="https://img.yzcdn.cn/vant/cat.jpeg" style="float: left;display: inline-block;"/>
						<div style="float: right;" class="iu">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500 / 10课时</p>
						</div>
						<hr style="position: relative;top: 20px;width: 300px;color: #f2f2f2;"/>
					</div>
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
						<van-button type="primary" style="box-shadow: 2px 2px 7px blue;" color="#327af3" size="small"  @click="kcgm">立即支付</van-button>
					</p>
				</div>
			</li>
		</ul>
		<p style="text-align: center;">没有更多内容了</p>
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
		height: 200px;
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
		top: 120px;
		right: 0;
	}
</style>
