<template>
	<div>
		<top title="退费管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="家长手机号:" class="left" style="width: 35%;">
						<el-input v-model="formInline.user" style='width: 180px;' placeholder="请输入内容"></el-input>
					</el-form-item>
					<el-form-item label="退费状态:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择内容" style='width: 180px;'>
							<el-option label="城南校区" value="城南校区"></el-option>
							<el-option label="滨江校区" value="滨江校区"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="原订单编号" prop="no" width="240"></el-table-column>
					<el-table-column prop="lai" label="订单来源" width="180"></el-table-column>
					<el-table-column prop="name" label="订单日期" width="150"></el-table-column>
					<el-table-column prop="sex" label="业务教师" width="150"></el-table-column>
					<el-table-column prop="zc" label="家长手机号" width="150"></el-table-column>
					<el-table-column prop="num" label="退费状态" width="150"></el-table-column>

					<el-table-column prop="check3" label="退费" width="150">
						<router-link tag='span' style="color: ##0000FF;" @click="dialogFormVisible = true" to='/tuilook'>查看</router-link>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;'></el-pagination>
			</div>
			<el-dialog :visible.sync="dialogFormVisible">
				<el-form :model="form" title='订单详情'>
					<el-form-item label="订单详情" :label-width="formLabelWidth" style="width:50%;margin-left: 20px; font-weight: bold;">
					</el-form-item>
					<el-form-item label="课程编码" :label-width="formLabelWidth" style="width:50%;margin-left: 40px;">
						<span>20190415001</span>
					</el-form-item>
					<el-form-item label="订单来源" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;">
						<span>微信小程序</span>
					</el-form-item>
					<el-form-item label="订单时间" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span>20190414</span>
					</el-form-item>
					<el-form-item label="业务教师" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;">
						<span>无</span>
					</el-form-item>
			
			
					<el-form-item label="课程名称" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span>英语个性化一对一教学</span>
					</el-form-item>
					<el-form-item label="课程校区" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;">
						<span>城南校区</span>
					</el-form-item>
					<el-form-item label="课程教师" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span style="margin-right: 130px;">授课教师一</span>
						<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
					</el-form-item>
					
					
					<el-form-item label="家长ID" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span>耐寒教育</span>
					</el-form-item>
					<el-form-item label="家长手机号" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;">
						<span>18809122232</span>
					</el-form-item>
					<el-form-item label="学员姓名" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span style="margin-right: 10px;">学员一,学员二</span>
						<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
					</el-form-item>
					<el-form-item label="课程单价" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span>100</span>
					</el-form-item>
					<el-form-item label="剩余课时" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;">
						<span>12</span>
					</el-form-item>
					<el-form-item label="剩余总价" :label-width="formLabelWidth" style="margin-left: 40px;">
						<span style="margin-right: 10px;">1200</span>
					</el-form-item>
					<el-form-item label="退费方式" :label-width="formLabelWidth" style="margin-left: 40px;">
						<select>
							<option value="请选择退费方式">请选择退费方式</option>
							<option value="请选择退费方式">请选择退费方式</option>
						</select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
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
		name: "tuifei",
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
						num: "未退费",
					}, {
						no: '20190415002',
						lai: '支付宝小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "已退费",
					}, {
						no: '20190415003',
						lai: '业务扫码收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "未退费",
					}, {
						no: '20190415004',
						lai: '业务线下收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "已退费",
					},
					{
						no: '20190415001',
						lai: '微信小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "未退费",
					}, {
						no: '20190415002',
						lai: '支付宝小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "已退费",
					}, {
						no: '20190415003',
						lai: '业务扫码收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "未退费",
					}, {
						no: '20190415004',
						lai: '业务线下收款',
						name: '2019-4-15',
						sex: '业务教师',
						zc: '家长手机号',
						num: "已退费",
					},
					{
						no: '20190415001',
						lai: '微信小程序',
						name: '2019-4-15',
						sex: '',
						zc: '家长手机号',
						num: "未退费",
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

<style>
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
