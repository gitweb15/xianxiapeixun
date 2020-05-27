<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="学员列表"></Top>
			<p style="margin-top: 20px;">
				<el-button type="primary">导出Excel</el-button>
			</p>
			<div class="zhong">
				<p>学员姓名:<el-input placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p>家长手机号:<el-input placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p>校区:<el-select v-model="value" placeholder="请选择校区" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>学员姓名</td>
							<td>性别</td>
							<td>家长联系方式</td>
							<td>学段</td>
							<td>年级</td>
							<td>
								操作
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bm}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.xq}}</td>
							<td>{{item.wrs}}</td>
							<td>{{item.yrs}}</td>
							<td>
								<a href="#">
									<el-button type="text" @click="dialogVisible = true">{{item.fb}}</el-button>
								</a>
							</td>
						</tr>
					</table>
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
		name: "fbgl",
		components: {
			Top
		},
		data() {
			return {
				value:"",
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

				list: [

					{
						bm: "学员一",
						mc: "男",
						xq: "18800223345",
						wrs: "初中",
						yrs: "初中二年级",
						fb: "是"
					},
					{
						bm: "学员二",
						mc: "女",
						xq: "18897645565",
						wrs: "小学",
						yrs: "小学六年级",
						fb: "是"
					},
					{
						bm: "学员一",
						mc: "男",
						xq: "18800223345",
						wrs: "初中",
						yrs: "初中二年级",
						fb: "是"
					},
					{
						bm: "学员二",
						mc: "女",
						xq: "18897645565",
						wrs: "小学",
						yrs: "小学六年级",
						fb: "是"
					},
					{
						bm: "学员一",
						mc: "男",
						xq: "18800223345",
						wrs: "初中",
						yrs: "初中二年级",
						fb: "是"
					},
					{
						bm: "学员二",
						mc: "女",
						xq: "18897645565",
						wrs: "小学",
						yrs: "小学六年级",
						fb: "是"
					},
					{
						bm: "学员一",
						mc: "男",
						xq: "18800223345",
						wrs: "初中",
						yrs: "初中二年级",
						fb: "是"
					},
					{
						bm: "学员二",
						mc: "女",
						xq: "18897645565",
						wrs: "小学",
						yrs: "小学六年级",
						fb: "是"
					},
					{
						bm: "学员一",
						mc: "男",
						xq: "18800223345",
						wrs: "初中",
						yrs: "初中二年级",
						fb: "是"
					},
					{
						bm: "学员二",
						mc: "女",
						xq: "18897645565",
						wrs: "小学",
						yrs: "小学六年级",
						fb: "是"
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
	table tr:hover{
		background-color: #eaeaea;
	}
</style>

