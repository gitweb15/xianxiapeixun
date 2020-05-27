<template>
	<div>
		<top title="调课管理"></top>
		<el-row>
			<router-link tag='el-button' type="primary" style='margin-left: 40px;margin-top: 20px;background: #409EFF;color: white;'
			 to='/xin'>新增调课</router-link>
		</el-row>
		<el-dialog title="" :visible.sync="dialogFormVisible">
			<top title="调课"></top>
			<el-button type="primary" style='margin-left: 40px;margin-top: 20px;' @click="dialogFormVisible = true">确认调课</el-button>
			<el-button style='margin-left: 40px;margin-top: 20px;' @click="dialogFormVisible = true">取消</el-button>
			<el-form :model="form">
				<el-form-item label="课程编码:" :label-width="formLabelWidth" style="width: 50%;margin-left: 50px;">BJKC-20190405</el-form-item>
				<el-form-item label="课程校区:" :label-width="formLabelWidth" style="width: 50%;margin-left: 50px;">城南校区</el-form-item>

				<div style="float: right;margin-top: -125px;margin-right: 20px;width: 50%;">
					<el-form-item label="课程名称:" :label-width="formLabelWidth">初中一年级班级课程</el-form-item>
					<el-form-item label="授课教师:" :label-width="formLabelWidth">王大壮</el-form-item>
				</div>

			</el-form>
			<div style="border: 1px solid gainsboro; width: 35%;height: 300px;padding: 20px;margin-left: 20px;">
				<span class="demonstration">原课程日期：</span>
				<el-date-picker v-model="value1" type="datetime" placeholder="单击选择时间">
				</el-date-picker>
				<div style="margin: 10px;">
					<p>2019-4-26 第二节</p>
					<p>2019-4-26 第六节</p>
				</div>
			</div>
			<div style="border: 1px solid gainsboro; width: 35%;height: 300px;padding: 20px;float: right;margin-top: -345px;">
				<span class="demonstration">调课日期：</span>
				<el-date-picker v-model="value1" type="datetime" placeholder="单击选择时间">

				</el-date-picker>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="调课教室" class="left" style="width: 105%;margin-top: 20px;">
						<el-select v-model="formInline.region" placeholder="请选择教室" style='width: 220px;'>
							<el-option label="教室一" value="教室一"></el-option>
							<el-option label="教室二" value="教室二"></el-option>
							<el-option label="教室三" value="教室三"></el-option>
							<el-option label="教室四" value="教室四"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div style="margin: 10px;">
					<ul style="float: left;width:300px;margin-top: -30px;" class="ulli">
						<li>第一节</li>
						<li>第二节</li>
						<li>第三节</li>
						<li>第四节</li>
						<li>第五节</li>
						<li>第六节</li>
						<li>第七节</li>
						<li>第八节</li>
					</ul>
				</div>
			</div>
		</el-dialog>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;margin-left:40px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="校区" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择校区" style='width: 180px;'>
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
				<el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">

					<el-table-column prop="no" label="校区" width="200"></el-table-column>
					<el-table-column prop="name" label="调课课程" width="270"></el-table-column>
					<el-table-column prop="sex" label="教师" width="200"></el-table-column>
					<el-table-column prop="zc" label="原上课时间" width="250"></el-table-column>
					<el-table-column prop="time" label="调整后时间" width="250"></el-table-column>
					<el-table-column label="操作" width="138">
						<!-- 	<template> -->
						<span @click="dialogFormVisible = true" style="color: black;">查看</span>
						<!-- </template> -->
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;'></el-pagination>
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
		name: "tiaoke",
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
						no: '城南校区',
						name: '语文一对一个性化课程',
						sex: '王大壮',
						zc: '2019-4-26 第二节',
						time: '2019-4-28 第三节'
					}, {
						no: '滨江校区',
						name: '英语班级课程',
						sex: '刘小牛',
						zc: '2019-4-28 第三节',
						time: '2019-4-26 第二节'
					}, {
						no: '城南校区',
						name: '语文一对一个性化课程',
						sex: '王大壮',
						zc: '2019-4-26 第二节',
						time: '2019-4-28 第三节'
					}, {
						no: '滨江校区',
						name: '英语班级课程',
						sex: '刘小牛',
						zc: '2019-4-28 第三节',
						time: '2019-4-26 第二节'
					}, {
						no: '城南校区',
						name: '语文一对一个性化课程',
						sex: '王大壮',
						zc: '2019-4-26 第二节',
						time: '2019-4-28 第三节'
					}, {
						no: '滨江校区',
						name: '英语班级课程',
						sex: '刘小牛',
						zc: '2019-4-28 第三节',
						time: '2019-4-26 第二节'
					}, {
						no: '城南校区',
						name: '语文一对一个性化课程',
						sex: '王大壮',
						zc: '2019-4-26 第二节',
						time: '2019-4-28 第三节'
					}, {
						no: '滨江校区',
						name: '英语班级课程',
						sex: '刘小牛',
						zc: '2019-4-28 第三节',
						time: '2019-4-26 第二节'
					},
					{
						no: '城南校区',
						name: '语文一对一个性化课程',
						sex: '王大壮',
						zc: '2019-4-26 第二节',
						time: '2019-4-28 第三节'
					}, {
						no: '滨江校区',
						name: '英语班级课程',
						sex: '刘小牛',
						zc: '2019-4-28 第三节',
						time: '2019-4-26 第二节'
					},
				],
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

		},
	};
</script>

<style scoped>
	.ulli li {
		line-height: 30px;
		width: 100px;
		border: 1px solid gainsboro;
		margin-left: 0px;
		margin-top: 10px;
		text-align: center;
		float: left;
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
