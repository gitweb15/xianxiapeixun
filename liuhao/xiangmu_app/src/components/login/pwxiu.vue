<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;" />密码修改</span>
		</p>
		<p style="color: #737373;font-size: 17px;font-weight: 600;margin-left: 30px;margin-top: 50px;">请输入原密码及新密码</p>
		<br />
		<van-form @submit="onSubmit">
			<van-field v-model="username" name="用户名" placeholder="请输入原密码" :rules="[{ required: true, message: '请填写原密码' }]" style="width: 90%;margin: 0 auto;" />
			<br />
			<van-field v-model="password" type="password" name="密码" placeholder="请输入新密码" :rules="[{ required: true, message: '请填写新密码' }]"
			 style="width: 90%;margin: 0 auto;" />
			<br />
			<van-field v-model="passwordl" type="password" name="密码" placeholder="请再次输入新密码" :rules="[{ required: true, message: '请再次输入新密码' }]"
			 style="width: 90%;margin: 0 auto;" />
			<br />
			<div style="margin: 18px;">
				<van-button round block type="info" native-type="submit" @click="io">
					修改
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	export default {
		name: 'jsgl',
		data() {
			return {
				username: '',
				password: '',
				passwordl: ''
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			kc() {
				this.$router.go(-1)
			},
			io() {
				if (this.username != "" && this.password != "" && this.passwordl != "") {
					this.$toast.success('成功文案')
					setTimeout(() => {
						this.$router.push({
							path: '/rczx'
						})
					}, 2000)
				}
			}
		},
	};
</script>

<style scoped>
	.head {
		position: fixed;
		top: -20px;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
</style>
