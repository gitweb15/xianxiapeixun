<template>
	<div>
		<top title="权限管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="根菜单:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择根菜单" style='width: 180px;'>
							<el-option label="首页" value="首页"></el-option>
							<el-option label="课程管理" value="课程管理"></el-option>
							<el-option label="学员管理" value="学员管理"></el-option>
							<el-option label="订单管理" value="订单管理"></el-option>
							<el-option label="教师管理" value="教师管理"></el-option>
							<el-option label="统计分析" value="统计分析"></el-option>
							<el-option label="支付中心" value="支付中心"></el-option>
							<el-option label="系统管理" value="系统管理"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="父菜单:" class="left" style="width: 25%;">
						<el-select v-model="formInline.content" placeholder="请输入根菜单" style='width: 180px;'>
							<el-option label="首页" value="首页"></el-option>
							<el-option label="课程管理" value="课程管理"></el-option>
							<el-option label="学员管理" value="学员管理"></el-option>
							<el-option label="订单管理" value="订单管理"></el-option>
							<el-option label="教师管理" value="教师管理"></el-option>
							<el-option label="统计分析" value="统计分析"></el-option>
							<el-option label="支付中心" value="支付中心"></el-option>
							<el-option label="系统管理" value="系统管理"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="菜单名称:" class="left" style="width: 25%;">
						<el-input v-model="formInline.user" placeholder="请选择内容" style='width: 180px;'></el-input>
						
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<!-- <el-table-column label="选择" type="selection" width="120"></el-table-column> -->
					<el-table-column prop="no" label="序" width="180"></el-table-column>
					<el-table-column prop="name" label="菜单类型" width="200"></el-table-column>
					<el-table-column prop="sex" label="菜单名称" width="150"></el-table-column>
					<el-table-column prop="zc" label="父菜单名称" width="150"></el-table-column>
					<el-table-column prop="num" label="根菜单名称" width="150"></el-table-column>
					<el-table-column prop="check" label="家长" width="150">
						<input type="checkbox" />
					</el-table-column>
					<el-table-column prop="check1" label="业务教师" width="150"><input type="checkbox" /></el-table-column>
					<el-table-column prop="check2" label="授课教师" width="150"><input type="checkbox" /></el-table-column>
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
		name: "quanxian",
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
						no: '1',
						name: '小程序菜单',
						sex: '课程',
						zc: '',
						num: '',
						check: "",
						check1: '',
						check2: ''

					}, {
						no: '2',
						name: '小程序菜单',
						sex: '消息',
						// zc: '',
						// num: '重置密码',
					}, {
						no: '3',
						name: '小程序菜单',
						sex: '个人中心',

					}, {
						no: '4',
						name: '后台菜单',
						sex: '首页',
					}, {
						no: '5',
						name: '后台菜单',
						sex: '课程管理',
						num: '课程管理'

					}, {
						no: '6',
						name: '课程管理',
						sex: '课程消耗',
						zc: '',
						num: '课程管理',
					}, {
						no: '7',
						name: '后台菜单',
						sex: '课程消耗',
						zc: '课程管理',
						num: '课程管理'

					}, {
						no: '8',
						name: '后台菜单',
						sex: '课程消耗',
						zc: '课程管理',
						num: '课程管理'
					},
					{
						no: '9',
						name: '后台菜单',
						sex: '课程消耗',
						zc: '课程管理',
						num: '课程管理'
					},
				],
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
