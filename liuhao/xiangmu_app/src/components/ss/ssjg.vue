<template>
	<div class="zhu">
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>搜索结果</span></p>
		<div style="padding-top: 50px;">
			 <el-input
			    placeholder="一对一"
			    prefix-icon="el-icon-search"
			    v-model="input2"
				style="width: 95%;margin-left: 10px;">
			  </el-input>
			  <img src="../../assets/ss.jpg" style="position: absolute;right: 40px;top: 57px">
			<div>
				<ul class="uu">
					<p @click="hdkc"><van-icon name="search" size="25"/><span>语文个性化一对一辅导</span></p>
					<p @click="hdkc"><van-icon name="search" size="25"/><span>英语个性化一对一辅导</span></p>
					<p @click="hdkc"><van-icon name="search" size="25"/><span>数学个性化一对一辅导</span></p>
					<p @click="hdkc"><van-icon name="search" size="25"/><span>化学个性化一对一辅导</span></p>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				input2:''
			}
		},
			methods:{
				kc(){
					this.$router.go(-1)
				},
				hdkc(){
					this.$router.push({path:'/hdkc'})
				}
			}
	}
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0px;
	}
	.zhu{
		width: 100%;
		height: 900px;
		background-color: #f2f2f2;
	}
	.uu{
		width: 100%;
		height: 100%;
		background-color: white;
		margin-top: 15px;
	}
	.uu p{
		width: 100%;
		padding-top: 15px;
		line-height: 40px;
		padding-left: 15px;
	}
	.uu p span{
		width: 100%;
		display: inline-block;
		border-bottom: 1px solid #c6c6c6;
		width: 88%;
		padding-left: 15px;
		padding-top: -3px;
		color: #676767;
	}
	.ni{
		text-align: center;
		margin-top: 15px;
		color: #bababa;
		font-weight: 600;
	}
	.head{
		position: fixed;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
</style>
