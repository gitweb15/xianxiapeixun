<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="教师账号管理"></Top>
			<div class="zhong">
				<p>教师姓名:<el-input placeholder="请输入内容" class="el in"></el-input></p>
				<p>使用状态:<el-select v-model="value" placeholder="请选择内容" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select></p>
					<p>手机号码:<el-input placeholder="请输入内容" class="el in"></el-input></p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>教师姓名</td>
							<td>所在校区</td>
							<td>手机号</td>
							<td>状态</td>
							<td>
								重置密码
							</td>
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
								{{item.dj}}
							</a></td>
							<td>
								<a href="#">
								<el-button type="text" @click="dialogVisible = true" style="color: red;">{{item.tk}}</el-button></a>
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
		name: "kcxh",
		components: {
			Top
		},
		data() {
			return{
				// dialogVisible: false,
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
				value:"",
			list:[
				{
					bm:"教师一",
					mc:"城南",
					xq:"18899701098",
					nj:"正常",
					dj:"重置密码",
					tk:"冻结"
				},
				{
					bm:"教师二",
					mc:"滨江校区",
					xq:"18800987645",
					nj:"冻结中",
					dj:"重置密码",
					tk:"解冻"
				},
				{
					bm:"教师一",
					mc:"城南",
					xq:"18899701098",
					nj:"正常",
					dj:"重置密码",
					tk:"冻结"
				},
				{
					bm:"教师二",
					mc:"滨江校区",
					xq:"18800987645",
					nj:"冻结中",
					dj:"重置密码",
					tk:"解冻"
				},
				{
					bm:"教师一",
					mc:"城南",
					xq:"18899701098",
					nj:"正常",
					dj:"重置密码",
					tk:"冻结"
				},
				{
					bm:"教师二",
					mc:"滨江校区",
					xq:"18800987645",
					nj:"冻结中",
					dj:"重置密码",
					tk:"解冻"
				},
				{
					bm:"教师一",
					mc:"城南",
					xq:"18899701098",
					nj:"正常",
					dj:"重置密码",
					tk:"冻结"
				},
				{
					bm:"教师二",
					mc:"滨江校区",
					xq:"18800987645",
					nj:"冻结中",
					dj:"重置密码",
					tk:"解冻"
				},
				{
					bm:"教师一",
					mc:"城南",
					xq:"18899701098",
					nj:"正常",
					dj:"重置密码",
					tk:"冻结"
				},
				{
					bm:"教师二",
					mc:"滨江校区",
					xq:"18800987645",
					nj:"冻结中",
					dj:"重置密码",
					tk:"解冻"
				},
			]
			
			
			
			//1	
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



