<template>
	<div>
		<el-row>
			<el-col :span="24" class="headerCss clear">
				<div class="left">
					<el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
				</div>
				<ul class="clear heaerLink left">
					<router-link v-for="(item, index) in liContent" :key="index" :class="{'active':currentSort==index}" @click.native="active(index)"
					 :to="`${item.id}`" tag="li">{{ item.name }}</router-link>
				</ul>
				<div class="right headerClose">
					<el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
					<router-link to="" tag="a">账户设置</router-link>

					<el-avatar icon="el-icon-switch-button" :size="30"></el-avatar>
					<!-- <a @click="open">
						<router-link to="" tag="a">退出登录</router-link>
					</a> -->

					<el-button type="text" @click="dialogVisible = true" style='color: gainsboro'>退出登录</el-button>
				</div>
				<el-dialog title="退出确认" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
					<span>确定要退出登录吗？</span>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<router-link tag='el-button' type="primary" to='/login' style="background-color: #48C9B0;color: white;">确 定</router-link>
					</span>
				</el-dialog>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				dialogVisible: false,
				liContent: [{
						name: "课程管理",
						id: "Course"
					},
					{
						name: "班级管理",
						id: "Class"
					},
					{
						name: "学员管理",
						id: "Student"
					},
					{
						name: "订单管理",
						id: "Order"
					},
					{
						name: "教师管理",
						id: "Teacher"
					},
					{
						name: "统计分析",
						// id:"Statis"
						id: "Statis"
					},
					{
						name: "支付中心",
						id: "Pay"
					},
					{
						name: "系统管理",
						// id:"System"
						id: "menu"
					}
				],
				currentSort: this.$store.state.topNum
			};
		},
		methods: {
			// handleClose(done) {
			// 	this.$confirm('确认关闭？')
			// 		.then(_ => {
			// 			done();
			// 		})
			// 		.catch(_ => {});
			// },

			open() {
				this.$confirm('确定要退出登录吗？', '退出确认', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: ''
				}).then(() => {
					this.$message({
						type: 'success',
						// 'message: '退出成功!','
						url: 'Class',
						// $router.replace({ path: '/Class' })
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消退出'
					});
				});
			},
			// 头部
			active(index) {
				this.$store.commit('topNumUpdate', index)
			}
		},
		watch: {
			'$store.state.topNum'(data) {
				this.currentSort = data
			}
		}
	};
</script>

<style scoped>
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
		font-size: 13px;text-align: center;
		margin: 0 8px;
		line-height: 47px;width: 100px;
	}

	.heaerLink li:hover {
		color: rgb(255, 255, 255);
		background-color: #48C9B0;
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
	}
</style>
