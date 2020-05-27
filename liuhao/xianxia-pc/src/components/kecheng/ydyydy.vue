<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="一对一活动管理"></Top>
			<p style="margin-top: 20px;">
				<el-button type="primary" @click="dialogVisible = true">新增活动</el-button>
			</p>
			<div class="zhong">
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>序</td>
							<td>活动名称</td>
							<td>开始时间</td>
							<td>结束时间</td>
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
								<a href="#">
									<el-button type="text">{{item.tk}}</el-button>
								</a>
									<router-link to="hdkc" tag="a">
										<el-button type="text">{{item.rs}}</el-button>
									</router-link>
							</td>
						</tr>
					</table>
					<el-dialog :visible.sync="dialogVisible" title="活动管理" width="45%">
						<div class="ij" style="position: relative;top: -30px;">
							<p style="padding-left: 25px;">活动名称<el-input placeholder="请输入内容" class="in el"></el-input>
							</p>
								<p class="block">
									<span class="demonstration">活动开始时间</span>
									<el-date-picker style="margin-left: 15px;" v-model="value1" type="date" placeholder="选择日期" class="in">
									</el-date-picker>
								</p>
								<p class="block">
									<span class="demonstration">活动结束时间</span>
									<el-date-picker style="margin-left: 15px;" v-model="value2" type="date" placeholder="选择日期" class="in">
									</el-date-picker>
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
				dialogVisible: false, //弹出层默认关闭
				num: 1,
				//value绑定值
				value1:'',
				value2:'',
				value: "",
				//下拉列表
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
				//tab表格
				list: [

					{
						bm: "1",
						mc: "2018六六续班节",
						xq: "2018.6.1",
						nj: "2018.6.10",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "2018双十二报班节",
						xq: "2018.12.12",
						nj: "2018.12.12",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "2018六六续班节",
						xq: "2018.6.1",
						nj: "2018.6.10",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "2018双十二报班节",
						xq: "2018.12.12",
						nj: "2018.12.12",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "2018六六续班节",
						xq: "2018.6.1",
						nj: "2018.6.10",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "2018双十二报班节",
						xq: "2018.12.12",
						nj: "2018.12.12",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "2018六六续班节",
						xq: "2018.6.1",
						nj: "2018.6.10",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "2018双十二报班节",
						xq: "2018.12.12",
						nj: "2018.12.12",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "2018六六续班节",
						xq: "2018.6.1",
						nj: "2018.6.10",
						rs: "查看",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "2018双十二报班节",
						xq: "2018.12.12",
						nj: "2018.12.12",
						rs: "查看",
						tk: "修改"
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
		width: 330px;
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

	table tr:hover {
		background-color: #eaeaea;
	}
	.ij p{
		margin-top: 25px;
	}
</style>
