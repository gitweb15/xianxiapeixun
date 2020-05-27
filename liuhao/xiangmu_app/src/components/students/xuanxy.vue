<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>选择学员</span></p>
		<p class="p1"><span></span><span>请选择参与学员</span></p>
		<van-button type="info" size="small" style="float: right;position: relative;top: -48px;left: -20px;" @click="xz">新增学员</van-button>
		<van-radio-group v-model="radio" class="ro">
			<ul class="ku">
				<li><van-radio name="1" icon-size="15px" style="padding-left: 20px;padding-top: 20px;">学员一</van-radio></li>
				<li><van-radio name="2" icon-size="15px" style="padding-left: 20px;padding-top: 20px;">学员二</van-radio></li>
				<li><van-radio name="3" icon-size="15px" style="padding-left: 20px;padding-top: 20px;">学员三</van-radio></li>
			</ul>
		</van-radio-group>
		<div style="margin: 18px;position: relative;top: 210px;" @click="fh">
		  <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
		    保存
		  </van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'xxy',
	  data() {
	    return {
		  radio: '1'
	    };
	  },
	  methods:{
		  fh(){
			  this.$router.go(-1)
		  },
		  kc(){
		  	this.$router.go(-1)
		  },
		  xz(){
			  this.$router.push({path:'/xz'})
		  }
	  }
	};
</script>

<style scoped>
	.head{
		position: fixed;
		top: -20px;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
	.p1 {
		color: #737373;
		font-size: 17px;
		font-weight: 600;
		margin-left: 30px;
		margin-top: 60px;
	}
	
	.p1 span:nth-of-type(1) {
		display: inline-block;
		width: 6px;
		height: 22px;
		background-color: #2e79ff;
	}
	
	.p1 span:nth-of-type(2) {
		display: inline-block;
		position: relative;
		top: -5px;
		left: 5px;
	}
	.ro{
		margin-top: 15px;
	}
	.ku li{
		width: 93%;
		height: 75px;
		text-align: center;
		margin-left: 10px;
		box-shadow: 1px 1px 1px 1px #e5e5e5;
		margin-top: 15px;
	}
</style>
