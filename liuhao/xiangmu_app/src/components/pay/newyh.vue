<template>
	<div>
		<p style="color: #737373;font-size: 17px;font-weight: 600;margin-left: 30px;margin-top: 30px;">请选择渠道来源</p>
		<br />
		<van-radio-group v-model="radio" class="ro">
		  <van-radio name="1" icon-size="15px">广告</van-radio>
		  <van-radio name="2" icon-size="15px">传单</van-radio>
		  <van-radio name="3" icon-size="15px">亲友介绍</van-radio>
		</van-radio-group>
		  <br />
		  <div style="margin: 18px;position: relative;top: 380px;">
		    <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
		      注册
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	export default {
		name:'jsgl',
	  data() {
	    return {
	      username: '',
	      password: '',
		  radio: '1'
	    };
	  },
	  methods: {
	    onSubmit(values) {
	      console.log('submit', values);
	    },
	  },
	};
</script>

<style scoped>
	.ro{
		margin-left: 30px;
		margin-top: -30px;
	}
	.ro div{
		margin-top: 20px;
	}
</style>
