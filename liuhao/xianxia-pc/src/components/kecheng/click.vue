<template>
	<div>
		<top title="试学课程管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="校区:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择校区" style='width: 180px;'>
							<el-option label="城南校区" value="城南校区"></el-option>
							<el-option label="水榭校区" value="水榭校区"></el-option>
							<el-option label="世贸校区" value="世贸校区"></el-option>
							<el-option label="花之南校区" value="花之南校区"></el-option>
							<el-option label="滨江校区" value="滨江校区"></el-option>
							<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
							<el-option label="万达校区" value="万达校区"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="课程名称" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请输入内容" style='width: 180px;'>
							<!-- <el-option label="小学五年级" value="小学五年级"></el-option> -->
							<!-- <el-option label="小学六年级" value="小学六年级"></el-option> -->
							<!-- <el-option label="初中一年级" value="初中一年级"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item label="是否活动" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择内容" style='width: 180px;'>
							<el-option label="是" value="是"></el-option>
							<el-option label="否" value="否"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="dialogFormVisible1 = true">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>

			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;margin-top: 30px;" :header-cell-style="tableHeaderColor"
				 :row-class-name="tableRowClassName">
					<el-table-column type="selection" width="120">
					</el-table-column>
					<el-table-column prop="no" label="编码" width="180"></el-table-column>
					<el-table-column prop="name" label="名称" width="160"></el-table-column>
					<el-table-column prop="sex" label="校区" width="120"></el-table-column>
					<el-table-column prop="zc" label="年级" width="150"></el-table-column>
					<el-table-column prop="num" label="单价" width="120"></el-table-column>
					<el-table-column prop="check" label="是否参加活动" width="120">
						<!-- <input type="checkbox" /> -->
					</el-table-column>
					<el-table-column prop="check1" label="试学价格" width="120"></el-table-column>
					<el-table-column prop="check2" label="试学时间" width="150"></el-table-column>
					<el-table-column prop="check3" label="操作" width="150">
						<span style="color: #0000FF;" @click="dialogFormVisible1 = true">设置试学规则</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
			</div>
			<el-dialog :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="课程编码" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="课程名称" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="年级" :label-width="formLabelWidth" style="margin-left: -40px;">
						<el-select v-model="form.region" placeholder="请选择年级" style="width: 200px;">
							<el-option label="小学五年级" value="shanghai"></el-option>
							<el-option label="小学六年级" value="beijing"></el-option>
							<el-option label="初中一年级" value="shanghai"></el-option>
							<el-option label="初中二年级" value="beijing"></el-option>
							<el-option label="初中三年级" value="shanghai"></el-option>
							<el-option label="高中一年级" value="beijing"></el-option>
							<el-option label="高中二年级" value="shanghai"></el-option>
							<el-option label="高中三年级" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="价格" :label-width="formLabelWidth" style="margin-left: -40px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;margin-right: 340px;"></el-input>
					</el-form-item>
					<el-form-item label="课时" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="校区" :label-width="formLabelWidth" style="margin-left: -40px;">
						<span style="margin-right: 130px;">城南校区</span>
						<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
					</el-form-item>
					<el-form-item label="授课教师" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="立即开课" :label-width="formLabelWidth" style="margin-left: -40px;">
						<input type="radio" style='margin-right: 10px;' checked="checked">是</el-radio>
						<span style="margin-left: 30px;"><input type="radio" style='margin-right: 10px;'>否</el-radio></span>
						<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
					</el-form-item>
					<el-form-item label="课程描述" :label-width="formLabelWidth" style="width: 660px;margin-left: -40px;">
						<el-input type="textarea" :rows="5" :cols="44" v-model="form.desc" placeholder="请输入详情描述"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
				</div>
			</el-dialog>
			<el-dialog :visible.sync="dialogFormVisible1" title="设置试学规则">
				<el-form :model="form" style="text-align: center;">
					<el-form-item label="课程原价:" :label-width="formLabelWidth">
						<span style="position: absolute;left: 30px;">1500</span>
					</el-form-item>
					<el-form-item label="课程原课时:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;margin-right: 5px;width: 50%;'>
						<span style="position: absolute;left: 30px;">15课时</span>
					</el-form-item>
					<el-form-item label="试学价格:" :label-width="formLabelWidth">
						<el-input v-model="form.region" placeholder="请输入试学价格" style='width: 30%;position: absolute;left: 5px;' >
							
						</el-input>
						
						<span style="color: red;position: absolute;left:20px;top: 50px;">注意:设置价格则代表参加试学活动</span>
					</el-form-item>
					<el-form-item label="试学课时:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;margin-right: -55px;width: 60%;'>
						<el-input v-model="form.region" placeholder="请输入试学课时" style='width: 60%;position: absolute;left: 5px;' >
							
						</el-input>

					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible1 = false">取消</el-button>
					<el-button type="primary" @click="dialogFormVisible1 = false">保存</el-button>

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
		name: "click",
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

				tableData: [{
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						check: "是",
						check1: '300',
						check2:'3课时'
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						check: "否",
						check1: '',
					},
					{
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						check: "是",
						check1: '300',
						check2:'3课时'
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						check: "否",
						check1: '',
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						check: "是",
						check1: '300',
						check2:'3课时'
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						check: "否",
						check1: '',
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						check: "是",
						check1: '300',
						check2:'3课时'
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						check: "否",
						check1: '',
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '城南校区',
						zc: '初中一年级',
						num: '350',
						check: "是",
						check1: '300',
						check2:'3课时'
					}, {
						no: 'BJKC-20190405',
						name: '初中一年级班级课程',
						sex: '滨江校区',
						zc: '初中一年级',
						num: '350',
						check: "否",
						check1: '',
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
