<template>
	<div>
		<div class="demo-input-suffix">
			<el-input placeholder="" v-model="input4" style="width: 90%;margin-left: 20px;margin-top: 20px;">
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-input>
		</div>
		<div style="margin-top: 20px;">
			<van-tabs v-model="activeName">
				<van-tab title="高校晚辅导" name="a">
					<p style="font-size: 18px;font-weight: 600;padding-top: 15px;margin-left: 20px;">高校晚辅导</p>
						<ul class="uuu">
							<li>
								<van-image
								style="margin-top: -22px;"
								  width="190px"
								  height="163px"
								  fit="contain"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div style="margin-top: -17px;margin-left: 10px;">
									<p style="font-size: 18px;font-weight: 550;">课程名称</p>
									<p style="color: #9f9f9f;">￥1500/10课时</p>
								</div>
							</li>
							<li>
								<van-image
								style="margin-top: -22px;"
								  width="190px"
								  height="163px"
								  fit="contain"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div style="margin-top: -17px;margin-left: 10px;">
									<p style="font-size: 18px;font-weight: 550;">课程名称</p>
									<p style="color: #9f9f9f;">￥1500/10课时</p>
								</div>
							</li>
							<li>
								<van-image
								style="margin-top: -22px;"
								  width="190px"
								  height="163px"
								  fit="contain"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div style="margin-top: -17px;margin-left: 10px;">
									<p style="font-size: 18px;font-weight: 550;">课程名称</p>
									<p style="color: #9f9f9f;">￥1500/10课时</p>
								</div>
							</li>
							<li>
								<van-image
								style="margin-top: -22px;"
								  width="190px"
								  height="163px"
								  fit="contain"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div style="margin-top: -17px;margin-left: 10px;">
									<p style="font-size: 18px;font-weight: 550;">课程名称</p>
									<p style="color: #9f9f9f;">￥1500/10课时</p>
								</div>
							</li>
							<li>
								<van-image
								style="margin-top: -22px;"
								  width="190px"
								  height="163px"
								  fit="contain"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div style="margin-top: -17px;margin-left: 10px;">
									<p style="font-size: 18px;font-weight: 550;">课程名称</p>
									<p style="color: #9f9f9f;">￥1500/10课时</p>
								</div>
							</li>
							<li>
								<van-image
								style="margin-top: -22px;"
								  width="190px"
								  height="163px"
								  fit="contain"
								  src="https://img.yzcdn.cn/vant/cat.jpeg"
								/>
								<div style="margin-top: -17px;margin-left: 10px;">
									<p style="font-size: 18px;font-weight: 550;">课程名称</p>
									<p style="color: #9f9f9f;">￥1500/10课时</p>
								</div>
							</li>
						</ul>
				</van-tab>
				<van-tab title="周末精品班" name="b">内容 2</van-tab>
				<van-tab title="个性化一对一" name="c">内容 3</van-tab>
			</van-tabs>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import foot from '../footone.vue'
	export default {
		components:{
			foot
		},
		data() {
			return {
				activeName: 'a',
			};
		},
	};
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
		cursor: pointer;
	}
	.uuu li{
		width: 190px;
		height: 183px;
		border-radius: 5px;
		float: left;
		margin-left: 10px;
		border: 1px solid #d8d9db;
		box-shadow: 8px 8px 18px #f9f9f9;
		margin-top: 20px;
	}
	.uuu{
		margin-top: 6px;
	}
</style>
