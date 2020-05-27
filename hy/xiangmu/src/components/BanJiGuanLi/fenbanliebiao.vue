<template>
	<div>
		<top title="分班列表"></top>
		<div class="main" style="width:100%;">
			<el-button type="primary" style='margin: 10px;' @click="dialogFormVisible1 = true">新增分班</el-button>
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="校区" class="left" style="width: 55%;">
						<el-select v-model="formInline.region" placeholder="请选择校区" style='width: 250px;'>
							<el-option label="城南校区" value="城南校区"></el-option>
							<el-option label="水榭校区" value="水榭校区"></el-option>
							<el-option label="世贸校区" value="世贸校区"></el-option>
							<el-option label="花之南校区" value="花之南校区"></el-option>
							<el-option label="城江校区" value="城江校区"></el-option>
							<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
							<el-option label="万达校区" value="万达校区"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>


			<el-dialog title=" " :visible.sync="dialogFormVisible1" style='width: 100%;'>
				<span style="margin-left: 52px;">课程封面</span>
				<el-upload class="upload-demo" style='margin-left: 120px;margin-top: -30px;' drag action="https://jsonplaceholder.typicode.com/posts/"
				 multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text" style="margin-left: 68px;margin-top: -50px;width: 120px;"><em>上传</em></div>
					<div class="el-upload__tip" slot="tip">支持文件格式：jpg、jpeg,单次上传文件限制大小2MB</div>
				</el-upload>

				<el-form :model="form" style='margin-top: 20px;'>
					<el-form-item label="课程编码" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请输入内容">
							<!-- <el-option label="小程序菜单" value="shanghai"></el-option> -->
							<!-- <el-option label="后台菜单" value="beijing"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item label="课程名称:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="年级" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择年级">
							<el-option label="小学五年级" value="小学五年级"></el-option>
							<el-option label="小学六年级" value="小学六年级"></el-option>
							<el-option label="初中一年级" value="初中一年级"></el-option>
							<el-option label="初中二年级" value="初中二年级"></el-option>
							<el-option label="初中三年级" value="初中三年级"></el-option>
							<el-option label="高中一年级" value="高中一年级"></el-option>
							<el-option label="高中二年级" value="高中二年级"></el-option>
							<el-option label="高中三年级" value="高中三年级"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="价格" :label-width="formLabelWidth" style='width: 340px;float: left;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="课时" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-select v-model="form.region" placeholder="请输入内容">
						</el-select>
					</el-form-item>
					<el-form-item label="立即开课" :label-width="formLabelWidth">
						<div style="position:absolute;top: 63px;left: 20px;">
							<input type="radio" checked="checked" />是
							<input type="radio" style="margin-left: 20px;" />否
						</div>
					</el-form-item>
					<div class="main-tab">
						<span style="margin-left: 50px;">开课校区</span>
						<el-button type="primary" style='float: right;width: 80px;height: 20px;padding-bottom: 20px;margin-bottom: 10px;margin-right: 10px;'>添加</el-button>
						<el-table :data="tableData1" style="width: 100%;text-align: center;margin-left: 20px;" :header-cell-style="tableHeaderColor"
						 :row-class-name="tableRowClassName">
						  
							<el-table-column label="校区" prop="x" width="125"></el-table-column>
							<el-table-column prop="j" label="教师" width="135"></el-table-column>
							<el-table-column prop="d" label="地区价格" width="155"></el-table-column>
							<el-table-column prop="c" label="操作" width="150"><i class="el-icon-edit" style="position: absolute;right: 200px;"></i>
								<span style="color: #0000FF;" @click="dialogFormVisible = true">修改</span>
								<span style="color: red;margin-left: 20px;" @click="dialogFormVisible = true">移出</span>
							</el-table-column>
						</el-table>
					</div>

					<el-form-item label="课程简介" :label-width="formLabelWidth" style='width: 100%;margin-top: 20px;'>
						<textarea placeholder="请输入详细描述" style='width: 94%;height: 100px;padding: 10px;border: 1px solid gainsboro;color: white;'></textarea>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer" style="float:right;margin-top: -40px;">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>

			<el-dialog title=" " :visible.sync="dialogFormVisible" style='width: 100%;'>
				<el-form :model="form">
					<el-form-item label="课程编码" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请输入内容">
							<!-- <el-option label="小程序菜单" value="shanghai"></el-option> -->
							<!-- <el-option label="后台菜单" value="beijing"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item label="课程名称:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="年级" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择年级">
							<el-option label="小学五年级" value="小学五年级"></el-option>
							<el-option label="小学六年级" value="小学六年级"></el-option>
							<el-option label="初中一年级" value="初中一年级"></el-option>
							<el-option label="初中二年级" value="初中二年级"></el-option>
							<el-option label="初中三年级" value="初中三年级"></el-option>
							<el-option label="高中一年级" value="高中一年级"></el-option>
							<el-option label="高中二年级" value="高中二年级"></el-option>
							<el-option label="高中三年级" value="高中三年级"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="价格" :label-width="formLabelWidth" style='width: 340px;float: left;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="课时" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-select v-model="form.region" placeholder="请输入内容">
							<!-- <el-option label="根菜单一" value="shanghai"></el-option> -->
							<!-- <el-option label="根菜单二" value="beijing"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item label="校区" :label-width="formLabelWidth">
						<span style="position:absolute;top: 63px;left: 20px;">城南校区</span>
						<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style='width: 280px;'>城南校区</el-input> -->
					</el-form-item>
					<el-form-item label="授课教师" :label-width="formLabelWidth" style='float: right;margin-top: -60px;width: 340px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder="" style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="立即开课" :label-width="formLabelWidth">
						<input type="radio" checked="checked" />是
						<input type="radio" style="margin-left: 20px;" />否
					</el-form-item>
					<el-form-item label="课程描述" :label-width="formLabelWidth" style='width: 100%;'>
						<textarea placeholder="请输入详细描述" style='width: 94%;height: 100px;padding: 10px;border: 1px solid gainsboro;color: white;'></textarea>
						<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入详细描述" style='width: 52%;height: 40%;padding: 50px;'></el-input> -->
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button @click="dialogFormVisible = false">保 存</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">重 置</el-button>
				</div>
			</el-dialog>

			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;text-align: center;" :header-cell-style="tableHeaderColor"
				 :row-class-name="tableRowClassName">
					<el-table-column label="课程编码" prop="no" width="190"></el-table-column>
					<el-table-column prop="name" label="课程名称" width="200"></el-table-column>
					<el-table-column prop="address" label="班级编码" width="200"></el-table-column>
					<el-table-column prop="ren" label="班级名称" width="200"></el-table-column>
					<el-table-column prop="num" label="授课教师" width="150"></el-table-column>
					<el-table-column prop="num1" label="学员数量" width="150"></el-table-column>
					<el-table-column prop="check3" label="操作" width="150">
						<span style="color: #0000FF;" @click="dialogFormVisible = true">管理</span>
						<span style="color: red;margin-left: 20px;" @click="dialogFormVisible = true">移除</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import top from "../Top";
	import {
		mapState
	} from "vuex";
	export default {
		name: "fenbanliebiao",
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
				tableData1: [{
					x: '城南校区',
					j: '教师一、教师二',
					d: '1400',
				}, {
					x: '滨江校区',
					j: '教师三',
					d: '',
				}, ],
				// dataContent:this.wfbSelectJson
				tableData: [{
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					address: 'BJKC-20190405002',
					ren: '初中一年级一班',
					num: '授课教师',
					num1: '20',
					content: ''
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
	.el-upload-dragger .el-icon-upload {
		margin: 5px 0 16px;
	}

	.el-upload-dragger {
		width: 150px;
		height: 65px;
	}

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
