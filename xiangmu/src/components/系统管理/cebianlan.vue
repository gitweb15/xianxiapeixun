<template>
	<div>
		<div class="height:700px;width:10%">
			<el-row class="tac height:100%">
				<el-col :span="4" class="height:100%">
					<el-menu default-active="2" class="el-menu-vertical-demo height:100%" @open="handleOpen" @close="handleClose">
						<el-submenu v-for="(item, i) in barContentData" :key="i" :index="`${i}`">
							<template slot="title">
								<span>{{ item.title }}</span>
							</template>
							<el-menu-item-group>
								<el-menu-item v-for="(item2, j) in item.content" :key="j" :index="`${i}-${j}`">{{ item2 }}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "cebianlan",
		props: {
			title: {
				type: String,
				default: '新增菜单'
			},
		},
		data() {
			return {
				barContentData: [{
						title: "账号管理",
						content: ["家长账号管理", "教师账号管理"]
					},
					{
						title: "系统配置",
						content: ["菜单管理", "权限管理", "组织架构管理"]
					},
					{
						title: "系统数据",
						content: ["数据字典", "日历管理", "通知管理"]
					}
				],
				formInline: {
					user: '',
					region: ''
				},
			};
		},
		methods: {
			// handleEdit(index, row) {
			// 	console.log(index, row);
			// },
			// handleDelete(index, row) {
			// 	console.log(index, row);
			// },
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
