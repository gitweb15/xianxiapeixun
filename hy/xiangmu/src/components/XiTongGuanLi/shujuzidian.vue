<template>
	<div>
		<top title="数据字典"></top>
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
					<el-form-item label="父菜单" class="left" style="width: 25%;">
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
					<el-form-item label="菜单名称" class="left" style="width: 25%;">
						<el-input v-model="formInline.content" placeholder="请输入内容" style='width: 190px;'>
						</el-input>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<!-- <el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;'>新增菜单</el-button> -->
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="序" prop="no" width="150"></el-table-column>
					<el-table-column prop="lai" label="菜单类型" width="150"></el-table-column>
					<el-table-column prop="name" label="菜单名称" width="130"></el-table-column>
					<el-table-column prop="sex" label="父菜单名称" width="120"></el-table-column>
					<el-table-column prop="zc" label="根菜单名称" width="150"></el-table-column>
					<el-table-column prop="num" label="地址" width="150"></el-table-column>
					<el-table-column prop="check" label="排序序号" width="150">
						<!-- <input type="checkbox" /> -->
					</el-table-column>
					<el-table-column prop="check1" label="是否激活" width="150"></el-table-column>
					<!-- <el-table-column prop="check2" label="订单总价" width="150"></el-table-column> -->
					<el-table-column prop="check3" label="操作" width="150">
						<span style="color: #0000FF;" @click="dialogFormVisible = true">修改</span><span style="color: #0000FF;margin-left: 10px;">禁用</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;'></el-pagination>
			</div>
			<el-dialog title="菜单管理" :visible.sync="dialogFormVisible" style='width: 100%;'>
				<el-form :model="form">
					<el-form-item label="菜单类型:" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择内容">
							<el-option label="小程序菜单" value="shanghai"></el-option>
							<el-option label="后台菜单" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="菜单名称:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="父菜单名称:" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择内容">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="根菜单名称:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-select v-model="form.region" placeholder="请选择内容">
							<el-option label="根菜单一" value="shanghai"></el-option>
							<el-option label="根菜单二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="配置地址:" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
					</el-form-item>
					<el-form-item label="排序序号:" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style='width: 42%;'></el-input>
					</el-form-item>
					<el-form-item label="立即激活:" :label-width="formLabelWidth">
						<input type="radio"/>是
						<input type="radio"/>否
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button @click="dialogFormVisible = false">保 存</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">重 置</el-button>
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
		name: "shujuzidian",
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
					lai: '小程序菜单',
					name: '课程',
					sex: '',
					zc: '',
					num: "",
					check: '1',
					check1: '是',
				}, {
					no: '2',
					lai: '小程序菜单',
					name: '消息',
					sex: '',
					zc: '',
					num: "",
					check: '2',
					check1: '否',
				}, {
					no: '3',
					lai: '小程序菜单',
					name: '个人中心',
					sex: '',
					zc: '',
					num: "",
					check: '3',
					check1: '是',
				}, {
					no: '4',
					lai: '后台菜单',
					name: '首页',
					sex: '',
					zc: '',
					num: "",
					check: '1',
					check1: '是',
				}, {
					no: '5',
					lai: '后台菜单',
					name: '课程管理',
					sex: '',
					zc: '',
					num: "",
					check: '1',
					check1: '是',
				}, {
					no: '6',
					lai: '后台管理',
					name: '课程管理',
					sex: '',
					zc: '课程管理',
					num: "",
					check: '1',
					check1: '是',
				}, {
					no: '7',
					lai: '后台管理',
					name: '班级课程管理',
					sex: '课程管理',
					zc: '课程管理',
					num: "",
					check: '1',
					check1: '是',
				}, {
					no: '8',
					lai: '后台管理',
					name: '班级课程管理',
					sex: '课程管理',
					zc: '课程管理',
					num: "",
					check: '1',
					check1: '是',
				}, ],
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
