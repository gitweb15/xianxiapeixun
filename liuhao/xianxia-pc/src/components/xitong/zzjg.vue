<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="组织架构管理"></Top>
			<div class="shu">
				<div class="block" style="position: relative;top: 15px;">
					<el-tree :data="data" node-key="id" :expand-on-click-node="false">
						<span class="custom-tree-node" slot-scope="{ node, data }">
							<span>{{ node.label }}</span>
							<span class="tb">
								<i class="el-icon-circle-plus-outline"></i>
								<i class="el-icon-edit-outline"></i>
							</span>
						</span>
					</el-tree>
				</div>
			</div>
			<div class="guan">
				<p>
					<el-button type="primary" @click="dialogVisible = true">新增用户</el-button>
					<el-button type="primary">导入Excel</el-button>
					<span style="color: red; cursor: pointer;display: inline-block;margin-left: 10px;">Excel 模板下载</span>
				</p>
				<p style="float: right;">
					姓名:<el-input placeholder="请输入内容" class="el in"></el-input>&nbsp;&nbsp;
					<el-button type="primary">搜索</el-button>
				</p>
				<table cellpadding="0" cellspacing="0">
					<tr>
						<td>序</td>
						<td>姓名</td>
						<td>性别</td>
						<td>联系方式</td>
						<td>
							部门
						</td>
						<td>
							修改
						</td>
					</tr>
					<tr v-for="(item,index) in list" :key="index">
						<td>{{item.bm}}</td>
						<td>{{item.mc}}</td>
						<td>{{item.xq}}</td>
						<td>{{item.nj}}</td>
						<td>
							{{item.dj}}</td>
						<td>
							<a href="#">
								<el-button type="text" @click="dialogVisible = true">{{item.tk}}</el-button>
							</a>
						</td>
					</tr>
				</table>
				<el-dialog title="新增用户" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
					<div class="qq">
						<p>所在部门：<el-input placeholder="教育部门一部门一" :disabled="true" class="in1 el">
							</el-input>
						</p>
						<br />
						<p>姓名:<el-input placeholder="请输入内容" class="el in1"></el-input>
						</p>
						<p>联系方式:<el-input placeholder="请输入内容" class="el in1"></el-input>
						</p>
						<p>性别: <el-select v-model="value" placeholder="请选择" class="el in1">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</p>
					</div>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					</span>
				</el-dialog>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	let id = 1000;
	import Top from '../../components/Top.vue'
	export default {
		name: "kbgl",
		components: {
			Top
		},
		data() {
			const data = [{
				id: 1,
				label: '耐寒教育',
				children: [{
						id: 4,
						label: '教育集团',
						children: [{
								id: 9,
								label: '部门 一',
								children: [{
									id: 9,
									label: '部门 一'
								}]
							}, {
								id: 10,
								label: '部门 二',
								children: [{
									id: 9,
									label: '部门 一'
								}]
							},
							{
								id: 10,
								label: '部门 三',
								children: [{
									id: 9,
									label: '部门 一'
								}]
							},
							{
								id: 10,
								label: '部门 四',
								children: [{
									id: 9,
									label: '部门 一'
								}]
							}
						]
					},
					{
						id: 2,
						label: '城南校区',
						children: [{
							id: 5,
							label: '二级 2-1'
						}, {
							id: 6,
							label: '二级 2-2'
						}]
					},
					{
						id: 3,
						label: '水榭校区',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					},
					{
						id: 4,
						label: '世贸校区',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					},
					{
						id: 5,
						label: '花之南校区',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					},
					{
						id: 6,
						label: '滨江校区',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					},
					{
						id: 4,
						label: '九洞桥校区',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					},
					{
						id: 4,
						label: '万达校区',
						children: [{
							id: 7,
							label: '二级 3-1'
						}, {
							id: 8,
							label: '二级 3-2'
						}]
					}
				]
			}];
			return {
				data: JSON.parse(JSON.stringify(data)),
				dialogVisible: false,
				list: [{
						bm: "1",
						mc: "姓名一",
						xq: "男",
						nj: "18877652387",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "姓名二",
						xq: "女",
						nj: "1337658648",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "姓名一",
						xq: "男",
						nj: "18877652387",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "姓名二",
						xq: "女",
						nj: "1337658648",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "姓名一",
						xq: "男",
						nj: "18877652387",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "姓名二",
						xq: "女",
						nj: "1337658648",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "1",
						mc: "姓名一",
						xq: "男",
						nj: "18877652387",
						dj: "部门一",
						tk: "修改"
					},
					{
						bm: "2",
						mc: "姓名二",
						xq: "女",
						nj: "1337658648",
						dj: "部门一",
						tk: "修改"
					}
				],
				options: [{
					value: '选项1',
					label: '男'
				}, {
					value: '选项2',
					label: '女'
				}],
				value: ''

			}
		},
	};
</script>

<style scoped>
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}
	.qq{
		margin-top: -30px;
	}
	.qq p {
		display: inline-block;
		margin-top: 20px;
		padding-right: 50px;
	}

	.tb i {
		padding-left: 1px;
		width: 30px;
	}

	.el {
		padding-left: 18px;
	}

	.in {
		width: 170px;
	}

	.in1 {
		width: 200px;
	}

	.guan {
		width: 680px;
		height: 500px;
		position: relative;
		top: -470px;
		left: 155px;
	}

	.guan p {
		display: inline-block;
	}

	.tb {}

	.zhu {
		width: 100%;
		height: 600px;
	}

	.zhuti {
		width: 100%;
		height: 600px;
	}

	.shu {
		width: 305px;
		height: 500px;
		position: relative;
		left: -350px;
		top: 30px;
		box-shadow: 0px 0 2px 2px #e9e9e9;
		border-radius: 3px;
	}

	table {
		width: 680px;
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
