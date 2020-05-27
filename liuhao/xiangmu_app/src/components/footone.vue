<template>
	<van-tabbar v-model="active" style="background-color: #f2f2f2;">
		<van-tabbar-item icon="orders-o" @click="rc">日程</van-tabbar-item>
		<van-tabbar-item icon="chat-o" badge="3" @click="xxx">信息</van-tabbar-item>
		<van-tabbar-item icon="manager-o" @click="rczx">个人中心</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
		name: 'foot',
		data() {
			return {
				active: 0,
				icon: {
					// active: 'https://img.yzcdn.cn/vant/user-active.png',
					// inactive: 'https://img.mo.cn/vant/user-inactive.png',
				},
			};
		},
		methods: {
			xxx() {
				this.$router.push({
					path: '/xiaoxx'
				})
			},
			rc(){
				this.$router.push({path:'/rc'})
			},
			rczx(){
						  this.$router.push({path:'/rczx'})

			}
		}
	};
</script>

<style>
</style>
