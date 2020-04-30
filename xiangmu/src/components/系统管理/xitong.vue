<template>
	<div>
		<el-row>
			<el-col :span="24" class="headerCss clear">
				<div class="left">
					<el-avatar icon="el-icon-user-solid" :size="30" style="position: absolute;top:8px;"></el-avatar>
				</div>
				<ul class="clear heaerLink left" style="position: absolute;top:75px;text-indent: 40px;">
					<router-link v-for="(item, index) in liContent" :key="index" :class="{'active':currentSort==index}" @click.native="active(index)"
					 to tag="li">{{ item }}</router-link>
				</ul>
				<div class="right headerClose" style="float: right;">
					<el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
					<router-link to="" tag="a">账户设置</router-link>
					<el-avatar icon="el-icon-switch-button" :size="30"></el-avatar>
					<router-link to="" tag="a">退出登录</router-link>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				liContent: [
					"课程管理",
					"班级管理",
					"学员管理",
					"订单管理",
					"统计分析",
					"支付中心",
					"系统管理"
				],
				currentSort: 0
			};
		},
		methods: {
			active(index) {
				this.currentSort = index;
			}
		}
	};
</script>

<style scoped>
	/* .left:nth-child(7){
		background-color: #000088;
	} */
	.left {
		list-style-type: none;
		margin-top: -75px;
		padding-left: 73px;line-height: 30px;
		list-style-type: none;
		/* position: absolute;display: inline-block;
		top: 30px; */
	}

	.headerCss>div:first-child {
		padding: 8px 50px 5px 20px;
	}

	.headerCss {
		background: #464c5b;
		padding-right: 20px;
	}

	.heaerLink li {
		float: left;
		cursor: pointer;
		color: #cccccc;
		font-size: 13px;
		margin: 0 10px;
		line-height: 47px;
	}

	.active {
		color: white !important;
	}

	.headerClose span {
		margin: 7px 15px -10px 17px;
	}

	.headerClose a {
		color: #cccccc;
		font-size: 13px;
		line-height: 47px;
		text-decoration: none;
	}
</style>
