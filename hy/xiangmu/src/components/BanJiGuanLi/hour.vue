<template>
	<div>
		<top title="课时管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-button type="primary" style='margin-left: 10px;margin-bottom: 10px;' @click="dialogFormVisible1 = true">新增课时</el-button>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="节次" prop="no" width="300"></el-table-column>
					<el-table-column prop="name" label="开始时间" width="300"></el-table-column>
					<el-table-column prop="sex" label="结束时间" width="290"></el-table-column>
					<el-table-column prop="check3" label="操作" width="180">
						<span tag="span" style="color: #0000FF;">删除</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 30px;'></el-pagination>
			</div>
		</div>
		
		
		<!-- 弹出层 -->
		<el-dialog title="" :visible.sync="dialogFormVisible1">
			<el-form :model="form">
				<el-form-item label="教室名称" :label-width="formLabelWidth">
						<el-time-picker is-range v-model="value1" start-placeholder="10:00:00" range-separator="~" end-placeholder="13:00:00">
						</el-time-picker>						
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer" style="text-align: center;">
				<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				<el-button @click="dialogFormVisible = false">取 消</el-button>
			</div>
		</el-dialog>
	</div>
</template>



<script>
	import top from "../Top";
	import {
		mapState
	} from "vuex";
	export default {
		name: "hour",
		data() {
			return {
				// value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				// value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				currentPage: 1, //默认显示第一页
				pageSize: 10, //默认每页显示10条
				totalNum: 5, //总页数
				formInline: {
					user: '',
					region: '',
					content: ''
				},
				// dataContent:this.wfbSelectJson
				tableData: [{
						no: '1',
						name: '08:05',
						sex: '08:50',


					}, {
						no: '2',
						name: '09:05',
						sex: '09:50',


					}, {
						no: '1',
						name: '08:05',
						sex: '08:50',


					}, {
						no: '2',
						name: '09:05',
						sex: '09:50',


					}, {
						no: '1',
						name: '08:05',
						sex: '08:50',


					}, {
						no: '2',
						name: '09:05',
						sex: '09:50',


					}, {
						no: '1',
						name: '08:05',
						sex: '08:50',


					}, {
						no: '2',
						name: '09:05',
						sex: '09:50',
					},
					{
						no: '1',
						name: '08:05',
						sex: '08:50',
					}, {
						no: '2',
						name: '09:05',
						sex: '09:50',
					},
				],
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
