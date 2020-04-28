<template>

	<div style="width: 80%;position: absolute;left:240px;top: 50px;">
		<div>
			<p><span style="border: 1px solid limegreen;background: limegreen;"></span>菜单管理</p>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline top">
			<el-form-item label="根菜单:" style="width: 28%;">
				<el-select v-model="formInline.region" placeholder="请选择根菜单">
					<el-option label="城南校区" value="城南校区"></el-option>
					<el-option label="水榭校区" value="水榭校区"></el-option>
					<el-option label="世贸校区" value="世贸校区"></el-option>
					<el-option label="花之南校区" value="花之南校区"></el-option>
					<el-option label="滨江校区" value="滨江校区"></el-option>
					<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
					<el-option label="万达校区" value="万达校区"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="父菜单:" style="width: 28%;">
				<el-select v-model="formInline.region" placeholder="请选择根菜单">
					<el-option label="某某某" value="某某某"></el-option>
					<el-option label="某某某" value="某某某"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="菜单名称:" style="width: 28%;">
				<el-select v-model="formInline.region" placeholder="请输入内容">
					<el-option label="是" value="是"></el-option>
					<el-option label="否" value="否"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item style="margin-top: 0px;float: right;">
				<el-button type="primary" @click="onSubmit">搜索</el-button>
			</el-form-item>
		</el-form>
		<button>{{title}}</button>
		<el-table :data="tableData" style="width: 100%;height: 100%;">
			<el-table-column prop="no" label="序" width="80%">
			</el-table-column>
			<el-table-column prop="name" label="菜单类型" show-overflow-tooltip width="150px">
			</el-table-column>
			<el-table-column prop="xiaoqu" label="菜单名称" show-overflow-tooltip width="120px">
			</el-table-column>
			<el-table-column prop="date" label="父菜单名称" show-overflow-tooltip width="130px">
			</el-table-column>
			<el-table-column prop="price" label="根菜单名称" show-overflow-tooltip width="140px">
			</el-table-column>
			<el-table-column prop="study" label="地址" show-overflow-tooltip width="120px">
			</el-table-column>
			<el-table-column prop="status" label="排序序号" show-overflow-tooltip width="130px">
			</el-table-column>
			<el-table-column prop="caozuo" label="是否激活" show-overflow-tooltip width="100">
			</el-table-column>
			<el-table-column prop="caozuo1" label="操作" show-overflow-tooltip width="100">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "menu",
		props: {
			title: {
				type: String,
				default: '新增菜单'
			},
		},
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				tableData: [{
					no: '1',
					name: '小程序菜单',
					xiaoqu: '课程',
					date: '',
					price: '',
					study: '',
					status: '1',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, {
					no: '2',
					name: '小程序菜单',
					xiaoqu: '消息',
					date: '',
					price: '',
					study: '',
					status: '2',
					caozuo: '否',
					caozuo1: '修改 启用'
				}, {
					no: '3',
					name: '小程序菜单',
					xiaoqu: '个人中心',
					date: '',
					price: '',
					study: '',
					status: '3',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, {
					no: '4',
					name: '后台菜单',
					xiaoqu: '首页',
					date: '',
					price: '',
					study: '',
					status: '1',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, {
					no: '5',
					name: '后台菜单',
					xiaoqu: '课程管理',
					date: '',
					price: '',
					study: '',
					status: '1',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, {
					no: '6',
					name: '后台管理',
					xiaoqu: '课程消耗',
					date: '',
					price: '课程管理',
					study: '',
					status: '1',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, {
					no: '7',
					name: '后台管理',
					xiaoqu: '课程消耗',
					date: '',
					price: '课程管理',
					study: '',
					status: '2',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, {
					no: '8',
					name: '后台管理',
					xiaoqu: '班级课程管理',
					date: '课程管理',
					price: '课程管理',
					study: '',
					status: '1',
					caozuo: '是',
					caozuo1: '修改 禁用'
				}, ],
				multipleSelection: []
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	};
</script>
<style scoped>
	button {
		border-radius: 8px;
		width: 80px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	/* ..el-button--danger{
		background-color: white;
	} */
	.el-submenu,
	.el-submenu__title {
		background: #f9f9f9 !important;

		border-bottom: 1px solid #f2f2f2;
	}

	.el-menu-item {
		background: #fcfcfc;
		color: #666666;
	}

	.el-menu-item.is-active {
		background: #fff;
		color: #48c9b0;
	}

	.el-menu-vertical-demo {
		background: #fcfcfc;
	}

	.height100 {
		height: 100%;
	}

	.el-menu-item-group>div {
		padding: 0px !important;
	}
</style>
