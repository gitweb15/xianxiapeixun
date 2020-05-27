<template>
	<div>
		<top title="优惠券管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="用户昵称:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请输入内容" style='width: 180px;'>
							<!-- <el-option label="城南校区" value="城南校区"></el-option> -->
							<!-- <el-option label="滨江校区" value="滨江校区"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item label="使用状态" class="left" style="width: 25%;">
						<el-select v-model="formInline.content" placeholder="请选择内容" style='width: 180px;'>
							<el-option label="已使用" value="已使用"></el-option>
							<el-option label="未使用" value="未使用"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
	>
					<el-table-column label="序" prop="xu" width="150"></el-table-column>
					<el-table-column prop="no" label="用户昵称" width="180"></el-table-column>
					<el-table-column prop="name" label="优惠券金额" width="200"></el-table-column>
					<el-table-column prop="sex" label="获取途径" width="150"></el-table-column>
					<el-table-column prop="zc" label="获取时间" width="150"></el-table-column>
					<el-table-column prop="num" label="到期时间" width="150">
					</el-table-column>
					<el-table-column prop="one" label="使用状态" width="150">
					</el-table-column>
					<el-table-column label="使用订单" width="118">
						<router-link style="color: #0000FF;" to='/dingdanguanli'>20190415001</router-link>
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
		name: "youhuiquan",
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
						xu: '1',
						no: '微信昵称_AVV',
						name: '50',
						sex: '退费注册',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '未使用',

					}, {
						xu: '2',
						no: '支付宝昵称_ADE',
						name: '100',
						sex: '退费',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '已使用',
					}, {
						xu: '1',
						no: '微信昵称_AVV',
						name: '50',
						sex: '退费注册',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '未使用',

					}, {
						xu: '2',
						no: '支付宝昵称_ADE',
						name: '100',
						sex: '退费',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '已使用',
					}, {
						xu: '1',
						no: '微信昵称_AVV',
						name: '50',
						sex: '退费注册',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '未使用',

					}, {
						xu: '2',
						no: '支付宝昵称_ADE',
						name: '100',
						sex: '退费',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '已使用',
					}, {
						xu: '1',
						no: '微信昵称_AVV',
						name: '50',
						sex: '退费注册',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '未使用',

					}, {
						xu: '2',
						no: '支付宝昵称_ADE',
						name: '100',
						sex: '退费',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '已使用',
					},
					{
						xu: '1',
						no: '微信昵称_AVV',
						name: '50',
						sex: '退费注册',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '未使用',

					}, {
						xu: '2',
						no: '支付宝昵称_ADE',
						name: '100',
						sex: '退费',
						zc: '2019-4-24 13:29:12',
						num: '2019-6-24 13:29:12',
						one: '已使用',
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
