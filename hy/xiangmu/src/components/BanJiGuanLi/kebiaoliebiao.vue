<template>
	<div>
		<top title="课表管理"></top>
		<div class="main" style="width:100%;">
			<el-button type="primary" style='margin: 10px;' @click="dialogFormVisible1 = true">导入Excel</el-button>
			<el-button type="primary">导出Excel</el-button>
			<a href="#" style="color: red;text-decoration: underline;padding-left: 10px;">下载Excel模板</a>
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="校区" class="left" style="width: 35%;">
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
					<el-form-item label="教室" class="left" style="width: 35%;">
						<el-select v-model="formInline.region" placeholder="请选择教室" style='width: 250px;'>
							<el-option label="教室01" value="教室01"></el-option>
							<el-option label="教室02" value="教室02"></el-option>
							<el-option label="教室03" value="教室03"></el-option>
							<el-option label="展示当前校区所有教室" value="展示当前校区所有教室"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<!-- 弹出层 -->
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
		</div>


		<el-table :data="tableData" style="width: 100%" height="500">
			<el-table-column prop="date" label="教室/节次" width="180">
			</el-table-column>
			<el-table-column label="星期一">
				<el-table-column prop="name" label="1" width="70">
				</el-table-column>
				<el-table-column prop="province" label="2" width="70">
				</el-table-column>
				<el-table-column prop="city" label="3" width="70">
				</el-table-column>
				<el-table-column prop="address" label="4" width="70">
				</el-table-column>
				<el-table-column prop="zip" label="5" width="70">
				</el-table-column>
			</el-table-column>
			<el-table-column label="星期二">
				<el-table-column prop="name" label="1" width="120">
				</el-table-column>
				<el-table-column prop="province" label="2" width="70">
				</el-table-column>
				<el-table-column prop="city" label="3" width="70">
				</el-table-column>
				<el-table-column prop="address" label="4" width="70">
				</el-table-column>
				<el-table-column prop="zip" label="5" width="70">
				</el-table-column>
			</el-table-column>
			<el-table-column label="星期三">
				<el-table-column prop="name" label="1" width="70">
				</el-table-column>
				<el-table-column prop="province" label="2" width="70">
				</el-table-column>
				<el-table-column prop="city" label="3" width="70">
				</el-table-column>
				<el-table-column prop="address" label="4" width="70">
				</el-table-column>
				<el-table-column prop="zip" label="5" width="70">
				</el-table-column>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import top from "../Top";
	import {
		mapState
	} from "vuex";
	export default {
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
					date: '滨江教室一',
					name: '',
					province: '',
					city: '',
					address: '',
					zip: ''
				}, {
					date: '滨江教室二',
					name: '',
					province: '',
					city: '',
					address: '',
					zip: ''
				}, {
					date: '百合教室一',
					name: '',
					province: '课程一教师一',
					city: '',
					address: '课程二教师二',
					zip: '课程一教师一'
				}, {
					date: '百合教室二',
					name: '',
					province: '',
					city: '课程一教师一',
					address: '',
					zip: ''
				}, {
					date: '宏路教室二',
					name: '',
					province: '',
					city: '',
					address: '课程一教师一',
					zip: ''
				}, {
					date: '宏路教室二',
					name: '',
					province: '课程一教师一',
					city: '课程二教师二',
					address: '',
					zip: '课程一教师一'
				}, {
					date: '滨江教室一',
					name: '',
					province: '',
					city: '',
					address: '',
					zip: ''
				}],
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
