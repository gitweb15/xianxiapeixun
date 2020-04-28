<template>
	<div id="contain">
		<div>
			<p><span style="border: 1px solid limegreen;background: limegreen;"></span>班级课程管理</p>
		</div>
		<div style="margin-left: 50px;">
			<div class="header">
				<button>新增课程</button>
				<button>导出Excel</button>
			</div>
			<el-form :inline="true" :model="formInline" class="demo-form-inline top">
				<el-form-item label="校区" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择校区">
						<el-option label="城南校区" value="城南校区"></el-option>
						<el-option label="水榭校区" value="水榭校区"></el-option>
						<el-option label="世贸校区" value="世贸校区"></el-option>
						<el-option label="花之南校区" value="花之南校区"></el-option>
						<el-option label="滨江校区" value="滨江校区"></el-option>
						<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
						<el-option label="万达校区" value="万达校区"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="年级" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择年级">
						<el-option label="某某某" value="某某某"></el-option>
						<el-option label="某某某" value="某某某"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择状态">
						<el-option label="城南校区" value="城南校区"></el-option>
						<el-option label="水榭校区" value="水榭校区"></el-option>
						<el-option label="世贸校区" value="世贸校区"></el-option>
						<el-option label="花之南校区" value="花之南校区"></el-option>
						<el-option label="滨江校区" value="滨江校区"></el-option>
						<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
						<el-option label="万达校区" value="万达校区"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="width: 15%;">
					<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
				</el-form-item>
			</el-form>

			<el-table ref="multipleTable" :data="tableData" class="select" tooltip-effect="dark" style="width:95%;background: gainsboro;"
			 @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<!-- <el-table-column label="选择" width="120">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column> -->
				<el-table-column prop="no" label="编号" width="120">
				</el-table-column>
				<el-table-column prop="name" label="名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="xiaoqu" label="校区" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="date" label="年级" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="price" label="价格" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="study" label="学习中人数" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="status" label="状态" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="caozuo" label="操作" show-overflow-tooltip>
				</el-table-column>
				<!-- <el-table-column style="margin-right: 30px;" prop="caozuo1" label="" show-overflow-tooltip>
				</el-table-column> -->
			</el-table>
		</div>

		<!-- Form -->
		<!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="课程编码" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="课程名称" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="年级" :label-width="formLabelWidth" style="margin-left: -40px;">
					<el-select v-model="form.region" placeholder="请选择年级" style="width: 200px;">
						<el-option label="小学五年级" value="shanghai"></el-option>
						<el-option label="小学六年级" value="beijing"></el-option>
						<el-option label="初中一年级" value="shanghai"></el-option>
						<el-option label="初中二年级" value="beijing"></el-option>
						<el-option label="初中三年级" value="shanghai"></el-option>
						<el-option label="高中一年级" value="beijing"></el-option>
						<el-option label="高中二年级" value="shanghai"></el-option>
						<el-option label="高中三年级" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth" style="margin-left: -40px;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="课时" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="校区" :label-width="formLabelWidth" style="margin-left: -40px;">城南校区
					<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
				</el-form-item>
				<el-form-item label="授课教师" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 20px;">
					<el-input v-model="form.name" autocomplete="off" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="立即开课" :label-width="formLabelWidth" style="margin-left: -40px;">
					<el-radio v-model="form.name" autocomplete="off" checked='checked'>是</el-radio>
					<el-radio v-model="form.name" autocomplete="off">否</el-radio>
					<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
				</el-form-item>
				<el-form-item label="课程描述" :label-width="formLabelWidth" style="width: 400px;margin-left: -40px;">
					<el-input type="textarea" :rows="5" :cols="44" v-model="form.desc" placeholder="请输入详情描述"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				},
				tableData: [{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未开课',
						caozuo: '编辑 停课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未开课',
						caozuo: '编辑 停课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未开课',
						caozuo: '编辑 停课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '未开课',
						caozuo: '编辑 停课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '滨江校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					}
				],
				multipleSelection: [],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
			}
		},

		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},

		}
	}
