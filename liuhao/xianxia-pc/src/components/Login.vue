<template>
	<div class="login-box">
		<el-form :model="form" :rules="ruleForm" ref="form" class="login-form">
			<h3 class="title">后 台 管 理 系 统</h3>
			<el-form-item prop="username">
				<el-input v-model="form.username" autocomplete="new-password" placeholder="提示:admin" prefix-icon="el-icon-s-custom">
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="form.password" autocomplete="new-password" placeholder="提示:admin" prefix-icon="el-icon-lock">
					<!-- 通过autocomplete="off"属性来禁止自动填充，然而发现好像没有起到作用。 -->
					<!-- autocomplete的new-password属性来禁止自动填充 -->
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submit" class="login-btn" v-loading="logining">登 录</el-button>
			</el-form-item>
		</el-form>
		<h5 style="color: #FFF;text-align: center;">Copyright &copy;, All Rights Reserved.</h5>
	</div>
</template>

<script>
	export default {
		name: 'login',
		// 单页面不支持前面的data:{}方式
		data() {
			// 相当于以前的funtion data(){},这是es5之前的写法,新版本可以省略funtion
			return {
				logining: false,
				form: {
					username: 'admin',
					password: 'admin'
				},
				ruleForm:{
					username: [{
						required: true,
						message: '账号不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空',
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
							this.$router.replace({ path: '/Course' })
						} else {
							this.logining = false;
							this.$alert('用户名或密码错误!', '提示', {
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
