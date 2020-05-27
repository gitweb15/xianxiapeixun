<template>
	<div>
		<top title="机构通知"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				  <el-button type="primary" style="padding-left:10px;" @click="dialogFormVisible = true">新增机构通知</el-button>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="通知关键字:" class="left" style="width: 35%;margin-left:500px;margin-top: -30px;">
						<el-input v-model="formInline.user" placeholder="请输入内容" style='width: 280px;'></el-input>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;float: right;margin-top: -30px;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>

			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="通知内容" prop="no" width="640"></el-table-column>
					<el-table-column prop="name" label="发送时间" width="290"></el-table-column>
					<el-table-column prop="check3" label="操作" width="200">
						<span style="color: #0000FF;" @click="dialogFormVisible1 = true">查看</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 10px;'></el-pagination>
			</div>
			<el-dialog title="通知编辑" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
			    <el-form-item label="通知内容:" :label-width="formLabelWidth">
			      <textarea v-model="form.name" autocomplete="off" placeholder="请输入通知详情内容" style='height: 240px;width: 95%;padding: 10px;border: 1px solid gainsboro;color: gainsboro;'></textarea>
			    </el-form-item>
			    <el-form-item label="发送用户:" :label-width="formLabelWidth">
			      <el-input v-model="form.name" autocomplete="off" placeholder=""></el-input>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				  <el-button type="primary" @click="dialogFormVisible = false">立即发送</el-button>
			    <el-button @click="dialogFormVisible = false">重置</el-button>
			    
			  </div>
			</el-dialog>
			<el-dialog title="查看通知" :visible.sync="dialogFormVisible1">
			  <el-form :model="form">
			    <el-form-item label="通知内容:" :label-width="formLabelWidth">
			      <textarea v-model="form.name" autocomplete="off" placeholder="各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！" style='height: 240px;width: 95%;padding: 10px;border: 1px solid gainsboro;color: gainsboro;'></textarea>
			    </el-form-item>
			    <el-form-item label="发送用户:" :label-width="formLabelWidth">
			      <el-button type="info">授课教师</el-button>  <el-button type="info">业务教师</el-button>
			    </el-form-item>
				<el-form-item label="发送时间:" :label-width="formLabelWidth">
				  2019-4-14 23:01:17
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				  <el-button type="primary" @click="dialogFormVisible1 = false">确认</el-button>
			    
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
		name: "tongzhi",
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
				// dataContent:this.wfbSelectJson
				tableData: [{
					no: '各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！',
					name: '2019-4-14 22:54:10',
				}, {
					no: '各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！',
					name: '2019-4-14 22:55:13',
				}, {
					no: '各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！',
					name: '2019-4-14 22:54:10',
				}, {
					no: '各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！',
					name: '2019-4-14 22:55:13',
				}, {
					no: '各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！',
					name: '2019-4-14 22:54:10',
				}, {
					no: '各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！',
					name: '2019-4-14 22:55:13',
				}, {
					no: '各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！',
					name: '2019-4-14 22:54:10',
				}, {
					no: '各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！',
					name: '2019-4-14 22:55:13',
				}, {
					no: '各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！',
					name: '2019-4-14 22:54:10',
				}, {
					no: '各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！',
					name: '2019-4-14 22:55:13',
				}, {
					no: '各位家长请注意，本周末因为上级检查临时休息，请安排好自己小孩的学习，谢谢！',
					name: '2019-4-14 22:54:10',
				}, {
					no: '各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！',
					name: '2019-4-14 22:55:13',
				},],
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
	.dialog-footer{
		text-align: center;
	}
</style>
