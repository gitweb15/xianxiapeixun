<template>
	<div>
		<top title="学员管理"></top>
		<div style="margin-top: 15px;">
			<a style=' width: 45%;margin-left: 620px;height: 50px;'>学员搜索&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input placeholder="请输入搜索内容" v-model="input3" class="input-with-select" style='width: 25%;'>
				<el-option label="餐厅名" value="1"></el-option>
				<el-option label="订单号" value="2"></el-option>
				<el-option label="用户电话" value="3"></el-option>
				<el-button slot="append" icon="el-icon-search">搜索</el-button>
			</el-input></a>
		</div>
		<div style="line-height: 30px;width: 300px;border: 1px solid #eee;padding-left: 20px;position: absolute;left: 280px;height: 69%;top:165px;box-shadow: 0px 2px 25px gainsboro;">
			<p style="text-align: center;"><img src="../../assets/yuan1.png" /></p>
			<p style="text-align: center;font-weight: bold;">学员姓名</p>
			<p><span style="font-weight: bold;">性别</span><span style="margin-left: 85px;text-align: left;">男</span></p>
			<p><span style="font-weight: bold;">联系方式</span><span style="margin-left: 52px;text-align: left;">18802342234</span></p>
			<p><span style="font-weight: bold;">学段</span><span style="margin-left: 85px;text-align: left;">初中</span></p>
			<p><span style="font-weight: bold;">年级</span><span style="margin-left: 85px;text-align: left;">初中二年级</span></p>
			<p><span style="font-weight: bold;">是否新生</span><span style="margin-left: 55px;text-align: left;">否</span></p>
		</div>
		<el-tabs v-model="activeName" @tab-click="handleClick" style='margin-left: 350px;width: 68%;margin-top: 10px;'>
			<el-tab-pane label="学员订单" name="first">
				<div class="main-tab">
					<el-table :data="tableData" style="width: 100%;margin-left: -115px;" :header-cell-style="tableHeaderColor"
					 :row-class-name="tableRowClassName">
						<el-table-column label="订单来源" prop='no' width="120"></el-table-column>
						<el-table-column prop="sex" label="业务教师" width="120"></el-table-column>
						<el-table-column prop="tel" label="订单流水号" width="150"></el-table-column>
						<el-table-column prop="xueduan" label="课程" width="140"></el-table-column>
						<el-table-column prop="nianji" label="总价" width="100"></el-table-column>
						<el-table-column prop="sf" label="状态" width="100"></el-table-column>
					</el-table>
					<!-- 					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style='margin-top: 20px;'></el-pagination> -->
				</div>
			</el-tab-pane>
			<el-tab-pane label="学员课程" name="second" style='width: 100%;'>
				<ul class="ulli">
					<li>
						<img src="../../assets/name.png">
						<div class="rigth">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500.00</p>
						</div>
						<p class="jie">课程剩余节数：12节</p>
					</li>
					<li>
						<img src="../../assets/name.png">
						<div class="rigth">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500.00</p>
						</div>
						<p class="jie">课程剩余节数：12节</p>
					</li>
					<li>
						<img src="../../assets/name.png">
						<div class="rigth">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500.00</p>
						</div>
						<p class="jie">课程剩余节数：12节</p>
					</li>
					<li>
						<img src="../../assets/name.png">
						<div class="rigth">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500.00</p>
						</div>
						<p class="jie">课程剩余节数：12节</p>
					</li>
					<li>
						<img src="../../assets/name.png">
						<div class="rigth">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500.00</p>
						</div>
						<!-- <p class="jie">课程剩余节数：12节</p> -->
					</li>
					<li>
						<img src="../../assets/name.png">
						<div class="rigth">
							<p>英语个性化一对一教学</p>
							<p style="color: red;">￥1500.00</p>
						</div>
						<!-- <p class="jie">课程剩余节数：12节</p> -->
					</li>
				</ul>
			</el-tab-pane>
			<el-tab-pane label="学员考勤" name="third">
				<div class="main-tab">
					<el-table :data="tableData1" style="width: 100%;margin-left: -60px;" :header-cell-style="tableHeaderColor"
					 :row-class-name="tableRowClassName">
						<el-table-column label="课程名称" prop='no' width="170"></el-table-column>
						<el-table-column prop="sex" label="上课时间" width="180"></el-table-column>
						<el-table-column prop="tel" label="课程教师" width="160"></el-table-column>
						<el-table-column prop="xueduan" label="考勤状态" width="110"></el-table-column>
					</el-table>
				</div>
			</el-tab-pane>
			<!-- <el-tab-pane label=">" style='position: absolute;left: 1000px;'></el-tab-pane> -->
		</el-tabs>
	</div>
