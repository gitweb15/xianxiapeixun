<template>
	<div>
		<top title="班级课程管理"></top>
		<div class="main" style="width:100%;">
			<el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;' @click="dialogFormVisible1 = true">新增课程</el-button>
			<el-button type="primary" style='margin-left: 10px;margin-bottom: 15px;'>导出Excel</el-button>
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
							<!-- <el-option label="小学五年级" value="小学五年级"></el-option>
							<el-option label="小学六年级" value="小学六年级"></el-option>
							<el-option label="初中一年级" value="初中一年级"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item class="right" style="width: 10%;">
						<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<el-dialog title=" " :visible.sync="dialogFormVisible1" style='width: 100%;'>
				<span style="margin-left: 52px;">课程封面</span>
				<el-upload class="upload-demo" style='margin-left: 120px;margin-top: -30px;' drag action="https://jsonplaceholder.typicode.com/posts/"
				 multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text" style="margin-left: 68px;margin-top: -50px;width: 120px;"><em>上传</em></div>
					<div class="el-upload__tip" slot="tip">支持文件格式：jpg、jpeg,单次上传文件限制大小2MB</div>
				</el-upload>

				<el-form :model="form" style='margin-top: 20px;'>
					<el-form-item label="课程编码" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请输入内容">
							<!-- <el-option label="小程序菜单" value="shanghai"></el-option> -->
							<!-- <el-option label="后台菜单" value="beijing"></el-option> -->
						</el-select>
					</el-form-item>
					<el-form-item label="课程名称:" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="年级" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择年级">
							<el-option label="小学五年级" value="小学五年级"></el-option>
							<el-option label="小学六年级" value="小学六年级"></el-option>
							<el-option label="初中一年级" value="初中一年级"></el-option>
							<el-option label="初中二年级" value="初中二年级"></el-option>
							<el-option label="初中三年级" value="初中三年级"></el-option>
							<el-option label="高中一年级" value="高中一年级"></el-option>
							<el-option label="高中二年级" value="高中二年级"></el-option>
							<el-option label="高中三年级" value="高中三年级"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="价格" :label-width="formLabelWidth" style='width: 340px;float: left;'>
						<el-input v-model="form.name" autocomplete="off" placeholder='请输入内容' style='width: 100%;'></el-input>
					</el-form-item>
					<el-form-item label="课时" :label-width="formLabelWidth" style='float: right;margin-top: -60px;'>
						<el-select v-model="form.region" placeholder="请输入内容">
						</el-select>
					</el-form-item>
					<el-form-item label="立即开课" :label-width="formLabelWidth">
						<div style="position:absolute;top: 63px;left: 20px;">
							<input type="radio" checked="checked" />是
							<input type="radio" style="margin-left: 20px;" />否
						</div>
					</el-form-item>
					<div class="main-tab">
						<span style="margin-left: 50px;">开课校区</span>
						<el-button type="primary" style='float: right;width: 80px;height: 20px;padding-bottom: 20px;margin-bottom: 10px;margin-right: 10px;'>添加</el-button>
						<el-table :data="tableData1" style="width: 100%;text-align: center;margin-left: 20px;" :header-cell-style="tableHeaderColor"
						 :row-class-name="tableRowClassName">

							<el-table-column label="校区" prop="x" width="200"></el-table-column>
							<el-table-column prop="j" label="教师" width="200"></el-table-column>
							<!-- <el-table-column prop="d" label="地区价格" width="155"></el-table-column> -->


							<el-table-column prop="c" label="操作" width="170">
								<span style="color: #0000FF;" @click="dialogFormVisible = true">修改</span>
								<span style="color: red;margin-left: 20px;" @click="dialogFormVisible = true">移出</span>
							</el-table-column>
						</el-table>
					</div>

					<el-form-item label="课程简介" :label-width="formLabelWidth" style='width: 100%;margin-top: 20px;'>
						<textarea placeholder="请输入详细描述" style='width: 94%;height: 100px;padding: 10px;border: 1px solid gainsboro;color: white;'></textarea>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer" style="float:right;margin-top: -40px;">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
				</div>
			</el-dialog>
			<div class="main-tab">
				<el-table :data="tableData" style="width: 100%;" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
					<el-table-column label="选择" width="100">
						<input type="checkbox" />
					</el-table-column>
					<el-table-column prop="keBian" label="编码" width="180"></el-table-column>
					<el-table-column prop="className" label="名称" width="160"></el-table-column>
					<el-table-column prop="xiaoQu" label="校区" width="120"></el-table-column>
					<el-table-column prop="id" label="年级" width="150"></el-table-column>
					<el-table-column prop="yiFenBanNum" label="价格" width="120"></el-table-column>
					<el-table-column prop="weiPaiKeNum" label="学习中人数" width="120">
					</el-table-column>
					<el-table-column prop="yiFenBanNum" label="状态" width="120"></el-table-column>
					<el-table-column prop="check1" label="操作" width="150">
						<span style="color: #0000FF;" @click="dialogFormVisible = true">编辑</span>
						<span style="color: #0000FF;margin-left: 10px;">开课</span>
					</el-table-column>
				</el-table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='text-align: center;'></el-pagination>
			</div>
			<el-dialog :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="课程编码" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="课程名称" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="年级" :label-width="formLabelWidth" style="margin-left: -40px;">
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
					<el-form-item label="价格" :label-width="formLabelWidth" style="margin-left: -40px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;margin-right: 340px;"></el-input>
					</el-form-item>
					<el-form-item label="课时" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="校区" :label-width="formLabelWidth" style="margin-left: -40px;">
						<span style="margin-right: 130px;">城南校区</span>
						<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
					</el-form-item>
					<el-form-item label="授课教师" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
						<el-input v-model="form.name" autocomplete="off" style="width: 200px;"></el-input>
					</el-form-item>
					<el-form-item label="立即开课" :label-width="formLabelWidth" style="margin-left: -40px;">
						<input type="radio" style='margin-right: 10px;' checked="checked">是</el-radio>
						<span style="margin-left: 30px;"><input type="radio" style='margin-right: 10px;'>否</el-radio></span>
						<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
					</el-form-item>
					<el-form-item label="课程描述" :label-width="formLabelWidth" style="width: 660px;margin-left: -40px;">
						<el-input type="textarea" :rows="5" :cols="44" v-model="form.desc" placeholder="请输入详情描述"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
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
	import axios from 'axios'
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
				tableData1: [{
						x: '城南校区',
						j: '教室一、教室二'
					},
					{
						x: '滨江校区',
						j: '教室三'
					},
				],
				tableData: [
					// 	{
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '城南校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '已开课',
					// 	// check3: '编辑 查看',

					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '滨江校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '未开课',
					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '城南校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '已开课',
					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '滨江校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '未开课',
					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '城南校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '已开课',
					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '滨江校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '未开课',
					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '城南校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '已开课',
					// }, {
					// 	no: 'BJKC-20190405',
					// 	name: '初中一年级班级课程',
					// 	sex: '滨江校区',
					// 	zc: '初中一年级',
					// 	num: '350',
					// 	check: "12",
					// 	check1: '未开课',
					// },
				],
				dialogTableVisible: false,
				dialogFormVisible: false,
				dialogTableVisible1: false,
				dialogFormVisible1: false,
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
		mounted() {
			axios.get('https://www.fastmock.site/mock/26715f0938dee4fe31526bbe7a2af048/xianxia/xianxia/fenBan').then(res => {
				console.log(res)
				this.tableData = res.data.data
			})
			// fetch("http://122.112.179.240:9005/api/masterData/getAllTemplate?pageNum=1&pageSize=10", {
			// 		method: 'GET',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		},
			// 		//body: JSON.stringify({key:value}), //POST传参方式
			// 		credentials: 'include' //允许携带cookie
			// 	}) //fetch返回的是promise对象。所以fetch().then()第一个then里返回的并不是真正的数据。而是一个promise，所以我们需要通过链式操作第二个then()来获取真正的数据。
			// 	.then(res => {
			// 		return res.json();
			// 	})
			// 	.then(res => {
			// 		// 这里返回的数据就是我们想要请求的json数据
			// 		if (res.message == "OK") {
			// 			console.log(res.responseBody.list);
			// 			this.tableData=res.responseBody.list
			// 		}
			// 	})
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
