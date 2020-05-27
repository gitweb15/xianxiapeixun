<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="一对一课程消耗"></Top>
			<p style="margin-top: 20px;">
				<el-button type="primary" @click="dialogVisible = true">批量消耗</el-button>
			</p>
			<div class="zhong">
				<p>校区:<el-select v-model="value" placeholder="请选择校区" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select></p>
				<p>年级:<el-select v-model="value1" placeholder="请选择年纪" class="el">
						<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
						</el-option>
					</el-select></p>
				<p>状态:<el-select v-model="value2" placeholder="请选择状态" class="el">
						<el-option v-for="item in option2" :key="item.value2" :label="item.label" :value="item.value2">
						</el-option>
					</el-select></p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
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
							<td>本周已消耗课时</td>
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
								<el-button type="text" @click="dialogVisible = true">{{item.tk}}</el-button></a>
							</td>
						</tr>
					</table>
					<el-dialog
					  :visible.sync="dialogVisible"
					  width="40%"
					  >
					  <p style="margin-left: 100px;">消耗课时:<el-input-number v-model="num" :min="1" :max="10" label="请输入课时数" placeholder="请输入课时数" style="margin-left: 30px;"></el-input-number></p>
					  <span slot="footer" class="dialog-footer" style="position: relative;left: -180px;">
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
			return{
				dialogVisible: false,
				num: 1,
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
				}
			],
				value:"",
				value1:"",
				value2:"",
			list:[
				
				{
					bm:"BJKC-20190405",
					mc:"英语一对一教育",
					xq:"滨江校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"0",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"数学一对一教育",
					xq:"城南校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"2",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"英语一对一教育",
					xq:"滨江校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"0",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"数学一对一教育",
					xq:"城南校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"2",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"英语一对一教育",
					xq:"滨江校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"0",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"数学一对一教育",
					xq:"城南校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"2",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"英语一对一教育",
					xq:"滨江校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"0",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"数学一对一教育",
					xq:"城南校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"2",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"英语一对一教育",
					xq:"滨江校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"0",
					tk:"消耗"
				},
				{
					bm:"BJKC-20190405",
					mc:"数学一对一教育",
					xq:"城南校区",
					nj:"初中一年级",
					dj:"350",
					rs:"12",
					ks:"2",
					tk:"消耗"
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
		width: 1100px;
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
</style>

