<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="班级课程试学管理"></Top>
			<el-button type="primary" @click="dialogVisible = true">新增活动</el-button>
			<div>
				<table cellpadding="0" cellspacing="0">
					<tr>
						<td>序</td>
						<td>试学名称</td>
						<td>开始时间</td>
						<td>结束时间</td>
						<td>
							查看
						</td>
					</tr>
					<tr v-for="(item,index) in list" :key="index">
						<td>{{item.bm}}</td>
						<td>{{item.mc}}</td>
						<td>{{item.xq}}</td>
						<td>{{item.nj}}</td>
						<td>
							<router-link to="/click" tag="a">
								<el-button type="text">{{item.tk}}</el-button>
							</router-link>
							&nbsp;
							<a href="#">
								<el-button type="text" @click="dialogVisible = true">{{item.cc}}</el-button>
							</a>
						</td>
					</tr>
				</table>
				<el-dialog :visible.sync="dialogVisible" title="活动管理" width="45%">
					<div class="ij" style="position: relative;top: -30px;">
						<p style="padding-left: 25px;">活动名称<el-input placeholder="请输入内容" v-model="value" class="in el"></el-input>
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
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "bsxgl",
		components: {
			Top
		},
		data() {
			return {
				dialogVisible: false,
				value:'',
				value1:'',
				value2:'',
				list: [{
						bm: "1",
						mc: "2018年第一次99试学月",
						xq: "2018.6.1",
						nj: "2018.6.10",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "2",
						mc: "2018年第二次99试学月",
						xq: "2018.12.12",
						nj: "2018.12.12",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "1",
						mc: "2018年第一次99试学月",
						xq: "2018.6.1",
						nj: "2018.6.10",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "2",
						mc: "2018年第二次99试学月",
						xq: "2018.12.12",
						nj: "2018.12.12",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "1",
						mc: "2018年第一次99试学月",
						xq: "2018.6.1",
						nj: "2018.6.10",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "2",
						mc: "2018年第二次99试学月",
						xq: "2018.12.12",
						nj: "2018.12.12",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "1",
						mc: "2018年第一次99试学月",
						xq: "2018.6.1",
						nj: "2018.6.10",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "2",
						mc: "2018年第二次99试学月",
						xq: "2018.12.12",
						nj: "2018.12.12",
						tk: "修改",
						cc: "查看"
					},
					{
						bm: "1",
						mc: "2018年第一次99试学月",
						xq: "2018.6.1",
						nj: "2018.6.10",
						tk: "修改",
						cc: "查看"
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

	tr td a {
		margin-left: 20px;
	}

	.zhuti {
		width: 1090px;
		height: 510px;
	}

	.zhong {
		margin-top: 10px;
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

	table tr:hover {
		background-color: #eaeaea;
	}
	.ij p{
		margin-top: 25px;
	}
	.el {
		padding-left: 18px;
	}
	
	.in {
		width: 330px;
	}
	
</style>
