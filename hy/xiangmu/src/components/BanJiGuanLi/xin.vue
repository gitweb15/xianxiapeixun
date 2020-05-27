<template>
	<div>
		<top title="选择调课课程"></top>
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
					<el-form-item label="年级" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择年级" style='width: 180px;'>
							<el-option label="小学五年级" value="小学五年级"></el-option>
							<el-option label="小学六年级" value="小学六年级"></el-option>
							<el-option label="初中一年级" value="初中一年级"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="状态" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择状态" style='width: 180px;'>
							<el-option label="进行中" value="进行中"></el-option>
							<el-option label="已完成" value="已完成"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
			
					<el-table-column prop="no" label="课程编码" width="300"></el-table-column>
					<el-table-column prop="name" label="课程名称" width="300"></el-table-column>
					<el-table-column prop="sex" label="校区" width="300"></el-table-column>
					<el-table-column prop="zc" label="授课教师" width="300"></el-table-column>
					<el-table-column prop="check3" label="操作" width="370">
					<router-link style="color: #0000FF;margin-left: 10px;" to='/tk' tag='span'>调课</router-link>
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
		name: "course",
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
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '王大壮',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '刘小牛',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '王大壮',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '刘小牛',
				},{
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '王大壮',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '刘小牛',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '城南校区',
					zc: '王大壮',
				}, {
					no: 'BJKC-20190405',
					name: '初中一年级班级课程',
					sex: '滨江校区',
					zc: '刘小牛',
				}, ],
				// dialogTableVisible: false,
				// dialogFormVisible: false,
				// dialogTableVisible1: false,
				// dialogFormVisible1: false,
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