</template>

<script>
	import top from "../Top";
	import {
		mapState
	} from "vuex";
	export default {
		name: "xueyuanguanli",
		data() {
			return {
				input1: '',
				input2: '',
				input3: '',
				select: '',
				activeName: 'first', //学员管理
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
						no: '自主支付',
						sex: '',
						tel: '20190415001',
						xueduan: '语文班级课程',
						nianji: '1500',
						sf: '学习中'

					}, {
						no: '业务销售',
						sex: '业务教师',
						tel: '20190415002',
						xueduan: '数学一对一',
						nianji: '1600',
						sf: '已结束'
					}, {
						no: '自主支付',
						sex: '',
						tel: '20190415001',
						xueduan: '语文班级课程',
						nianji: '1500',
						sf: '学习中'

					}, {
						no: '业务销售',
						sex: '业务教师',
						tel: '20190415002',
						xueduan: '数学一对一',
						nianji: '1600',
						sf: '已结束'
					}, {
						no: '自主支付',
						sex: '',
						tel: '20190415001',
						xueduan: '语文班级课程',
						nianji: '1500',
						sf: '学习中'

					}, {
						no: '业务销售',
						sex: '业务教师',
						tel: '20190415002',
						xueduan: '数学一对一',
						nianji: '1600',
						sf: '已结束'
					}, {
						no: '自主支付',
						sex: '',
						tel: '20190415001',
						xueduan: '语文班级课程',
						nianji: '1500',
						sf: '学习中'

					}, {
						no: '业务销售',
						sex: '业务教师',
						tel: '20190415002',
						xueduan: '数学一对一',
						nianji: '1600',
						sf: '已结束'
					},
					{
						no: '自主支付',
						sex: '',
						tel: '20190415001',
						xueduan: '语文班级课程',
						nianji: '1500',
						sf: '学习中'

					}, {
						no: '业务销售',
						sex: '业务教师',
						tel: '20190415002',
						xueduan: '数学一对一',
						nianji: '1600',
						sf: '已结束'
					},
				],
				tableData1: [{
						no: '语文班级课程',
						sex: '2019-4-14 14:00',
						tel: '授课教师一',
						xueduan: '已考勤',
					}, {
						no: '数学一对一',
						sex: '2019-4-14 16:00',
						tel: '授课教师二',
						xueduan: '未考勤',
					}, {
						no: '语文班级课程',
						sex: '2019-4-14 14:00',
						tel: '授课教师一',
						xueduan: '已考勤',
					}, {
						no: '数学一对一',
						sex: '2019-4-14 16:00',
						tel: '授课教师二',
						xueduan: '未考勤',
					}, {
						no: '语文班级课程',
						sex: '2019-4-14 14:00',
						tel: '授课教师一',
						xueduan: '已考勤',
					}, {
						no: '数学一对一',
						sex: '2019-4-14 16:00',
						tel: '授课教师二',
						xueduan: '未考勤',
					}, {
						no: '语文班级课程',
						sex: '2019-4-14 14:00',
						tel: '授课教师一',
						xueduan: '已考勤',
					}, {
						no: '数学一对一',
						sex: '2019-4-14 16:00',
						tel: '授课教师二',
						xueduan: '未考勤',
					},
					{
						no: '语文班级课程',
						sex: '2019-4-14 14:00',
						tel: '授课教师一',
						xueduan: '已考勤',
					}, {
						no: '数学一对一',
						sex: '2019-4-14 16:00',
						tel: '授课教师二',
						xueduan: '未考勤',
					},
				],
			};
		},
		components: {
			top
		},
		methods: {

			handleClick(tab, event) { //学员管理
				console.log(tab, event);
			},
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
	.el-select .el-input {
		width: 30px;
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
		
	}

	.jie {
		line-height: 100px;
	}

	.rigth {
		margin-left: 100px;
		margin-top: -70px;
		line-height: 30px;
	}

	.ulli li {
		list-style: none;
		float: left;
		width: 300px;
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
