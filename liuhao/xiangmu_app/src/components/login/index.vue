<template>
	<div class="zhu">
		<div class="d1">
			<p style="position: relative;top: 150px;text-align: center;"><img src="../../../public/img/cc.jpg"></p>
			<p style="position: relative;top: 170px;text-align: center;">不忘初心 做有温度的教育</p>
			<p style="position: relative;top: 280px;">
			<van-button round block type="info" native-type="submit" style="width: 80%;margin: 20px auto;" is-link @click="showPopup">微信授权登录
			</van-button>
			</p>
			<p class="p2" @click="jszc">微信教师入口</p>
			<van-popup v-model="show"  position="bottom" :style="{ height: '42%' }">
				<div class="di">
					<p>
						<img src="../../assets/未标题-1.jpg">
						<span style="font-size: 20px;font-weight: 600;margin-left: 7px;">耐寒教育</span>
						<span style="display: inline-block;margin-left: 10px;font-size: 20px;">申请</span>
					</p>
					<P style="font-size: 24px;font-weight: 700;color: black;">获取你的昵称、头像、地区及性别</P>
					<p style="margin-top: 20px;">
						<img src="../../assets/11.jpg">
					</p>
					<p style="margin-top: 20px;">
					<el-button type="info" plain style="width: 150px;height: 45px;">取 消</el-button>
					<router-link tag="span" to="/kc" style="display: inline-block;">
						<el-button type="success" style="width: 150px;height: 45px;margin-left: 20px;">允 许</el-button>
					</router-link>
					</p>
				</div>
			</van-popup>
			<p class="p3">技术服务电话：XXXXX</p>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      show: false,
	    };
	  },
	
	  methods: {
	    showPopup() {
	      this.show = true;
	    },
		jszc(){
			this.$router.push({path:'/jszc'})
		}
	  },
	};
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0px;
	}
	.zhu{
		background-color: #f2f2f2;
		height: 800px;
		overflow-y: hidden;
		width: 100%;
		/* height: 670px;
		overflow: hidden; */
	}
	.d1{
		background-color: #f2f2f2;
		height: 100%;
		width: 100%;
	}
	/* .d1 p{
		text-align: center;
	} */
	.d1 p:nth-of-type(2){
		color: #cb213c;
		font-size: 17px;
		font-weight: 600;
	}
	.p2{
		font-size: 15px;
		color: #9c9c9c;
		position: absolute;
		top: 480px;
		right: 40px;
	}
	.p3{
		font-size: 18px;
		font-weight: 600;
		color: #9c9c9c;
		margin-top: 430px;
		text-align: center;
	}
	.di p{
		margin-left: 30px;
	}
	.di{
		margin-top: 20px;
	}
</style>
