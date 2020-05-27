<template>
	<div class="zhu">
		<p class="head">课 程</p>
		<div style="position: absolute;top: 50px;left: 20px;width: 88%;">
			<p style="font-size: 18px;color: #7f99ae;" @click="tiao">
				<van-icon name="location" /></i> <span>城南校区</span>
				<van-icon name="arrow" />
			</p>
			<div class="block">
				<el-carousel height="157px">
					<el-carousel-item v-for="item in 4" :key="item">
						<van-image width="100%" height="157" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="zo">
				<ul>
					<li @click="gxwfd">
						<p><van-image round width="65%" height="51px" src="https://img.yzcdn.cn/vant/cat.jpeg" /></p>
						<p>高校晚辅导</p>
					</li>
					<li @click="zmjpb">
						<p><van-image round width="65%" height="51px" src="https://img.yzcdn.cn/vant/cat.jpeg" /></p>
						<p>周末精品班</p>
					</li>
					<li @click="ydy">
						<p><van-image round width="65%" height="51px" src="https://img.yzcdn.cn/vant/cat.jpeg" /></p>
						<p>一对一课程</p>
					</li>
					<li @click="ss">
						<p><van-image round width="65%" height="51px" src="https://img.yzcdn.cn/vant/cat.jpeg" /></p>
						<p>搜索</p>
					</li>
				</ul>
			</div>
			<div>
				<p style="font-size: 20px;font-weight: 600;padding-top: 15px;">高校晚辅导
				<span style="float: right;font-weight: 100;font-size: 16px;display: inline-block;padding-top: 4px;" @click="gxwfd">更多<van-icon name="arrow" style="padding-bottom: 5px;"/></span>
				</p>
				<van-swipe :show-indicators="false" :loop="false">
				  <van-swipe-item>
					  <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
							  @click="hdkc"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
						</ul>
				  </van-swipe-item>
				  <van-swipe-item>
					  <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  						</ul>
				  </van-swipe-item>
				  <van-swipe-item> <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  		<p style="writing-mode: vertical-rl;padding-top: 50px;padding-left: 15px;letter-spacing:8px;font-weight: 500;">没有更多了</p>
						</ul></van-swipe-item>
				</van-swipe>
			</div>
			
			<div>
				<p style="font-size: 20px;font-weight: 600;padding-top: 15px;">周末精品班
				<span style="float: right;font-weight: 100;font-size: 16px;display: inline-block;padding-top: 4px;" @click="gxwfd">更多<van-icon name="arrow" style="padding-bottom: 5px;"/></span>
				</p>
				<van-swipe :show-indicators="false" :loop="false">
				  <van-swipe-item>
					  <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
						</ul>
				  </van-swipe-item>
				  <van-swipe-item>
					  <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  						</ul>
				  </van-swipe-item>
				  <van-swipe-item> <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  		<p style="writing-mode: vertical-rl;padding-top: 50px;padding-left: 20px;letter-spacing:8px;font-weight: 550;">没有更多了</p>
						</ul></van-swipe-item>
				</van-swipe>
			</div>
			
			<div>
				<p style="font-size: 20px;font-weight: 600;padding-top: 15px;">个性化一对一
				<span style="float: right;font-weight: 100;font-size: 16px;display: inline-block;padding-top: 4px;" @click="gxwfd">更多<van-icon name="arrow" style="padding-bottom: 5px;"/></span>
				</p>
				<van-swipe :show-indicators="false" :loop="false">
				  <van-swipe-item>
					  <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
						</ul>
				  </van-swipe-item>
				  <van-swipe-item>
					  <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  						</ul>
				  </van-swipe-item>
				  <van-swipe-item> <ul class="uuu">
					  	<li>
					  		<van-image
					  		style="margin-top: -14px;"
					  		  width="100%"
					  		  height="133px"
					  		  fit="contain"
					  		  src="https://img.yzcdn.cn/vant/cat.jpeg"
					  		/>
					  		<div style="margin-top: -12px;margin-left: 10px;">
					  			<p style="font-size: 16px;">课程名称</p>
					  			<p style="color: #9f9f9f;">￥1500/10课时</p>
					  		</div>
					  	</li>
					  		<p style="writing-mode: vertical-rl;padding-top: 50px;padding-left: 20px;letter-spacing:8px;font-weight: 550;">没有更多了</p>
						</ul></van-swipe-item>
				</van-swipe>
			</div>
			<p style="text-align: center;height: 100px;color: #9f9f9f;margin-top: 20px;">
				没有更多内容了
			</p>
		</div>
		
		<foot></foot>
	</div>
</template>

<script>
	import foot from '../foot.vue'
	export default{
		components:{
			foot
		},
		data() {
		    return {
		    }},
		methods:{
			tiao(){
				this.$router.push({path:'/xzxq'})
			},
			gxwfd(){
				this.$router.push({path:'/wfd'})
			},
			zmjpb(){
				this.$router.push({path:'/zmjp'})
			},
			ydy(){
				this.$router.push({path:'/ydy'})
			},
			hdkc(){
				this.$router.push({path:'/hdkc'})
			},
			ss(){
				this.$router.push({path:'/ss'})
			}
		}
	}
</script>

<style scoped>
	.zhu{
		width: 100%;
		height: 700px;
	}
	* {
		margin: 0px;
		padding: 0px;
	}
.custom-indicator {
    position: absolute;
    right: 1px;
    bottom: 1px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
	.block {
		margin-top: 20px;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.head {
		text-align: center;
		position: fixed;
		font-size: 20px;
		background-color: white;
		width: 100%;
		height: 30px;
		z-index: 100;
	}
	.zo ul li{
		float: left;
		text-align: center;
		color: #999999;
		height: 97px;
		width: 25%;
	}
	.zo ul li p{
		padding-bottom: 8px;
	}
	.zo{
		margin-top: 20px;
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
</style>
