<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="晚辅导课程管理"></Top>
			<p style="margin-top: 20px;">
				<el-button type="primary" @click="dialogVisible1 = true">新增课程</el-button>
				<el-button type="primary">导出Excel</el-button>
			</p>
			<el-dialog :visible.sync="dialogVisible1" width="60%">
				<div class="liu">
					<p>课程封面&nbsp;&nbsp;<el-button type="info"><i class="el-icon-upload"></i>上传</el-button>
					</p>
					<span style="font-size: 13px;margin-left: 50px;">支持文件格式:jpg,jpeg,单次上传文件限制大小2MB</span>
					<p>课程编码<el-input placeholder="请输入内容" class="el in"></el-input>
						<span>
							课程名称<el-input placeholder="请输入内容" class="el in"></el-input>
						</span>
					</p>
					<p style="padding-right: 10px;">
						年级:<el-select v-model="value1" placeholder="请选择年纪" class="el">
							<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
							</el-option>
						</el-select>
					</p>
					<p style="padding-right: 10px;">价格<el-input placeholder="请输入内容" class="el in"></el-input>
						<span>
							课时<el-input placeholder="请输入内容" class="el in"></el-input>
						</span>
					</p>
					<p>
						<div>
							<p>开通校区</p>
							<p style="float: right;position: relative;top: -45px;">
								<el-button type="primary">添加</el-button>
							</p>
							<table cellpadding="0" cellspacing="0" style="position: relative;top: -43px;">
								<tr>
									<td>校区</td>
									<td>教师</td>
									<td>操作</td>
								</tr>
								<tr>
									<td>城南校区</td>
									<td>教师一、教师二</td>
									<td>
										<a href="#">修改</a>
										<a href="#" style="margin-left: 10px;color: red;">移除</a>
									</td>
								</tr>
								<tr>
									<td>滨江校区</td>
									<td>教师三</td>
									<td>
										<a href="#">修改</a>
										<a href="#" style="margin-left: 10px;color: red;">移除</a>
									</td>
								</tr>
							</table>
						</div>
					</p>
					<p style="position: relative;top: -43px;">立即开通&nbsp;&nbsp;&nbsp;
						<el-radio v-model="radio" label="1">是</el-radio>
						<el-radio v-model="radio" label="2">否</el-radio>
					</p>
					<p style="padding-right: 10px;position: absolute;top: 363px;">课程描述
						<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 3}" placeholder="请输入内容" class="i">
						</el-input>
					</p>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible1 = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
				</span>
			</el-dialog>
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
				<p>状态:<el-select v-model="value2" placeholder="请选择状态" class="el">
						<el-option v-for="item in option2" :key="item.value2" :label="item.label" :value="item.value2">
						</el-option>
					</el-select>
				</p>
				<p style="float: right;">
					<el-button type="primary" @click="dialogVisible = true">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>选择</td>
							<td>编码</td>
							<td>名称</td>
							<td>校区</td>
							<td>年级</td>
							<td>单价</td>
							<td>学习中人数</td>
							<td>状态</td>
							<td>
								操作
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>
								<input type="checkbox">
							</td>
							<td>{{item.bm}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.xq}}</td>
							<td>{{item.nj}}</td>
							<td>{{item.dj}}</td>
							<td>{{item.rs}}</td>
							<td>{{item.ks}}</td>
							<td>
								<a href="#">
									<el-button type="text" @click="dialogVisible = true">{{item.tk}}</el-button>
								</a>
								&nbsp;
								<a href="#" style="color: red;">
									<el-button type="text" @click="dialogVisible = true" style="color: red;">{{item.cc}}</el-button>
								</a>
							</td>
						</tr>
					</table>
					<el-dialog :visible.sync="dialogVisible" width="60%">
						<div class="liu">
							<p>课程编码<el-input placeholder="请输入内容" class="el in"></el-input>
								<span>
									课程名称<el-input placeholder="请输入内容" class="el in"></el-input>
								</span>
							</p>
							<p style="padding-right: 10px;">
								年级:<el-select v-model="value1" placeholder="请选择年纪" class="el">
									<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
									</el-option>
								</el-select>
							</p>
							<p style="padding-right: 10px;">价格<el-input placeholder="请输入内容" class="el in"></el-input>
								<span>
									课时<el-input placeholder="请输入内容" class="el in"></el-input>
								</span>
							</p>
							<p style="padding-right: 10px;">校区 城南校区
								<span style="position: relative;left: 140px;">授课教师<el-input placeholder="请输入内容" class="el in"></el-input></span>
							</p>
							<p style="position: absolute;top: 240px;left: 0px;">立即开通&nbsp;&nbsp;&nbsp;
								<el-radio v-model="radio" label="1">是</el-radio>
								<el-radio v-model="radio" label="2">否</el-radio>
							</p>
							<p style="padding-right: 10px;position: relative;top: -20px;">课程描述
								<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 3}" placeholder="请输入内容" class="i">
								</el-input>
							</p>
						</div>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
					<el-pagination background
					 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "kcxh",
		components: {
			Top
		},
		data() {
			return {
				dialogVisible: false,
				dialogVisible1: false,
				num: 1,
				radio: '1',
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
						value1: '选项8',
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
				value: "",
				value1: "",
				value2: "",
				list: [

					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "已开课",
						tk: "编辑",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "未开课",
						tk: "编辑",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "已开课",
						tk: "编辑",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "未开课",
						tk: "编辑",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "已开课",
						tk: "编辑",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "未开课",
						tk: "编辑",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "已开课",
						tk: "编辑",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "未开课",
						tk: "编辑",
						cc: "开课"
					},
					{
						bm: "BJKC-20190405",
						mc: "英语一对一教育",
						xq: "滨江校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "已开课",
						tk: "编辑",
						cc: "停课"
					},
					{
						bm: "BJKC-20190405",
						mc: "数学一对一教育",
						xq: "城南校区",
						nj: "初中一年级",
						dj: "350",
						rs: "12",
						ks: "未开课",
						tk: "编辑",
						cc: "开课"
					},
				]

			}

		}
	}
</script>

<style scoped>
	.zhu {
		width: 1090px;
		height: 510px;
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

	.liu p {
		margin-top: 15px;
	}

	.liu p span {
		padding-left: 90px;
	}

	.i {
		width: 580px;
		position: relative;
		top: 80px;
		left: 10px;
	}
	.liu{
		position: relative;
		top: -70px;
	}
</style>
