<template>
	<div class="zhu">
		<p>
			<img src="../../../public/img/qidong.jpg">
		</p>
	</div>
</template>

<script>
	export default {
	  name: "stat",
	  mounted() {
	    setTimeout(() => {
	      this.$router.push(
		  {path: '/login'}
		  )
	    },3000)
	  },
	};
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0px;
	}
	.zhu{
		width: 100%;
		height: 735px;
		background-color: #f2f2f2;
	}
	.zhu p{
		text-align: center;
		padding-top: 50px;
	}
</style>
