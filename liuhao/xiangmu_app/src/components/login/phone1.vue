<template>
	<div>
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
		  <div style="margin: 18px;">
		    <van-button round block type="info" native-type="submit">
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
	  },
	};
</script>

<style>
</style>
