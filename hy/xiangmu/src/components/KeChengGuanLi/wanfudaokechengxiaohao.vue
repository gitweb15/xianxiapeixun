<template>
	<div>
		<top title="晚辅导课程消耗"></top>
		<div class="main" style="width:100%;">
<!-- 			<el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;' @click="dialogFormVisible1 = true">批量消耗</el-button>
			<el-button type="primary" style='margin-left: 10px;margin-top: 25px;' @click="dialogFormVisible = true">批量设置自动消耗</el-button> -->
			<el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;' @click="dialogFormVisible1 = true">批量消耗</el-button>
			<el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;' @click="dialogFormVisible = true">批量设置自动消耗Excel</el-button>
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item class="right" style="width: 10%;margin-top: -62px;">
						<el-button type="primary">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>

			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;margin-top: 10px;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="选择" width="100">
						<input type="checkbox"/>
					</el-table-column>
					<el-table-column prop="no" label="编码" width="180"></el-table-column>
					<el-table-column prop="name" label="名称" width="160"></el-table-column>
					<el-table-column prop="sex" label="校区" width="120"></el-table-column>
					<el-table-column prop="zc" label="年级" width="150"></el-table-column>
					<el-table-column prop="num" label="单价" width="120"></el-table-column>
					<el-table-column prop="check" label="学习中人数" width="120">
						<!-- <input type="checkbox" /> -->
					</el-table-column>
					<el-table-column prop="check1" label="本周已消耗课时" width="120"></el-table-column>
					<!-- <el-table-column prop="check2" label="订单总价" width="150"></el-table-column> -->
					<el-table-column prop="check3" label="操作" width="150">
						<span style="color: #0000FF;" @click="dialogFormVisible1 = true">消耗</span><span style="color: #0000FF;margin-left: 10px;" @click="dialogFormVisible = true">消耗规则</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
			</div>
			<el-dialog :visible.sync="dialogFormVisible">
				<el-form :model="form" style="text-align: center;">
					每周自动消耗课时
					<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数"></el-input-number>

				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
					<el-button @click="dialogFormVisible = false">取消</el-button>
				</div>
			</el-dialog>
			<el-dialog :visible.sync="dialogFormVisible1">
				<el-form :model="form" style="text-align: center;">
					消耗课时
					<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数"></el-input-number>
			
				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button type="primary" @click="dialogFormVisible1 = false">保存</el-button>
					<el-button @click="dialogFormVisible1 = false">取消</el-button>
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
		name: "wanfudaokechengxiaohao",
		data() {
			return {
				num: 1,
				currentPage: 1, //默认显示第一页
				pageSize: 10, //默认每页显示10条
				totalNum: 5, //总页数
				formInline: {
					user: '',
					region: '',
					content: ''
				},
				tableData: [
					{
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						check: "12",
						check1: '0',
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						check: "12",
						check1: '2',
					}, 
					{
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '0',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '2',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '0',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '2',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '0',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '2',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '0',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '初中一年级',
					num: '350',
					check: "12",
					check1: '2',
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
			
			handleChange(value) {
				console.log(value);
			},
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
