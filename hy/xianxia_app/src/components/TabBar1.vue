<template>
	<div id="footer">
		<ul>
			<router-link tag="li" to="/richeng">
				<van-icon name="send-gift-o" />
				<p>日程</p>
			</router-link>
			<router-link tag="li" to="/info2">
			<van-icon name="chat-o" badge="2" />
				<p>消息</p>
			</router-link>
			<router-link tag="li" to="/gerenzhongxin1">
				<van-icon name="friends-o" />
				<p>个人中心</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'TabBar1'
	}
</script>

<style scoped>
	#footer{
		width: 100%;
		height: 50px;
		background: white;
		border-top: 2px solid #ebe8e3;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	#footer p{
		margin: auto;
	}
	#footer ul{
		display: flex;
		text-align: center;
		height: 50px;
		align-items: center;
	}
	#footer ul li{
		flex: 1;
		height: 40px;
	}
	#footer li.active{
		color: #F03D37;
	}
	#footer li.router-link-active{
		color: #F03D37;
	}
	#footer ul i{
		font-size: 20px;
	}
	#footer ul p{
		font-size: 12px;
		line-height: 18px;
	}
</style>
