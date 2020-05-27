<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>一对一课程</span></p>
		<div class="demo-input-suffix">
			<el-input placeholder="" v-model="input4" style="width: 90%;margin-left: 20px;margin-top: 50px;">
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-input>
		</div>
		<p style="font-size: 20px;font-weight: 600;padding-top: 15px;margin-left: 20px;">高校晚辅导</p>
		<div>
			<ul class="uuu">
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
				<li>
					<van-image
					style="margin-top: -22px;"
					  width="100%"
					  height="133px"
					  fit="contain"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					<div style="margin-top: -10px;margin-left: 10px;">
						<p style="font-size: 18px;">课程名称</p>
						<p style="color: #9f9f9f;">￥1500/10课时</p>
					</div>
				</li>
			</ul>
		</div>
		<p style="text-align: center;color: #9f9f9f;padding-bottom: 20px;position: relative;top: 10px;">没有更多内容了</p>
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
		cursor: pointer;
	}
	.uuu li{
		width: 46%;
		height: 155px;
		border-radius: 5px;
		float: left;
		margin-left: 10px;
		border: 1px solid #d8d9db;
		box-shadow: 8px 8px 18px #f9f9f9;
		margin-top: 20px;
	}
	.uuu{
		width: 100%;
		margin-top: 2px;
	}
	.head{
		position: fixed;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
</style>
