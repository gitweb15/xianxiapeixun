<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="fh">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>手机号注册</span></p>
		<p style="color: #737373;font-size: 17px;font-weight: 600;margin-left: 30px;margin-top: 30px;">请输入手机号</p>
		<br />
		<van-form @submit="onSubmit">
		  <van-field label="+86" placeholder="请输入手机号" style="width: 90%;margin: 0 auto;"/>
		  <br />
		 <van-field
		   center
		   clearable
		   placeholder="请输入短信验证码"
		   style="width: 90%;margin: 0 auto;"
		 >
		   <template #button>
		     <a href="#">发送验证码</a>
		   </template>
		 </van-field>
		  <br />
		  <div style="margin: 18px;position: relative;top: 410px;">
		   <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;" @click="fh">
		     注册
		   </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	export default {
		name:'jsgl',
	  data() {
	    return {
	      username: '',
	      password: '',
	    };
	  },
	  methods: {
	    onSubmit(values) {
	      console.log('submit', values);
	    },
		fh(){
			this.$router.go(-1)
		}
	  },
	};
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
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
