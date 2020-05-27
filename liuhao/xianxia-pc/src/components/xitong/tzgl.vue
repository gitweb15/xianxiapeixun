<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="通知管理"></Top>
			<div class="zhong">
				<p>通知名称:<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p>发送用户:
					<el-select v-model="value" placeholder="请选择根菜单" class="el">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p>
					<el-button type="primary" style="margin-left: 240px;">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>通知名称</td>
							<td>通知内容</td>
							<td>发送用户</td>
							<td>操作</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td width="15%">{{item.title}}</td>
							<td width="65%">{{item.user}}</td>
							<td width="15%">{{item.time}}</td>
							<td width="15%">
								<a href="#" @click="edit(item)">
									<el-button type="text" @click="dialogVisible = true">编辑</el-button>
								</a>
							</td>
						</tr>
					</table>
					<el-dialog title="通知编辑" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
						<div>
							<p>通知标题:<el-input v-model="cc.title" placeholder="请输入内容" class="in el"></el-input>
							</p>
							<p>发送用户:<el-input v-model="cc.user" placeholder="请输入内容" class="in el"></el-input>
							</p>
							<p><span style="position: relative;top: -150px;">通知内容:</span><el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="cc.time" class="in1 el">
								</el-input>
							</p>
						</div>
						<span slot="footer" class="">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
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
				value: '',
				options: [{
					value: '选项1',
					label: '家长'
				}, {
					value: '选项2',
					label: '授课教师'
				}, {
					value: '选项3',
					label: '业务教师'
				}],
				list: [{
						title: "报名成功通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!",
						time: "家长",
						id: '1'
					},
					{
						title: "考勤未到通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!未到,请确认",
						time: "家长",
						id: "2"
					},
					{
						title: "课程准备通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!",
						time: "家长",
						id: "3"
					},
					{
						title: "课程结束通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!未到,请确认",
						time: "家长",
						id: "4"
					},
					{
						title: "报名成功通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!",
						time: "家长",
						id: "5"
					},
					{
						title: "考勤未到通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!未到,请确认",
						time: "家长",
						id: "6"
					},
					{
						title: "报名成功通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!",
						time: "家长",
						id: "7"
					},
					{
						title: "考勤未到通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!未到,请确认",
						time: "家长",
						id: "7"
					},
					{
						title: "报名成功通知",
						user: "亲爱的[UserName],您报名的[CourseDate]课程即将上课,请做好上课准备!",
						time: "家长",
						id: "8"
					}
				],
				dialogVisible: false,
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
	table tr td{
		font-size: 13px;
	}
</style>
