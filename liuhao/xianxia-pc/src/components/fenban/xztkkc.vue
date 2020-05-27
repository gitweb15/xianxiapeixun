<template>
	<div class="zhu">
		<p class="hdd"><span></span>选择调课课程</p>
		<div class="zhuti">
			<div class="zhong">
				<p>校区:<el-select v-model="value" placeholder="请选择校区" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p>年级:<el-select v-model="value1" placeholder="请选择年纪" class="el">
						<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
						</el-option>
					</el-select>
				</p>
				<p>
					状态:<el-select v-model="value2" placeholder="请选择状态" class="el">
						<el-option v-for="item in option2" :key="item.value2" :label="item.label" :value="item.value2">
						</el-option>
					</el-select>
				</p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>编码</td>
							<td>课程名称</td>
							<td>校区</td>
							<td>授课教师</td>
							<td>
								操作
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bm}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.xq}}</td>
							<td>{{item.nj}}</td>
							<td>
								<router-link to="tiao" tag="a" target="_blank">
									<el-button type="text">{{item.cc}}</el-button>
								</router-link>
							</td>
						</tr>
					</table>
					<!-- <el-dialog
					  :visible.sync="dialogVisible"
					  width="40%"
					  :before-close="handleClose">
					  <p style="margin-left: 110px;">消耗课时:<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数" placeholder="请输入课时数" style="margin-left: 30px;"></el-input-number></p>
					  <span slot="footer" class="dialog-footer" style="position: relative;left: -150px;">
					    <el-button @click="dialogVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					  </span>
					</el-dialog> -->
					<el-pagination background
					 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "kcxh",
		components: {
		},
		data() {
			return {
				dialogVisible: false, //对话框
				dialogVisible1: false, //对话框
				num: 1,
				radio: '1', //绑定单选按钮
				//下拉
				option: [{
						value: '选项1',
						label: '城南校区'
					}, {
						value: '选项2',
						label: '水榭校区'
					}, {
						value: '选项3',
						label: '世贸校区'
					}, {
						value: '选项4',
						label: '花之南校区'
					}, {
						value: '选项5',
						label: '滨江校区'
					}, {
						value: '选项6',
						label: '九洞桥校区'
					},
					{
						value: '选项7',
						label: '万达校区'
					},
				],

				option1: [{
						value1: '选项1',
						label: '小学五年级'
					}, {
						value1: '选项2',
						label: '小学六年级'
					}, {
						value1: '选项3',
						label: '初中一年级'
					}, {
						value1: '选项4',
						label: '初中二年级'
					}, {
						value1: '选项5',
						label: '初中三年级'
					}, {
						value1: '选项6',
						label: '高中一年级'
					},
					{
						value1: '选项6',
						label: '高中二年级'
					}, {
						value1: '选项7',
						label: '高中三年级'
					},
				],
				option2: [{
					value2: '选项1',
					label: '进行中'
				}, {
					value2: '选项2',
					label: '已结束'
				}],
				// 文本值
				value: "",
				value1: "",
				value2: "",
				list: [

					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "王大壮",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "刘小牛",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "王大壮",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "刘小牛",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "王大壮",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "刘小牛",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "王大壮",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "刘小牛",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "王大壮",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "刘小牛",
						cc: "开课"
					},
				]

			}

		}
	}
</script>

<style scoped>
	.hdd{
		width: 100%;
		height: 40px;
		background-color: #f9f9f9;
		font-size: 15px;
		padding-top: 20px;
	}
	.hdd span{
		display: inline-block;
		width: 6px;
		height: 20px;
		background-color: #1abc9c;
	}
	.zhu {
		width: 100%;
		height: 510px;
	}

	.liu p {
		margin-top: 28px;
	}

	.liu p span {
		padding-left: 90px;
	}

	.zhuti {
		width: 1090px;
		height: 510px;
	}

	.zhong {
		margin-top: 10px;
	}

	.zhong p {
		display: inline-block;
		padding-right: 15px;
	}

	.el {
		padding-left: 18px;
	}

	.i {
		width: 580px;
		position: relative;
		top: 80px;
		left: 10px;
	}

	.in {
		width: 200px;
	}

	table {
		width: 100%;
		margin-top: 15px;
	}

	tr {
		height: 45px;
		font-size: 16px;
	}

	tr td {
		text-align: center;
		font-size: 13px;
	}

	table tr:nth-of-type(1) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(3) {
		background-color: #f2f2f2;
	}

	table tr:nth-of-type(5) {
		background-color: #f2f2f2;
	}

	table tr:nth-of-type(7) {
		background-color: #f2f2f2;
	}

	table tr:nth-of-type(9) {
		background-color: #f2f2f2;
	}

	table tr:nth-of-type(11) {
		background-color: #f2f2f2;
	}

	table tr:nth-of-type(13) {
		background-color: #f2f2f2;
	}

	table tr:hover {
		background-color: #eaeaea;
	}
	.liu{
		position: relative;
		top: -70px;
	}
</style>
