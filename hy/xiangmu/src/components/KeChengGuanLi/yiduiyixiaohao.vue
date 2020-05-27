<template>
	<div>
		<top title="一对一课程消耗"></top>
		<div style="margin: 20px;">
			<el-button type="primary" @click="dialogFormVisible1 = true" style='margin-left: 10px;margin-bottom: 15px;' >批量消耗</el-button>
						<!-- <el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;' @click="dialogFormVisible1 = true">批量消耗</el-button> -->	
		</div>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="校区" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择校区" style='width: 180px;'>
							<el-option label="城南校区" value="城南校区"></el-option>
							<el-option label="滨江校区" value="滨江校区"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年级" class="left" style="width: 25%;">
						<el-select v-model="formInline.content" placeholder="请输入年级" style='width: 180px;'>
							<el-option label="小学五年级" value="小学五年级"></el-option>
							<el-option label="小学六年级" value="小学六年级"></el-option>
							<el-option label="初中一年级" value="初中一年级"></el-option>
							<el-option label="初中二年级" value="初中二年级"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="状态" class="left" style="width: 25%;">
						<el-select v-model="formInline.content" placeholder="请输入状态" style='width: 180px;'>
							<el-option label="已结束" value="已结束"></el-option>
							<el-option label="进行中" value="进行中"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="选择" width="100">
						<input type="checkbox"/>
					</el-table-column>
					<el-table-column prop="no" label="编码" width="180"></el-table-column>
					<el-table-column prop="name" label="名称" width="200"></el-table-column>
					<el-table-column prop="sex" label="校区" width="150"></el-table-column>
					<el-table-column prop="zc" label="年级" width="150"></el-table-column>
					<el-table-column prop="num" label="单价" width="150">
					</el-table-column>
					<el-table-column prop="one" label="学习中人数" width="150">
					</el-table-column>
					<el-table-column prop="two" label="本周已消耗课时" width="150">
					</el-table-column>
					<el-table-column label="操作" width="118">
						<span style="color: #0000FF;" @click="dialogFormVisible = true">消耗</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;'></el-pagination>
			</div>
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
			<el-dialog :visible.sync="dialogFormVisible">
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
		name: "yiduiyixiaohao",
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
						no: 'BKJC-20190405',
						name: '英语一对一教育',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '0'
					}, {
						no: 'BJKC-20190405',
						name: '数学一对一教育',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '2'
					}, {
						no: 'BKJC-20190405',
						name: '英语一对一教育',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '0'
					}, {
						no: 'BJKC-20190405',
						name: '数学一对一教育',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '2'
					}, {
						no: 'BKJC-20190405',
						name: '英语一对一教育',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '0'
					}, {
						no: 'BJKC-20190405',
						name: '数学一对一教育',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '2'
					}, {
						no: 'BKJC-20190405',
						name: '英语一对一教育',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '0'
					}, {
						no: 'BJKC-20190405',
						name: '数学一对一教育',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '2'
					},
					{
						no: 'BKJC-20190405',
						name: '英语一对一教育',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '0'
					}, {
						no: 'BJKC-20190405',
						name: '数学一对一教育',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						one: '12',
						two: '2'
					},
				],
				dialogTableVisible1: false,
				dialogFormVisible1: false,
				num: 1,
				dialogTableVisible: false,
				dialogFormVisible: false,
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
			onSubmit() {
				// for
				console.log(this.dataContent)
			}
		},
		computed: {
			...mapState(["wfbSelectJson"])
		},
		created() {
			this.totalNum = this.wfbSelectJson.length;
		}
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
