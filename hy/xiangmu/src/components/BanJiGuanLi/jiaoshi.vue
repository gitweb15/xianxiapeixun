<template>
	<div>
		<top title="教室管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-button type="primary" style='margin-left: 10px;margin-bottom: 10px;' @click="dialogFormVisible1 = true">新增教室</el-button>
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
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="校区" prop="no" width="300"></el-table-column>
					<el-table-column prop="name" label="教室名称" width="300"></el-table-column>
					<el-table-column prop="sex" label="教室位置" width="290"></el-table-column>
					<el-table-column prop="check3" label="操作" width="180">
						<span tag="span" style="color: #0000FF;">删除</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
			</div>
		</div>
		
		
		<!-- 弹出层 -->
		<el-dialog title="" :visible.sync="dialogFormVisible1">
		  <el-form :model="form">
		    <el-form-item label="校区" :label-width="formLabelWidth">
				<el-select v-model="form.region" placeholder="请选择校区" style='width: 100%;'>
				<el-option label="城南校区" value="城南校区"></el-option>
				<el-option label="水榭校区" value="水榭校区"></el-option>
				<el-option label="世贸校区" value="世贸校区"></el-option>
				<el-option label="花之南校区" value="花之南校区"></el-option>
				<el-option label="城江校区" value="城江校区"></el-option>
				<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
				<el-option label="万达校区" value="万达校区"></el-option>
				</el-select>
		     
		    </el-form-item>
		    <el-form-item label="教室名称" :label-width="formLabelWidth">
		       <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
		    </el-form-item>
			<el-form-item label="教室位置" :label-width="formLabelWidth">
			   <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer" style="text-align: center;">
		    <el-button type="primary" @click="dialogFormVisible1 = false">保 存</el-button>
		    <el-button  @click="dialogFormVisible1 = false">取 消</el-button>
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
		name: "jiaoshi",
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
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					},
					{
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


					}, {
						no: '滨江校区',
						name: 'B1042',
						sex: 'B1042',


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
