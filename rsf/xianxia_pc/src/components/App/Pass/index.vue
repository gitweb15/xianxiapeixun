<template>
	<div>
		<p style="color: #737373;font-size: 17px;font-weight: 600;margin-left: 30px;margin-top: 30px;">请输入原密码及新密码</p>
		<br />
		<van-form @submit="onSubmit">
		  <van-field
		    v-model="username"
		    name="用户名"
		    placeholder="请输入原密码"
		    :rules="[{ required: true, message: '请填写原密码' }]"
			style="width: 90%;margin: 0 auto;"
		  />
		  <br />
		  <van-field
		    v-model="password"
		    type="password"
		    name="密码"
		    placeholder="请输入新密码"
		    :rules="[{ required: true, message: '请填写新密码' }]"
			style="width: 90%;margin: 0 auto;"
		  />
		  <br />
		  <van-field
		    v-model="passwordl"
		    type="password"
		    name="密码"
		    placeholder="请再次输入新密码"
		    :rules="[{ required: true, message: '请再次输入新密码' }]"
		  			style="width: 90%;margin: 0 auto;"
		  />
		  <br />
		  <div style="margin: 18px;">
		    <van-button round block type="info" native-type="submit" to="User">
		      登录
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	export default {
		name:'Pass',
	  data() {
	    return {
	      username: '',
	      password: '',
		  password:''
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
