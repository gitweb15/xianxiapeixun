<template>
	<div>
		<top title="家长账号管理"></top>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="用户来源:" class="left" style="width: 22%;">
						<el-select v-model="formInline.region" placeholder="请选择内容" style='width: 140px;'>
							<el-option label="微信小程序" value="微信小程序"></el-option>
							<el-option label="支付宝小程序" value="支付宝小程序"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否注册:" class="left" style="width: 22%;">
						<el-select v-model="formInline.content" placeholder="请选择内容" style='width: 140px;'>
							<el-option label="是" value="是"></el-option>
							<el-option label="否" value="否"></el-option>
						</el-select>

					</el-form-item>
					<el-form-item label="是否消费:" class="left" style="width: 22%;">
						<el-select v-model="formInline.content" placeholder="请选择内容" style='width: 140px;'>
							<el-option label="是" value="是"></el-option>
							<el-option label="否" value="否"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="手机号码:" class="left" style="width: 25%;">
						<el-input v-model="formInline.user" placeholder="请选择内容" style='width: 140px;'></el-input>
					</el-form-item>
					<el-form-item class="right" style="margin-top: -62px;float: right;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<el-table :data="tableData" style="width: 100%;height: 100%;margin-top: 30px;" :header-cell-style="tableHeaderColor"
			 :row-class-name="tableRowClassName">
				<el-table-column prop="no" label="用户来源" width="150%">
				</el-table-column>
				<el-table-column prop="name" label="用户昵称" show-overflow-tooltip width="200px">
				</el-table-column>
				<el-table-column prop="sex" label="性别" show-overflow-tooltip width="120px">
				</el-table-column>
				<el-table-column prop="zc" label="是否注册" show-overflow-tooltip width="120px">
				</el-table-column>
				<el-table-column prop="number" label="手机号码" show-overflow-tooltip width="150px">
				</el-table-column>
				<el-table-column prop="num" label="学员数" show-overflow-tooltip width="150px">
				</el-table-column>
				<el-table-column prop="xf" label="是否消费" show-overflow-tooltip width="120px">
				</el-table-column>
				<el-table-column prop="caozuo1" label="查看" show-overflow-tooltip width="100">
					<span style="color: #0000FF;" @click="dialogFormVisible = true">查看</span>
				</el-table-column>
			</el-table>
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
		</div>
		<el-dialog title="" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="家长详情" :label-width="formLabelWidth" style='font-weight: bold;'></el-form-item>

				<el-form-item label="用户来源:" :label-width="formLabelWidth">微信小程序</el-form-item>
				<el-form-item label="性别:" :label-width="formLabelWidth">男</el-form-item>

				<div style="float: right;margin-top: -125px;">
					<el-form-item label="用户昵称:" :label-width="formLabelWidth">微信昵称_ABB</el-form-item>
					<el-form-item label="获取时间:" :label-width="formLabelWidth">2019-4-14 19:43:45</el-form-item>
				</div>
				<el-form-item label="是否注册:" :label-width="formLabelWidth">是</el-form-item>
				<el-form-item label="注册时间:" :label-width="formLabelWidth">2019-4-14 19:43:45</el-form-item>
				<div style="float: right;margin-top: -125px;margin-right: 36px;">
					<el-form-item label="手机号码:" :label-width="formLabelWidth">18897865223</el-form-item>
				</div>
				<el-form-item label="学员数量:" :label-width="formLabelWidth">2</el-form-item>
				<div style="float: right;margin-top: -125px;margin-right: 30px;">
					<el-form-item label="学员姓名:" :label-width="formLabelWidth">学员一、学员二</el-form-item>
				</div>
				<el-form-item label="是否消费:" :label-width="formLabelWidth">是</el-form-item>
				<el-form-item label="消费金额:" :label-width="formLabelWidth">1500.00</el-form-item>
				<div style="float: right;margin-top: -125px;margin-right: 120px;">
					<el-form-item label="消费次数:" :label-width="formLabelWidth">2</el-form-item>
				</div>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false" style='text-align: center;background: #0000FF;color: white;width: 40%;margin-right: 180px;'>关闭</el-button>
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
		name: "jiazhang",
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
				tableData1: {},
				tableData: [{
						no: '微信小程序',
						name: '微信昵称_ABB',
						sex: '男',
						zc: '是',
						number: '1889876542',
						num: '2',
						xf: '是',

					}, {
						no: '支付宝小程序',
						name: '支付宝昵称',
						sex: '女',
						zc: '否',
						number: '',
						num: '',
						xf: '否',

					}, {
						no: '微信小程序',
						name: '微信昵称_ABB',
						sex: '男',
						zc: '是',
						number: '1889876542',
						num: '2',
						xf: '是',

					}, {
						no: '支付宝小程序',
						name: '支付宝昵称',
						sex: '女',
						zc: '否',
						number: '',
						num: '',
						xf: '否',

					}, {
						no: '微信小程序',
						name: '微信昵称_ABB',
						sex: '男',
						zc: '是',
						number: '1889876542',
						num: '2',
						xf: '是',

					}, {
						no: '支付宝小程序',
						name: '支付宝昵称',
						sex: '女',
						zc: '否',
						number: '',
						num: '',
						xf: '否',

					},
					{
						no: '微信小程序',
						name: '微信昵称_ABB',
						sex: '男',
						zc: '是',
						number: '1889876542',
						num: '2',
						xf: '是',

					}, {
						no: '支付宝小程序',
						name: '支付宝昵称',
						sex: '女',
						zc: '否',
						number: '',
						num: '',
						xf: '否',

					},
				],
				dialogTableVisible: false,
				dialogFormVisible: false,
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
				formLabelWidth: '120px'
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
