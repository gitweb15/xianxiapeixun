<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="分班管理"></Top>
			<!-- v-model绑定数据 -->
			<div class="zhong">
				<p>校区:<el-select v-model="value" placeholder="请选择校区" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p>课程名称:<el-input placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p style="float: right;">
					<el-button type="primary" @click="dialogVisible = true">搜索</el-button>
				</p>
				<el-dialog :visible.sync="dialogVisible" width="60%">
					<div class="liu">
						<p>课程编码<el-input placeholder="请输入内容" class="el in"></el-input>
							<span>
								课程名称<el-input placeholder="请输入内容" class="el in"></el-input>
							</span>
						</p>
						<p style="padding-right: 10px;">
							年级:<el-select v-model="value1" placeholder="请选择年纪" class="el">
								<el-option v-for="item in option" :key="item.value1" :label="item.label" :value="item.value1">
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
						<p style="position: absolute;left: 0px;top: 258px;">立即开课&nbsp;&nbsp;&nbsp;
							<el-radio v-model="radio" label="1">是</el-radio>
							  <el-radio v-model="radio" label="2">否</el-radio>
						</p>
						<p style="padding-right: 10px;position: relative;top: -50px;">课程描述
						<el-input
						  type="textarea"
						  :autosize="{ minRows: 4, maxRows: 3}"
						  placeholder="请输入内容"
						  class="i">
						</el-input>
						</p>
					</div>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					</span>
				</el-dialog>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>课程编码</td>
							<td>课程名称</td>
							<td>校区</td>
							<td>未排课人数</td>
							<td>已分班人数</td>
							<td>
								操作
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.keBian}}</td>
							<td>{{item.className}}</td>
							<td>{{item.xiaoQu}}</td>
							<td>{{item.weiPaiKeNum}}</td>
							<td>{{item.yiFenBanNum}}</td>
							<td>
								<a href="#">
									<el-button type="text" @click="dialogVisible = true">分班</el-button>
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
				//下拉
				dialogVisible: false,
				num: 1,
				radio: '1',
				value:'',
				value1:'',
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
				//下拉
				list: []
			}
		},
		created() {
		  this.axios.get("https://www.fastmock.site/mock/26715f0938dee4fe31526bbe7a2af048/xianxia/xianxia/fenBan").then((res) => {
		    console.log(res);
					  this.list=res.data.data
				
		  });
		
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
	.liu{
		position: relative;
		top: -70px;
	}
	.liu p {
		margin-top: 28px;
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
</style>
