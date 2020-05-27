<template>
	<div>
		<top title="学员列表"></top>
		<el-button type="primary" style='margin: 10px;'>导出Excal</el-button>
		<el-form :inline="true" :model="formInline" class="demo-form-inline top">
			<el-form-item label="学员姓名" style="width:25%;">
				<el-select v-model="formInline.region" placeholder="请输入内容" style='width: 200px;'>
				<!-- 	<el-option label="城南校区" value="城南校区"></el-option>
					<el-option label="水榭校区" value="水榭校区"></el-option>
					<el-option label="世贸校区" value="世贸校区"></el-option>
					<el-option label="花之南校区" value="花之南校区"></el-option>
					<el-option label="滨江校区" value="滨江校区"></el-option>
					<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
					<el-option label="万达校区" value="万达校区"></el-option> -->
				</el-select>
			</el-form-item>
			<el-form-item label="家长手机号" style="width: 30%;">
				<el-input v-model="formInline.region" placeholder="请输入内容" style='width: 200px;'>
					<!-- <el-option label="小学五年级" value="小学五年级"></el-option>
					<el-option label="小学六年级" value="小学六年级"></el-option>
					<el-option label="初中一年级" value="初中一年级"></el-option>
					<el-option label="初中二年级" value="初中二年级"></el-option>
					<el-option label="初中三年级" value="初中三年级"></el-option>
					<el-option label="高中一年级" value="高中一年级"></el-option>
					<el-option label="高中二年级" value="高中二年级"></el-option>
					<el-option label="高中三年级" value="高中三年级"></el-option> -->
				</el-input>
			</el-form-item>
			<el-form-item label="校区" style="width:25%;">
				<el-select v-model="formInline.region" placeholder="请选择状态" style='width: 200px;'>
						<el-option label="城南校区" value="城南校区"></el-option>
						<el-option label="水榭校区" value="水榭校区"></el-option>
						<el-option label="世贸校区" value="世贸校区"></el-option>
						<el-option label="花之南校区" value="花之南校区"></el-option>
						<el-option label="滨江校区" value="滨江校区"></el-option>
						<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
						<el-option label="万达校区" value="万达校区"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item style="width: 15%;">
				<el-button type="primary">搜索</el-button>
			</el-form-item>
		</el-form>
		<div class="main-tab">
			<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
				<el-table-column label="学员姓名" prop='no' width="120"></el-table-column>
				<el-table-column prop="sex" label="性别" width="220"></el-table-column>
				<el-table-column prop="tel" label="家长联系方式" width="250"></el-table-column>
				<el-table-column prop="xueduan" label="学段" width="250"></el-table-column>
				<el-table-column prop="nianji" label="年级" width="250"></el-table-column>
				<el-table-column prop="sf" label="是否新成员" width="250"></el-table-column>
			</el-table>
			<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
			 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;margin-top: 20px;'></el-pagination>
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
		name: "WFDSelect",
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
					no: '学员一',
					sex: '男',
					tel: '18800223345',
					xueduan: '初中',
					nianji: '初中二年级',
					sf: '是'

				}, {
					no: '学员二',
					sex: '女',
					tel: '18897645565',
					xueduan: '小学',
					nianji: '小学六年级',
					sf: '否'
				}, {
					no: '学员一',
					sex: '男',
					tel: '18800223345',
					xueduan: '初中',
					nianji: '初中二年级',
					sf: '是'

				}, {
					no: '学员二',
					sex: '女',
					tel: '18897645565',
					xueduan: '小学',
					nianji: '小学六年级',
					sf: '否'
				}, {
					no: '学员一',
					sex: '男',
					tel: '18800223345',
					xueduan: '初中',
					nianji: '初中二年级',
					sf: '是'

				}, {
					no: '学员二',
					sex: '女',
					tel: '18897645565',
					xueduan: '小学',
					nianji: '小学六年级',
					sf: '否'
				},{
					no: '学员一',
					sex: '男',
					tel: '18800223345',
					xueduan: '初中',
					nianji: '初中二年级',
					sf: '是'

				}, {
					no: '学员二',
					sex: '女',
					tel: '18897645565',
					xueduan: '小学',
					nianji: '小学六年级',
					sf: '否'
				},
				 {
				 	no: '学员一',
				 	sex: '男',
				 	tel: '18800223345',
				 	xueduan: '初中',
				 	nianji: '初中二年级',
				 	sf: '是'
				 
				 }, {
				 	no: '学员二',
				 	sex: '女',
				 	tel: '18897645565',
				 	xueduan: '小学',
				 	nianji: '小学六年级',
				 	sf: '否'
				 },],
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
