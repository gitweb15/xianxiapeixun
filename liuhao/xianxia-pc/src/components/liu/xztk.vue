<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="选择调课课程"></Top>
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
							<td>课程编码</td>
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
							<td>{{item.js}}</td>
							<td>
								<a href="#">{{item.tk}}</a>
							</td>
						</tr>
					</table>
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "xztk",
		components: {
			Top
		},
		data() {
			return{
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
				}
			],
				value:"",
				value1:"",
				value2:"",
			list:[
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"滨江校区",
					js:"刘小牛",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"城南校区",
					js:"王大壮",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"滨江校区",
					js:"刘小牛",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"城南校区",
					js:"王大壮",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"滨江校区",
					js:"刘小牛",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"城南校区",
					js:"王大壮",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"滨江校区",
					js:"刘小牛",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"城南校区",
					js:"王大壮",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"滨江校区",
					js:"刘小牛",
					tk:"调课"
				},
				{
					bm:"BJKC-20190405",
					mc:"初中一年级班级课程",
					xq:"城南校区",
					js:"王大壮",
					tk:"调课"
				}
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
		font-size: 15px;
	}

	table tr:nth-of-type(1) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(3) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(5) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(7) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(9) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(11) {
		background-color: #d7d7d7;
	}

	table tr:nth-of-type(13) {
		background-color: #d7d7d7;
	}
</style>
