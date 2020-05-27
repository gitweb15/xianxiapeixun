<template>
	<div>
		<top title="通知管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="通知名称:" class="left" style="width: 25%;">
						<el-input v-model="formInline.user" placeholder="请输入内容" style='width: 180px;'></el-input>
					</el-form-item>
					<el-form-item label="发送用户:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择发送用户" style='width: 180px;'>
							<el-option label="家长" value="家长"></el-option>
							<el-option label="授课教师" value="授课教师"></el-option>
							<el-option label="业务教师" value="业务教师"></el-option>
						</el-select>

					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>

			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="通知名称" prop="no" width="200"></el-table-column>
					<el-table-column prop="name" label="通知内容" width="690"></el-table-column>
					<el-table-column prop="sex" label="发送用户" width="200"></el-table-column>
					<el-table-column prop="check3" label="操作" width="200">
						<span style="color: #0000FF;" @click="dialogFormVisible = true">编辑</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 10px;'></el-pagination>
			</div>
			<el-dialog title="通知编辑" :visible.sync="dialogFormVisible" style='width: 100%;'>
				<el-form :model="form">
					<el-form-item label="通知标题:" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" placeholder='课程结束提醒' style='width: 40%;'></el-input>
					</el-form-item>
					<el-form-item label="发送用户:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='家长' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="通知内容:" :label-width="formLabelWidth" style='color: #EEEEEE;'>
						<textarea v-model="form.name" autocomplete="off" placeholder='亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认！'
						 style='width: 100%;height: 100px;margin-top:-20px;padding-top: 20px;padding-left: 10px;color: #EEEEEE;'></textarea>
					</el-form-item>

				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
					<el-button @click="dialogFormVisible = false">重 置</el-button>
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
					no: '报名成功通知',
					name: '亲爱的[UserName],您已为[StuName]成功报名了[CourseName],请按时上课哦~',
					sex: '家长',
				}, {
					no: '考勤未到通知',
					name: '亲爱的[UserName],您已为[StuName]在[CourseDate]应参加的[CourseName]考勤未到,请确认！',
					sex: '家长',
				}, {
					no: '课程结束提醒',
					name: '亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认！',
					sex: '家长',

				}, {
					no: '报名成功通知',
					name: '亲爱的[UserName],您已为[StuName]成功报名了[CourseName],请按时上课哦~',
					sex: '家长',
				}, {
					no: '考勤未到通知',
					name: '亲爱的[UserName],您已为[StuName]在[CourseDate]应参加的[CourseName]考勤未到,请确认！',
					sex: '家长',
				}, {
					no: '课程结束提醒',
					name: '亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认！',
					sex: '家长',

				}, {
					no: '课程准备提醒',
					name: '亲爱的[TeacherName],您已为[CourseName]课程即将上课,请做好上课准备！',
					sex: '授课教师',
				}, {
					no: '报名成功通知',
					name: '亲爱的[UserName],您已为[StuName]成功报名了[CourseName],请按时上课哦~',
					sex: '家长',
				}, {
					no: '考勤未到通知',
					name: '亲爱的[UserName],您已为[StuName]在[CourseDate]应参加的[CourseName]考勤未到,请确认！',
					sex: '家长',
				}, {
					no: '课程结束提醒',
					name: '亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认！',
					sex: '家长',

				}, {
					no: '课程准备提醒',
					name: '亲爱的[TeacherName],您已为[CourseName]课程即将上课,请做好上课准备！',
					sex: '授课教师',
				}, ],
				dialogTableVisible: false,
				dialogFormVisible: false,
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
