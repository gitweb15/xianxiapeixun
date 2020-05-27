<template>
	<div>
		<top title="教师账号管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="教师姓名:" class="left" style="width: 25%;">
						<el-input v-model="formInline.user" placeholder="请选择校区" style='width: 180px;'></el-input>
					</el-form-item>
					<el-form-item label="所在校区:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请输入内容" style='width: 180px;'>
							<el-option label="城南校区" value="城南校区"></el-option>
							<el-option label="水榭校区" value="水榭校区"></el-option>
							<el-option label="世贸校区" value="世贸校区"></el-option>
							<el-option label="花之南校区" value="花之南校区"></el-option>
							<el-option label="城江校区" value="城江校区"></el-option>
							<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
							<el-option label="万达校区" value="万达校区"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="手机号码:" class="left" style="width: 25%;">
						<el-input v-model="formInline.user" placeholder="请选择校区" style='width: 180px;'></el-input>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor">
					<!-- 	<el-table-column label="选择" type="selection" width="150"></el-table-column> -->
					<el-table-column prop="no" label="教师姓名" width="200"></el-table-column>
					<el-table-column prop="name" label="所在校区" width="200"></el-table-column>
					<el-table-column prop="sex" label="手机号码" width="200"></el-table-column>
					<el-table-column prop="zc" label="状态" width="210"></el-table-column>
					<el-table-column prop="num" label="重置密码" width="150">
						<template>
							<span style="color: #409EFF">重置密码</span>
						</template>
					</el-table-column>
					<!-- <el-table-column prop="ren" label="学员数" width="120"></el-table-column> -->
					<!-- <el-table-column prop="price" label="是否消费" width="120"></el-table-column> -->
					<!-- 	 -->
					<el-table-column label="操作" width="118">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small">冻结</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 15px;'></el-pagination>
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
		name: "teacher1",
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
						no: '教师一',
						name: '城南校区',
						sex: '18800987645',
						zc: '正常',
						// num: '重置密码',

					}, {
						no: '教师二',
						name: '滨江校区',
						sex: '18899765435',
						zc: '冻结中',
						// num: '重置密码',
					}, {
						no: '教师一',
						name: '城南校区',
						sex: '18800987645',
						zc: '正常',
						// num: '重置密码',

					}, {
						no: '教师二',
						name: '滨江校区',
						sex: '18899765435',
						zc: '冻结中',
						// num: '重置密码',
					}, {
						no: '教师一',
						name: '城南校区',
						sex: '18800987645',
						zc: '正常',
						// num: '重置密码',

					}, {
						no: '教师二',
						name: '滨江校区',
						sex: '18899765435',
						zc: '冻结中',
						// num: '重置密码',
					}, {
						no: '教师一',
						name: '城南校区',
						sex: '18800987645',
						zc: '正常',
						// num: '重置密码',

					}, {
						no: '教师二',
						name: '滨江校区',
						sex: '18899765435',
						zc: '冻结中',
						// num: '重置密码',
					},

					{
						no: '教师一',
						name: '城南校区',
						sex: '18800987645',
						zc: '正常',
						// num: '重置密码',

					}, {
						no: '教师二',
						name: '滨江校区',
						sex: '18899765435',
						zc: '冻结中',
						// num: '重置密码',
					},
				],
			};
		},
		components: {
			top
		},
		methods: {
			// tableRowClassName({
			// 	row,
			// 	rowIndex
			// }) {
			// 	if (rowIndex % 2 == 1) {
			// 		return "warning-row";
			// 	} else {
			// 		return "success-row";
			// 	}
			// },
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
