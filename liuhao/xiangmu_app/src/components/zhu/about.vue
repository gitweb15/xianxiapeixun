<template>
	<div class="z">
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>关于我们</span></p>
		<div class="zhu">
			<img src="../../../public/img/hao.jpg" width="100%" style="margin-top: 20px;">
			<div class="pp">
				<h3>关于我们</h3>
				<p>致力于打造全国最专业的教育机构</p>
				<p>自2012年8月成立以来，备受孩子和家长的青
					睐，经过长达5年的努力。我们为福建首不同年
					龄段的孩子创造先进创新的教育体系。全省丰富
					的教育行业经验和优质的产品资源。教师风规幽
					默，有意营造学习氛围，旨在为3-18岁的孩子提
					供更轻松:更高效:更快乐的学习。在全温入式学
					习环境中,激发孩子的学习兴趣。使孩子学习起
					来游刃有余。
				</p>
				<p>耐寒教育的愿景是在个性化教育理念的指导下
					通过持续的创新和整合,让每个需要成长机会的
					人都能获得更优质的教育资源和服务。使教育从
					艺术走向科学，整合社会更高品质，
					更具效率、
					更先进的教育资源，配置个性化的学习帮助计划
					和更适合学员的教学方案，最大程度地释放每个
					学员的潜能。让每个需要成长机会的人都能获得
					更优质的教育。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			kc(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}

	.head{
		position: fixed;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}

	.zhu {
		width: 92%;
		height: 735px;
		margin: 0 auto;
		padding-top: 40px;
	}

	.z {
		width: 100%;
		height: 100%;
		background-color: ;
	}
	.pp p{
		text-align: center;
		margin-top: 20px;
		color: #616161;
		font-size: 15px;
	}
	.pp{
		margin-top: 40px;
	}
	.pp h3{
		text-align: center;
		color: #3776ff;
	}
</style>
