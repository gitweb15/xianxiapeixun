<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="教师管理"></Top>
			<div class="zhong">
				<!-- @click按钮绑定点击事件 -->
				<p>
					<el-button type="primary" @click="dialogVisible = true">新增校区</el-button>
				</p>
				<p>
					<el-button type="primary">导出Excel</el-button>
				</p>

				<p style="float: right;" class="sps">
					<span>教师名称:</span>
					<span>
						<el-input placeholder="请输入内容" class="di">
						</el-input>
					</span>
					<span>
						<el-button type="primary" icon="el-icon-search">搜索</el-button>
					</span>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>教师姓名</td>
							<td>手机号码</td>
							<td>所在校区</td>
							<td>教师类型</td>
							<td>教学学段</td>
							<td>教学科目</td>
							<td>
								操作
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bm}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.xq}}</td>
							<td>{{item.nj}}</td>
							<td>{{item.dj}}</td>
							<td>{{item.rs}}</td>
							<td>
								<a href="#">
									<el-button type="text" @click="dialogVisible = true">{{item.tk}}</el-button>
								</a>
							</td>
						</tr>
					</table>
					<!-- 弹出框 -->
					<el-dialog :visible.sync="dialogVisible" width="70%" title="教师详情">
						<div class="lh">
							<p>
								<span>教师名称 : <el-input placeholder="请输入内容" class="el in"></el-input></span>
								<span>手机号码 : <el-input placeholder="请输入内容" class="el in"></el-input></span>
							</p>
							<p>
								<span>身份证号 : <el-input placeholder="请输入内容" class="el in"></el-input></span>
								<span>联系地址 : <el-input placeholder="请输入内容" class="el in"></el-input></span>
							</p>
							<p>课程封面:<el-button type="info" style="margin-left: 30px;"><i class="el-icon-upload"></i>上传</el-button>
							</p>
							<br />
							<p style="font-size: 13px;position: absolute;top: 245px;left: 150px;">支持文件格式:jpg,jpeg,单次上传文件限制大小2MB</p>
							<p style="margin-top: 15px;">
								<span>所在校区 : <el-select v-model="value1" placeholder="请选择年纪" class="el in">
										<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
										</el-option>
									</el-select></span>
								<span>校区类型 : <el-select v-model="value1" placeholder="请选择年纪" class="el in">
										<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
										</el-option>
									</el-select></span>
							</p>
							<p>
								<span>教学学段 : <el-select v-model="value1" placeholder="请选择年纪" class="el in">
										<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
										</el-option>
									</el-select></span>
								<span>教学科目 : <el-input placeholder="请输入内容" class="el in"></el-input></span>
							</p>
							<p>课程描述
							<el-input
							  type="textarea"
							  :autosize="{ minRows: 4, maxRows: 3}"
							  placeholder="请输入内容"
							  class="i">
							</el-input>
							</p>
						</div>
						<span slot="footer" class="dialog-footer" style="position: relative;left: -395px;">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
					<!-- 分页 -->
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
				value1:'',
				option1:'',
				dialogVisible: false,
				num: 1,
				list: [{
						bm: "授课教师一",
						mc: "18801445543",
						xq: "城南校区",
						nj: "授课教师",
						dj: "初中",
						rs: "语文、历史",
						tk: "查看"
					},
					{
						bm: "授课教师二",
						mc: "18801234456",
						xq: "世贸校区",
						nj: "业务教师",
						dj: "",
						rs: "",
						tk: "查看"
					},
					{
						bm: "授课教师一",
						mc: "18801445543",
						xq: "城南校区",
						nj: "授课教师",
						dj: "初中",
						rs: "语文、历史",
						tk: "查看"
					},
					{
						bm: "授课教师二",
						mc: "18801234456",
						xq: "世贸校区",
						nj: "业务教师",
						dj: "",
						rs: "",
						tk: "查看"
					},
					{
						bm: "授课教师一",
						mc: "18801445543",
						xq: "城南校区",
						nj: "授课教师",
						dj: "初中",
						rs: "语文、历史",
						tk: "查看"
					},
					{
						bm: "授课教师二",
						mc: "18801234456",
						xq: "世贸校区",
						nj: "业务教师",
						dj: "",
						rs: "",
						tk: "查看"
					},
					{
						bm: "授课教师一",
						mc: "18801445543",
						xq: "城南校区",
						nj: "授课教师",
						dj: "初中",
						rs: "语文、历史",
						tk: "查看"
					},
					{
						bm: "授课教师二",
						mc: "18801234456",
						xq: "世贸校区",
						nj: "业务教师",
						dj: "",
						rs: "",
						tk: "查看"
					},
					{
						bm: "授课教师一",
						mc: "18801445543",
						xq: "城南校区",
						nj: "授课教师",
						dj: "初中",
						rs: "语文、历史",
						tk: "查看"
					},
					{
						bm: "授课教师二",
						mc: "18801234456",
						xq: "世贸校区",
						nj: "业务教师",
						dj: "",
						rs: "",
						tk: "查看"
					},
				]

			}

		}
	}
</script>

<style scoped>
	.zhu {
		width: 1110px;
		height: 510px;
	}

	.zhuti {
		width: 1110px;
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
		width: 240px;
	}

	table {
		width: 1100px;
		margin-top: 15px;
	}

	tr {
		height: 45px;
		font-size: 15px;
	}

	tr td {
		text-align: center;
		font-size: 12px;
	}

	table tr:nth-of-type(1) {
		background-color: #d7d7d7;
	}

	.sps span {
		display: inline-block;
	}

	.sps span:nth-of-type(1) {
		color: gainsboro;
		padding-right: 18px;
		font-size: 15px;
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
		width: 640px;
		position: relative;
		left: 20px;
	}
</style>
