<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="权限管理"></Top>
			<div class="zhong">
				<p class="p1">根菜单:</p>
				<el-select v-model="value" placeholder="请选择根菜单" class="el">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>

				<p class="p1" style="margin-left: 20px;">父菜单:</p>
				<el-select v-model="valuel" placeholder="请选择父菜单" class="el">
					<el-option v-for="item in option" :key="item.valuel" :label="item.label" :value="item.valuel">
					</el-option>
				</el-select>
				<p>菜单名称:<el-input placeholder="请输入内容" class="el in"></el-input>
				</p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>序</td>
							<td>菜单类型</td>
							<td>菜单名称</td>
							<td>父菜单名称</td>
							<td>
								根菜单名称
							</td>
							<td>
								家长
							</td>
							<td>业务教师</td>
							<td>授课教师</td>
						</tr>
						<tr>
							<td>1</td>
							<td>小程序菜单</td>
							<td>课程</td>
							<td></td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>小程序菜单</td>
							<td>消息</td>
							<td></td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>3</td>
							<td>个人中心</td>
							<td>课程</td>
							<td></td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>后台菜单</td>
							<td>首页</td>
							<td></td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>5</td>
							<td>后台菜单</td>
							<td>课程管理</td>
							<td></td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>6</td>
							<td>后台菜单</td>
							<td>课程消耗</td>
							<td></td>
							<td>
								课程管理
							</td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>7</td>
							<td>后台菜单</td>
							<td>课程消耗</td>
							<td>课程管理</td>
							<td>
								课程管理
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
						</tr>
						<tr>
							<td>8</td>
							<td>后台菜单</td>
							<td>班级课程管理</td>
							<td>课程管理</td>
							<td>
								课程管理
							</td>
							<td>

							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>

							</td>
						</tr>
						<tr>
							<td>9</td>
							<td>后台菜单</td>
							<td>晚辅导课程管理</td>
							<td>课程管理</td>
							<td>
								课程管理
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
						</tr>
						<tr>
							<td>10</td>
							<td>后台菜单</td>
							<td>班级课程管理</td>
							<td>课程管理</td>
							<td>
								课程管理
							</td>
							<td>
						
							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>
						
							</td>
						</tr>
						<tr>
							<td>11</td>
							<td>后台菜单</td>
							<td>一对一课程管理</td>
							<td>课程管理</td>
							<td>
								课程管理
							</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>
								<el-checkbox v-model="checked"></el-checkbox>
							</td>
							<td>
								<el-checkbox></el-checkbox>
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
			return {
				checked: true,
				// dialogVisible: false,
				num: 1,
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

	table tr:hover {
		background-color: #eaeaea;
	}
</style>
