<template>
	<div>
		<top title="首页推荐管理"></top>
		<el-button type="primary" style='margin-left: 10px;'>批量设置为推荐</el-button>
		<div class="main" style="width:100%;">
			<div class="main-from clear" style="padding-top:10px;padding-left:10px;">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="校区:" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择校区">
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
						<el-select v-model="form.region" placeholder="请选择年级" style="width: 200px;">
							<el-option label="小学五年级" value="shanghai"></el-option>
							<el-option label="小学六年级" value="beijing"></el-option>
							<el-option label="初中一年级" value="shanghai"></el-option>
							<el-option label="初中二年级" value="beijing"></el-option>
							<el-option label="初中三年级" value="shanghai"></el-option>
							<el-option label="高中一年级" value="beijing"></el-option>
							<el-option label="高中二年级" value="shanghai"></el-option>
							<el-option label="高中三年级" value="beijing"></el-option>
						</el-select>

					</el-form-item>
					<el-form-item label="状态" class="left" style="width: 25%;">
						<el-select v-model="formInline.region" placeholder="请选择状态">
							<el-option label="进行中" value="进行中"></el-option>
							<el-option label="已结束" value="已结束"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="onSubmit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>

			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="选择" width="55">
						<input type="checkbox"/>
					</el-table-column>
					<el-table-column prop="no" label="课程编号" width="120">
					</el-table-column>
					<el-table-column prop="name" label="课程名称" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="xiaoqu" label="校区" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="date" label="年级" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="price" label="单价" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="study" label="学习中人数" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="status" label="状态" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="caozuo" label="操作" show-overflow-tooltip>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 10px;'></el-pagination>
			</div>
			<el-dialog title="通知编辑" :visible.sync="dialogFormVisible" style='width: 100%;'>
				<el-form :model="form">
					<el-form-item label="通知标题:" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" placeholder='课程结束提醒' style='width: 40%;'></el-input>
					</el-form-item>
					<el-form-item label="发送用户:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='家长' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="通知内容:" :label-width="formLabelWidth" style='color: #EEEEEE;'>
						<textarea v-model="form.name" autocomplete="off" placeholder='亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束,请确认！'
						 style='width: 100%;height: 100px;margin-top:-20px;padding-top: 20px;padding-left: 10px;color: #EEEEEE;'></textarea>
					</el-form-item>

				</el-form>
				<div slot="footer" class="dialog-footer" style="text-align: center;">
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
					<el-button @click="dialogFormVisible = false">重 置</el-button>
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
		name: "tongzhi",
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
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未推荐',
						caozuo: '设置为推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已推荐',
						caozuo: '取消推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未推荐',
						caozuo: '设置为推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已推荐',
						caozuo: '取消推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未推荐',
						caozuo: '设置为推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已推荐',
						caozuo: '取消推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未推荐',
						caozuo: '设置为推荐'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已推荐',
						caozuo: '取消推荐'
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
