<template>
	<div class="z">
		<div class="zhu">
			<img src="../../../public/img/hao1.jpg" width="100%" style="margin-top: 20px;">
			<div class="pp">
				<p>
					<span style="color: #696969;font-size: 18px;">课程名称</span>
					<span style="color: red;font-size: 18px;">￥1000 /10课时</span>
				</p>
				<p>
					<span style="color: #9a9a9a;font-size: 14px;">263已报名</span>
					<span style="color: #9a9a9a;font-size: 14px;">原价￥1000 /10课时</span>
				</p>
				<div style="margin-top: 20px;">
					<van-tabs v-model="activeName">
						<van-tab title="课程简历" name="a">
							<div class="pp1">
								<p style="color: #518cff;font-size: 18px;font-weight: 520;">精品课程</p>
								<p>采用全省最优质的教学资源与最先进的教学手段。冒在
									服务。更有书法、绘画等艺术兴趣班,在为孩子的重年
									增添乐趣的同时,提开孩子的艺术修养。</p>
								<p><img src="../../../public/img/hao.jpg" width="100%"></p>
							</div>
						</van-tab>
						<van-tab title="课程设置" name="b">内容 2</van-tab>
						<van-tab title="师资介绍" name="c">内容 3</van-tab>
					</van-tabs>
				</div>
				<div>
					<p>
						<span class="sp1">￥1500.00</span>
						<span class="sp2">立即报名</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
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
	}

	.pp {
		margin-top: 20px;
	}

	.pp p {
		margin-top: 6px;
	}

	.pp p span:nth-of-type(2) {
		float: right;
	}

	.zhu {
		width: 92%;
		height: 735px;
		margin: 0 auto;
	}

	.z {
		width: 100%;
		height: 100%;
		background-color: ;
	}

	.pp1 p {
		text-align: center;
		margin-top: 20px;
	}
	.sp1{
		width: 50%;
		height: 50px;
		color: red;
		font-size: 20px;
		display: inline-block;
		text-align: center;
		padding-top: 20px;
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
