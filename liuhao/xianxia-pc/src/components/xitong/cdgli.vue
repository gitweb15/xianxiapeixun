<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="菜单管理"></Top>
			<div style="margin-top: 10px;">
				<p class="p1">根菜单:</p>
				<el-select v-model="value" placeholder="请选择根菜单" class="el">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>

				<p class="p1" style="margin-left: 35px;">父菜单:</p>
				<el-select v-model="valuel" placeholder="请选择父菜单" class="el">
					<el-option v-for="item in option" :key="item.valuel" :label="item.label" :value="item.valuel">
					</el-option>
				</el-select>

				<p class="p1" style="margin-left: 40px;">菜单名称:</p>
				<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>

				<el-button type="primary" style="margin-left: 40px;">搜索</el-button>
			</div>
			<div style="position: relative;left: 20px;top: 10px;">
				<el-button type="primary" @click="dialogVisible = true" style="margin-bottom: 10px;">新增菜单</el-button>
			</div>
			<div>
				<el-dialog title="菜单管理" :visible.sync="dialogVisible" width="80%" :before-close="handleClose" style="margin-left: 100px;">
					<div class="nei">
						<p class="p1" style="margin-left: 26px;">菜单类型:
							<el-select v-model="value2" placeholder="请选择根菜单" class="el">
								<el-option v-for="item in optionl" :key="item.value2" :label="item.label" :value="item.value2">
								</el-option>
							</el-select>
						</p>
						<p class="p1" style="margin-left: 170px;">菜单类型:
							<el-input v-model="input1" placeholder="请输入内容" class="in el"></el-input>
						</p>
						<p class="p1" style="margin-left: 26px;">父菜单名称:
							<el-input v-model="input2" placeholder="请输入内容" class="in el"></el-input>
						</p>
						<p class="p1" style="margin-left: 170px;">根菜单类型:
							<el-select v-model="value3" placeholder="请选择根菜单" class="el">
								<el-option v-for="item in optiono" :key="item.value3" :label="item.label" :value="item.value3">
								</el-option>
							</el-select>
						</p>
						<p class="p1" style="margin-left: 26px;">配置地址:
							<el-input placeholder="请输入内容" class="in1 el"></el-input>
						</p>
						<p class="p1" style="margin-left: 26px;">排序序号:
							<el-input v-model="input2" placeholder="请输入内容" class="in el"></el-input>
						</p>
						<p style="margin-left: 26px;">立即激活:
							<el-radio v-model="radio" label="1">是</el-radio>
							  <el-radio v-model="radio" label="2">否</el-radio>
						</p>
						
					</div>
					<span slot="footer" class="dialog-footer" style="position: relative;left: -420px;">
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						<el-button @click="dialogVisible = false">重 置</el-button>
					</span>
				</el-dialog>
			</div>
			<div>
				<table width="100%" class="tab" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
					<tr class="se">
						<td>序</td>
						<td>菜单类型</td>
						<td>菜单名称</td>
						<td>父菜单名称</td>
						<td>根菜单名称</td>
						<td>地址</td>
						<td>排序序号</td>
						<td>是否激活</td>
						<td>操作</td>

					</tr>
					<tr>
						<td>1</td>
						<td>小程序菜单</td>
						<td>课程</td>
						<td></td>
						<td></td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span @click="dialogVisible = true">修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr class="se">
						<td>2</td>
						<td>小程序菜单</td>
						<td>消息</td>
						<td></td>
						<td></td>
						<td></td>
						<td>2</td>
						<td>否</td>
						<td>
							<span @click="dialogVisible = true">修改</span>
							<span>启用</span>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>小程序菜单</td>
						<td>个人中心</td>
						<td></td>
						<td></td>
						<td></td>
						<td>3</td>
						<td>是</td>
						<td>
							<span @click="dialogVisible = true">修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr class="se">
						<td>4</td>
						<td>后台菜单</td>
						<td>首页</td>
						<td></td>
						<td></td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span @click="dialogVisible = true">修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>后台菜单</td>
						<td>课程管理</td>
						<td></td>
						<td></td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr class="se">
						<td>6</td>
						<td>后台菜单</td>
						<td>首页</td>
						<td></td>
						<td>课程管理</td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr>
						<td>7</td>
						<td>后台菜单</td>
						<td>首页</td>
						<td></td>
						<td>课程管理</td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr class="se">
						<td>8</td>
						<td>后台菜单</td>
						<td>班级课程管理</td>
						<td>课程管理</td>
						<td>课程管理</td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr>
						<td>9</td>
						<td>后台菜单</td>
						<td>晚辅导课程管理</td>
						<td>课程管理</td>
						<td>课程管理</td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr class="se">
						<td>10</td>
						<td>后台菜单</td>
						<td>班级课程管理</td>
						<td>课程管理</td>
						<td>课程管理</td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
					<tr>
						<td>11</td>
						<td>后台菜单</td>
						<td>班级课程管理</td>
						<td>课程管理</td>
						<td>课程管理</td>
						<td></td>
						<td>1</td>
						<td>是</td>
						<td>
							<span>修改</span>
							<span>禁用</span>
						</td>
					</tr>
				</table>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style="margin-top: 10px;"></el-pagination>
			</div>

		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "CDGL",
		components: {
			Top
		},
		data() {
			return {
				 radio: '1',
				options: [{
						value: '选项1',
						label: '首页'
					}, {
						value: '选项2',
						label: '课程管理'
					}, {
						value: '选项3',
						label: '学员管理'
					}, {
						value: '选项4',
						label: '订单管理'
					}, {
						value: '选项5',
						label: '教师管理'
					}, {
						value: '选项6',
						label: '统计分析'
					},
					{
						value: '选项7',
						label: '支付中心'
					},
					{
						value: '选项8',
						label: '系统管理'
					}
				],
				optionl: [{
						value2: '选项1',
						label: '小程序菜单'
					},
					{
						value2: '选项1',
						label: '后台菜单'
					}
				],
				optiono: [{
						value3: '选项1',
						label: '根菜单1'
					},
					{
						value3: '选项1',
						label: '根菜单2'
					}
				],
				option: [{
						valuel: '选项1',
						label: '首页'
					}, {
						valuel: '选项2',
						label: '课程管理'
					}, {
						valuel: '选项3',
						label: '学员管理'
					}, {
						valuel: '选项4',
						label: '订单管理'
					}, {
						valuel: '选项5',
						label: '教师管理'
					}, {
						valuel: '选项6',
						label: '统计分析'
					},
					{
						valuel: '选项7',
						label: '支付中心'
					},
					{
						valuel: '选项8',
						label: '系统管理'
					}
				],
				value: '',
				valuel: '',
				input: '',
				value2: '',
				value3: '',
				input1: '',
				input2: '',
				dialogVisible: false,
				methods: {
					handleClose(done) {
						this.$confirm('确认关闭？')
							.then(_ => {
								done();
							})
							.catch(_ => {});
					}
				}
			}
		}
	}
</script>

<style scoped>
	.zhu {
		width: 1115;
		/* overflow: auto; */
	}

	.zhuti {
		width: 1110px;
		/* margin-left: 202px; */
	}

	.nei p {
		margin-left: 90px;
		margin-top: 15px;
	}

	.p1 {
		display: inline-block;
		color: #999999;
	}

	.el {
		padding-left: 18px;
	}
	.in1{
		width: 700px;
	}

	.in {
		width: 200px;
	}
	
	.tab {}

	.tab tr td {
		text-align: center;
		font-size: 13px;
	}

	.tab tr td span {
		margin-left: 10px;
		color: #0062CC;
		cursor: pointer;
	}

	.tab tr {
		width: 100%;
		height: 44px;

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
