<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>学员管理</span></p>
		<p class="p1"><span></span><span>学员管理</span></p>
		<p style="float: right;position: relative;top: -28px;left: -20px;">编辑</p>
		<van-radio-group v-model="radio" class="ro">
			<div class="ku">
				<van-cell title="学员姓名" is-link value="" style="position: relative;top: 19px;left: 0px;width: 90%;"/>
			</div>
				<div class="ku">
					<van-cell title="学员姓名" is-link value="" style="position: relative;top: 19px;left: 0px;width: 90%;"/>
				</div>
				<div class="ku">
					<van-cell title="学员姓名" is-link value="" style="position: relative;top: 19px;left: 0px;width: 90%;"/>
				</div>
		</van-radio-group>
		<div style="margin: 18px;position: relative;top: 210px;">
		  <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
		    新增学员
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
	  	kc(){
	  		this.$router.go(-1)
	  	}
	  }
	};
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
		cursor: pointer;
	}
	.head{
		position: fixed;
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
		padding-top: 60px;
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
		margin-top: 25px;
	}
	.ku{
		width: 93%;
		height: 75px;
		text-align: center;
		margin-left: 10px;
		box-shadow: 1px 1px 1px 1px #e5e5e5;
		margin-top: 25px;
	}
</style>
