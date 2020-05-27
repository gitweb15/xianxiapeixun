<template>
	<div>
		<top title="校区管理"></top>
		<div class="main" style="width:100%;">

			<div class="main-from clear" style="padding-top:10px;padding-left:10px;margin-bottom: 20px;">
				<el-button type="primary" @click="dialogFormVisible = true">新增校区</el-button>
				<el-button type="primary">导出Excel</el-button>
			</div>
			
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;margin-left: 0px;" :header-cell-style="tableHeaderColor"
				 :row-class-name="tableRowClassName">
					<el-table-column prop="no" label="序" width="150"></el-table-column>
					<el-table-column prop="name" label="校区名称" width="200"></el-table-column>
					<el-table-column prop="sex" label="校区地址" width="300"></el-table-column>
					<el-table-column prop="zc" label="联系方式" width="250"></el-table-column>
					<el-table-column prop="check1" label="修改" width="200"><span style="color: #409EFF;" @click="dialogFormVisible = true">修改</span></el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
			</div>
			<el-dialog :visible.sync="dialogFormVisible">
				<el-form :model="form" title='校区详情'>
					<el-form-item label="校区详情" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;font-weight: bold;">
					</el-form-item>
					<el-form-item label="校区名称" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="校区地址" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="联系方式" :label-width="formLabelWidth" style="margin-left: -40px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					
				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
					<el-button @click="dialogFormVisible = false">重置</el-button>

				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import top from "../Top";
	import {
		mapState
	} from "vuex";
	export default {
		name: "xiaoqu",
		data() {
			return {
				currentPage: 1, //默认显示第一页
				pageSize: 10, //默认每页显示10条
				totalNum: 5, //总页数
				formInline: {
					user: '',
					region: '',
					content: ''
				},
				tableData: [{
					no: '1',
					name: '城南校区',
					sex: '福清市中联天御财富广场4楼',
					zc: '17746084680',
				}, {
					no: '2',
					name: '水榭校区',
					sex: '福清市水南车站旁景园公寓208',
					zc: '0591-85220810',
				}, {
					no: '2',
					name: '水榭校区',
					sex: '福清市水南车站旁景园公寓208',
					zc: '0591-85220810',
				}, {
					no: '2',
					name: '水榭校区',
					sex: '福清市水南车站旁景园公寓208',
					zc: '0591-85220810',
				}, {
					no: '2',
					name: '水榭校区',
					sex: '福清市水南车站旁景园公寓208',
					zc: '0591-85220810',
				}, {
					no: '2',
					name: '水榭校区',
					sex: '福清市水南车站旁景园公寓208',
					zc: '0591-85220810',
				}, {
					no: '2',
					name: '水榭校区',
					sex: '福清市水南车站旁景园公寓208',
					zc: '0591-85220810',
				}, ],
				dialogTableVisible: false,
				dialogFormVisible: false,
				dialogTableVisible1: false,
				dialogFormVisible1: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
			};
		},
		components: {
			top
		},
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex % 2 == 1) {
					return "warning-row";
				} else {
					return "success-row";
				}
			},
			tableHeaderColor({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (rowIndex === 0) {
					return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;";
				} else {
					return "height:100px;";
				}
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageSize = val; //动态改变
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage = val; //动态改变
			},

		},

	};
</script>

<style scoped>
	.el-table .warning-row {
		background: #f2f2f2;
	}

	.el-table .success-row {
		background: white;
	}

	.el-table td {
		padding: 7px 0 !important;
	}
</style>