</script>
<style scoped>
	el-input {
		width: 20px;
	}

	.header {
		width: 100%;
		height: 50px;
		color: #FFFFFF;
		position: relative;
	}

	.header button:nth-child(1) {
		border-radius: 8px;
		width: 80px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	.header button:nth-child(2) {
		border-radius: 8px;
		width: 80px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	.el-checkbox__inner {
		display: none;
	}

	.top {
		margin-top: 20px;
	}
</style>





<!-- 
<template>
	<div id="table">
		<div class="el">
			<el-form :inline="true" :model="formInline" class="demo-form-inline top">
				<el-form-item label="校区" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择校区">
						<el-option label="城南校区" value="城南校区"></el-option>
						<el-option label="水榭校区" value="水榭校区"></el-option>
						<el-option label="世贸校区" value="世贸校区"></el-option>
						<el-option label="花之南校区" value="花之南校区"></el-option>
						<el-option label="滨江校区" value="滨江校区"></el-option>
						<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
						<el-option label="万达校区" value="万达校区"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="年级" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择年级">
						<el-option label="某某某" value="某某某"></el-option>
						<el-option label="某某某" value="某某某"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择状态">
						<el-option label="城南校区" value="城南校区"></el-option>
						<el-option label="水榭校区" value="水榭校区"></el-option>
						<el-option label="世贸校区" value="世贸校区"></el-option>
						<el-option label="花之南校区" value="花之南校区"></el-option>
						<el-option label="滨江校区" value="滨江校区"></el-option>
						<el-option label="九洞桥校区" value="九洞桥校区"></el-option>
						<el-option label="万达校区" value="万达校区"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="width: 15%;">
					<el-button type="primary" @click="onSubmit">搜索</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="header">
			<button>新增课程</button>
			<button>导出Excel</button>
		</div>
		<div class="add">
			<input type="text" v-model="addDetail.no" name='no' placeholder="发布内容" />
			<input type="text" v-model="addDetail.name" name='name' placeholder="发布人" />
			<input type="text" v-model="addDetail.xiaoqu" name='xiaoqu' placeholder="发布时间" />
			<input type="text" v-model="addDetail.price" name='price' placeholder="发布时间" />
			<button @click="add">新增</button>
		</div>
		<table cellpadding="0" cellspacing="0">
			<thead>
				<tr>
					<th>选择</th>
					<th>编号</th>
					<th>名称</th>
					<th>校区</th>
					<th>年级</th>
					<th>价格</th>
					<th>学习中人数</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in newslist" :key='index'>
					<td width="5%"><input type="checkbox"></td>
					<td width="15%">{{item.no}}</td>
					<td width="15%">{{item.name}}</td>
					<td width="15%">{{item.xiaoqu}}</td>
					<td width="10%">{{item.class}}</td>
					<td width="10%">{{item.price}}</td>
					<td width="10%">{{item.study}}</td>
					<td width="10%">{{item.status}}</td>
					<td width="25%">
						<span @click="deletelist(item.id,index)" class="delete">删除</span>
						<span class="edit" @click="edit(item)">编辑</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div id="mask" v-if="editlist">
			<div class="mask">
				<div class="title">
					编辑
					<span @click="editlist=false">X</span>
				</div>
				<div class="content">
					<input type="text" v-model="editDetail.no" name='no' value="" placeholder="标题" />
					<input type="text" v-model="editDetail.name" name='name' value="" placeholder="发布人" />
					<input type="text" v-model="editDetail.xiaoqu" name='xiaoqu' value="" placeholder="发布时间" />
					<button @click="update">更新</button>
					<button @click="editlist=false">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "menberClass",
		data() {
			return {
				addDetail: {},
				editlist: false,
				editDetail: {},
				newslist: [{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
					{
						no: 'BJKC20190405',
						name: '初中一年级班级课程',
						xiaoqu: '城南校区',
						date: '初中一年级',
						price: '350',
						study: '12',
						status: '已开课',
						caozuo: '编辑 开课'
					},
				],
				editid: ''
			}
		},
		mounted() {

		},
		methods: {
			add: function() {
				this.newslist.push({
					title: this.addDetail.no,
					user: this.addDetail.name,
					dates: this.addDetail.xiaoqu,
				})
			},
			// 删除
			deletelist: function(id, i) {
				this.newslist.splice(i, 1)
			},
			// 编辑
			edit: function(item) {
				this.editDetail = {
					title: item.no,
					user: item.name,
					dates: item.xiaoqu,
					id: item.id,
				}
				this.editlist = true
				this.editid = item.id
			},
			// 更新
			update: function() {
				let _this = this;
				for (let i = 0; i < _this.newslist.length; i++) {
					if (_this.newslist[i].id == this.editid) {
						_this.newslist[i] = {
								title: _this.editDetail.no,
								user: _this.editDetail.name,
								dates: _this.editDetail.xiaoqu,
								id: this.editid
							},
							this.editlist = false;
					}
				}
			}
		}
	}
</script>
<style>
	.header {
		width: 100%;
		height: 50px;
		color: #FFFFFF;
		position: relative;
	}

	.header button:nth-child(1) {
		border-radius: 8px;
		width: 120px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	.header button:nth-child(2) {
		border-radius: 8px;
		width: 120px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	#table table {
		width: 100%;
		font-size: 14px;
		border: 1px solid #E1E1E1;
	}

	#table {
		padding: 0px 10px;
	}

	table thead th {
		background: #f5f5f5;
		padding: 10px;
		text-align: left;
	}

	table tbody td {
		padding: 10px;
		text-align: left;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #EEEEEE;
	}

	table tbody td span {
		margin: 0 10px;
		cursor: pointer;
	}

	.delete {
		color: red;
	}

	.edit {
		color: #008;
	}

	.add {
		border: 1px solid #EEEEEE;
		margin: 10px 0;
		padding: 15px;
	}

	input {
		border: 1px solid #EEEEEE;
		padding: 5px;
		border-radius: 3px;
		margin-right: 15px;
	}

	button {
		color: #008;
		border: 0px;
		padding: 4px 15px;
		border-radius: 3px;
		color: #FFFFFF;
	}

	#mark {
		background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100px;
		position: fixed;
		z-index: 4;
		top: 0px;
		left: 0px;
	}

	.title {
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.title span {
		float: right;
		cursor: pointer;
	}

	.content {
		padding: 10px;
	}

	.content input {
		width: 270px;
		margin-bottom: 15px;
	}
</style>
 -->
