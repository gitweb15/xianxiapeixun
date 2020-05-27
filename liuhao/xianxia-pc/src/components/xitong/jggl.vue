<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="机构管理"></Top>
			<div class="zhong">
				<p>
					<el-button type="primary" @click="dialogVisible = true">新增机构管理</el-button>
				</p>
				<p style="float: right;">通知关键字:<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
					<el-button type="primary" style="margin-left: 40px;">搜索</el-button>
				</p>
				<!-- <p>
					<el-button type="primary" style="margin-left: 240px;">搜索</el-button>
				</p> -->
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>通知内容</td>
							<td>发送时间</td>
							<td>操作</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td width="65%">{{item.user}}</td>
							<td width="15%">{{item.time}}</td>
							<td width="15%">
								<a href="#" @click="edit(item)">
									<el-button type="text" @click="dialogVisible1 = true">查看</el-button>
								</a>
							</td>
						</tr>
						<el-dialog title="查看通知" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
							<div class="lh">
								<p style="position: relative;top: -77px;">通知内容 :
									<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 3}" placeholder="请输入内容" class="i">
									</el-input>
								</p>
								<p>
									<span>发送用户 : 
									<el-select v-model="value1" multiple placeholder="请选择" style="margin-left: 15px;">
											<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
											</el-option>
									</el-select>
									</span>
								</p>
							</div>
							<span slot="footer" class="">
								<el-button type="primary" @click="dialogVisible = false">立即发送</el-button>
								<el-button @click="dialogVisible = false">重 置</el-button>
							</span>
						</el-dialog>

						<el-dialog title="查看通知" :visible.sync="dialogVisible1" width="60%" :before-close="handleClose">
							<div class="lh">
								<p style="position: relative;top: -77px;">通知内容 :
									<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 3}" placeholder="各位老师请注意,本周末因为上级检查临时休息,请安排好自己的工作,谢谢!"
									 class="i" :disabled="true">
									</el-input>
								</p>
								<p>
									<span>发送用户 : <el-button type="info" size="mini" style="margin-left: 20px;">授课教师</el-button>
										<el-button type="info" size="mini">业务教师</el-button>
									</span>
								</p>
								<br />
								<p>发送时间 : 2010-20-10 08:13:12</p>
							</div>
							<span slot="footer" class="" style="position: absolute;left: 370px;top: 300px;">
								<el-button type="primary" @click="dialogVisible1 = false">确定</el-button>
							</span>
						</el-dialog>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "tzgl",
		components: {
			Top
		},
		data() {
			return {
				cc: {},
				input: "",
				list: [{
						user: "各位家长请注意,本周末因为上级检查零时休息,请安排好自己小孩的学习,谢谢！",
						time: "2019-4-14 22:54:10",
						id: '1'
					},
					{
						user: "各位老师请注意,本周末因为上级检查临时休息,请安排好自己的工作,谢谢！",
						time: "2019-4-14 22:55:13",
						id: "2"
					},
					{
						user: "各位家长请注意,本周末因为上级检查零时休息,请安排好自己小孩的学习,谢谢！",
						time: "2019-4-14 22:54:10",
						id: '1'
					},
					{
						user: "各位老师请注意,本周末因为上级检查临时休息,请安排好自己的工作,谢谢！",
						time: "2019-4-14 22:55:13",
						id: "2"
					},
					{
						user: "各位家长请注意,本周末因为上级检查零时休息,请安排好自己小孩的学习,谢谢！",
						time: "2019-4-14 22:54:10",
						id: '1'
					},
					{
						user: "各位老师请注意,本周末因为上级检查临时休息,请安排好自己的工作,谢谢！",
						time: "2019-4-14 22:55:13",
						id: "2"
					},
					{
						user: "各位家长请注意,本周末因为上级检查零时休息,请安排好自己小孩的学习,谢谢！",
						time: "2019-4-14 22:54:10",
						id: '1'
					},
					{
						user: "各位老师请注意,本周末因为上级检查临时休息,请安排好自己的工作,谢谢！",
						time: "2019-4-14 22:55:13",
						id: "2"
					},
					{
						user: "各位家长请注意,本周末因为上级检查零时休息,请安排好自己小孩的学习,谢谢！",
						time: "2019-4-14 22:54:10",
						id: '1'
					},
				],
				dialogVisible: false,
				dialogVisible1: false,
				 options: [{
				          value: '选项1',
				          label: '黄金糕'
				        }, {
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        }, {
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				        value1: [],
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			edit: function(item) {
				this.cc = {
					title: item.title,
					user: item.time,
					time: item.user,
					id: item.id
				}
			}
		},
	}
</script>

<style scoped>
	.zhu {
		width: 1070px;
		height: 710px;
	}

	.zhuti {
		width: 1070px;
		height: 650px;
	}

	.zhong {
		width: 980px;
		height: 650px;
		margin: 10px auto;
	}

	.el {
		padding-left: 18px;
	}

	.in1 {
		width: 460px;
		margin-top: 30px;
	}

	.in {
		width: 200px;
	}

	.in2 {
		width: 240px;
	}

	.zhong p {
		display: inline-block;
		color: grey;
		font-size: 15px;
		padding-left: 15px;
	}

	table {
		width: 1000px;
		margin-top: 15px;
	}

	tr {
		height: 40px;
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

	table tr:hover {
		background-color: #eaeaea;
	}

	table tr td {
		font-size: 13px;
	}

	.lh {
		width: 90%;
		margin: 0 auto;
	}

	.lh p span {
		padding-right: 70px;
	}

	.lh p {
		padding-bottom: 20px;
	}

	.i {
		width: 550px;
		position: relative;
		left: 20px;
		top: 80px;
	}
</style>
