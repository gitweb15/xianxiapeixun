<template>
	<div class="zhu">
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>搜索</span></p>
		<div style="padding-top: 50px;">
			 <el-input
			    placeholder="搜索课程名称"
			    prefix-icon="el-icon-search"
			    v-model="input2"
				style="width: 95%;margin-left: 10px;">
			  </el-input>
			  <img src="../../assets/ss.jpg" style="position: absolute;right: 40px;top: 57px">
			<div>
				<ul class="uu">
					<p @click="jg"><van-icon name="search" size="25"/><span>语文课后辅导</span></p>
					<p @click="jg"><van-icon name="search" size="25"/><span>一对一辅导班</span></p>
					<p @click="jg"><van-icon name="search" size="25"/><span>英语周末精品</span></p>
					<p @click="jg"><van-icon name="search" size="25"/><span>英语</span></p>
				</ul>
			</div>
			<p class="ni">查看更多记录</p>
			<p class="ni">清除所有记录</p>
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
				jg(){
					this.$router.push({path:'/jg'})
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
