<template>
	<div>
		<p style="text-align: center;font-size: 20px;">选择校区</p>
		<p style="color: #737373;font-size: 17px;font-weight: 600;margin-left: 30px;margin-top: 30px;">请选择查看校区</p>
		<div>
			<ul class="uu">
				<li>
					<p @click="kc">
						<van-button type="default">城南校区</van-button>
					</p>
					<p @click="kc">
						<van-button type="default">滨江校区</van-button>
					</p>
					<p @click="kc">
						<van-button type="default">世贸校区</van-button>
					</p>
				</li>
				<li>
					<p @click="kc">
						<van-button type="default" style="width: 100%;">水榭校区</van-button>
					</p>
					<p @click="kc">
						<van-button type="default">九栋桥校区</van-button>
					</p>
				</li>
				<li>
					<p @click="kc">
						<van-button type="default">花之南校区</van-button>
					</p>
					<p @click="kc">
						<van-button type="default" style="width: 100%;">万达校区</van-button>
					</p>
				</li>
			</ul>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '../foot.vue'
	export default {
		name: "xzxq",
		components: {
			Foot
		},
		methods:{
			kc(){
				this.$router.push({path:'/kc'})
			}
		}

	}
</script>

<style scoped>
	.uu li {
		float: left;
		margin-left: 25px;
	}

	.uu li p {
		color: black;
		box-shadow: 5px 5px 15px #f2f2f2;
	}
</style>
