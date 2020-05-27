<template>
	<div class="login-box">
		
		<el-form :model="form" :rules="ruleForm" ref="form" class="login-form">
			<h3 class="title">后 台 管 理 系 统</h3>
			<el-form-item prop="username">
				<el-input v-model="form.username" autocomplete="new-password" prefix-icon="el-icon-s-custom" placeholder='请输入用户名称'></el-input>
			</el-form-item>
			<el-form-item prop="password" type='password'>
				<el-input v-model="form.password" autocomplete="new-password" prefix-icon="el-icon-lock" placeholder='请输入登录密码'></el-input>
			</el-form-item>
			<el-form-item>
				 <!-- to='/Class' -->
				<el-button type="primary" @click="submit" class="login-btn" v-loading="logining">登 录</el-button>
				<!-- <router-link tag='el-button' @click="submit" v-loading="logining" type="primary" class="login-btn" style="background-color: #409EFF;color: white;">登 录</router-link> -->
			</el-form-item>
		</el-form>
		<h5 style="color: #FFF;text-align: center;">Copyright &copy;, All Rights Reserved.</h5>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				logining: false,
				form: {
					// username:'admin',
					// password:'admin'
				},
				ruleForm:{
					username: [{
						required: true,
						message: '账号不能为空,请填写用户账号',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空,请填写登录密码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			submit(event) {
				this.$refs.form.validate((valid) => {
					if (valid) {
						this.logining = true;
						if (this.form.username === 'admin' &&
							this.form.password === 'admin') {
							this.logining = false;
							sessionStorage.setItem('username', this.form.username);
							this.$router.replace({ path: '/Class' })
						} else {
							this.logining = false;
							this.$alert('用户名或密码不正确!', '提示', {
								confirmButtonText: 'ok'
							})
						}
					} else {
						console.log('error submit!');
						return false;
					}
				})
			},
			login() {
				this.$refs.form.resetFields();
			}
		}
	}
</script>

<style lang="scss" scoped>
	body{
		margin: 0px;
		padding: 0px;
	}
	.login-box {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #0099FF;

		.login-form {
			border-radius: 5px;
			background-clip: padding-box;
			margin: 180px auto;
			width: 350px;
			padding: 35px 35px 15px 35px;
			background: #f5f5f5;
			border: 1px solid #eaeaea;
			box-shadow: 0 0 5px #cac6c6;

			.title {
				margin: 0px auto 40px auto;
				text-align: center;
				color: #0099FF;
				font-size: 23px;
			}

			.btn-eye {
				cursor: pointer;
			}

			.text-danger {
				color: #F56C6C;
			}

			.login-btn {
				margin: 35px 0 10px 0;
				width: 100%;
			}
		}
	}
</style>
