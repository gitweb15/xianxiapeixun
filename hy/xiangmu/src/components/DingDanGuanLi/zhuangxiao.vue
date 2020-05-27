<template>
	<div>
		<top title="转校管理"></top>
		<router-link type="primary" style='margin: 25px;10px;background-color: #409EFF;color: white' to='/add' class="add">新增转校</router-link>
		<div class="main-tab">
			<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
				<el-table-column label="原订单编号" prop="no" width="240"></el-table-column>
				<el-table-column prop="lai" label="订单来源" width="180"></el-table-column>
				<el-table-column prop="name" label="订单日期" width="150"></el-table-column>
				<el-table-column prop="sex" label="业务教师" width="150"></el-table-column>
				<el-table-column prop="zc" label="家长手机号" width="150"></el-table-column>
				<el-table-column prop="num" label="原校区" width="150"></el-table-column>
				<el-table-column prop="num1" label="转入校区" width="150"></el-table-column>
				<el-table-column prop="status" label="审核状态" width="150"></el-table-column>
				<el-table-column prop="check3" label="查看" width="150">
					<router-link style="color: #0000FF;" to='/zhuangxiaolook' tag="span">查看</router-link>
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
		name: "zhuangxiao",
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
						no: '20190415001',
						lai: '微信小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核拒绝'
					}, {
						no: '20190415002',
						lai: '支付宝小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核中'
					}, {
						no: '20190415001',
						lai: '微信小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核拒绝'
					}, {
						no: '20190415002',
						lai: '支付宝小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核中'
					}, {
						no: '20190415003',
						lai: '业务扫码收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核通过'
					}, {
						no: '20190415004',
						lai: '业务线下收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核通过'
					},
					{
						no: '20190415001',
						lai: '微信小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核拒绝'
					}, {
						no: '20190415002',
						lai: '支付宝小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核中'
					}, {
						no: '20190415003',
						lai: '业务扫码收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核通过'
					}, {
						no: '20190415004',
						lai: '业务线下收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核通过'
					},
					{
						no: '20190415001',
						lai: '微信小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "原校区",
						num1: "新校区",
						status: '审核拒绝'
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

<style>
	.add {
		color: #FFF;
		background-color: #409EFF;
		border-color: #409EFF;
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #FFF;
		border: 1px solid #DCDFE6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		transition: .1s;
		font-weight: 500;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
		margin: 25px;
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
