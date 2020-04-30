<template>
	<div style="width: 100%;">
		<div>
			<p><span style="border: 1px solid limegreen;background: limegreen;padding-left: 5px;"></span>轮播图管理</p>
		</div>
	
		<button>新增菜单</button>
		<el-table :data="tableData" style="width: 100%;height: 100%;">
			<el-table-column prop="no" label="轮播图" width="80%">
			</el-table-column>
			<el-table-column prop="name" label="跳转链接" show-overflow-tooltip width="150px">
			</el-table-column>
			<el-table-column prop="xiaoqu" label="是否使用" show-overflow-tooltip width="120px">
			</el-table-column>
			<el-table-column prop="date" label="操作" show-overflow-tooltip width="130px">
				<span>删除</span>
				<span>停用</span>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "menu",
	
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
	span{
		 color:red
	}
	span:nth-child(2){
		padding-left: 20px;
	}
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
