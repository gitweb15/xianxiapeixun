<template>
		<van-tabbar v-model="active" style="background-color: #f2f2f2;">
		  <van-tabbar-item icon="orders-o" @click="kc">课程</van-tabbar-item>
		  <van-tabbar-item icon="chat-o" badge="3" @click="xx">信息</van-tabbar-item>
		  <van-tabbar-item icon="manager-o" @click="grzx">个人中心</van-tabbar-item>
		</van-tabbar>
</template>

<script>
	export default {
		name:'foot',
	  data() {
	    return {
	      active: 0,
	      icon: {
	        // active: 'https://img.yzcdn.cn/vant/user-active.png',
	        // inactive: 'https://img.mo.cn/vant/user-inactive.png',
	      },
	    };
	  },
	  methods:{
		  kc(){
			  this.$router.push({path:'/kc'})
		  },
		  xx(){
			  this.$router.push({path:'/xiaox'})
		  },
		  grzx(){
			  this.$router.push({path:'/grzx'})
		  }
	  }
	};
</script>

<style>
</style>
