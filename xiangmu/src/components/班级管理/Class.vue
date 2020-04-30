<template>
	<div>
		<header id="header">
			<button>{{title}}</button>
			<button>{{title1}}</button>
		</header>
		<div id="contain">
			<h2>班级基本信息</h2>
			<ul class="ulli">
				<li>课程编号：BJKC-20190405</li>
				<li>课程名称：初中一年级班级课程</li>
				<li>课程编号：BJKC-20190405-01</li>
				<li>班级名次：<input placeholder="请输入内容" /></li>
			</ul>
		</div>
		<div id="main">
			<div id="contain">
				<h2>班级成员信息</h2>
				<p>选择学生</p>
				<div id="table">
					<el-form :inline="true" :model="formInline" class="demo-form-inline">
						<el-form-item label="学段" style="width: 25%;">
							<el-select v-model="formInline.region" placeholder="请选择">
								<el-option label="小学" value="小学"></el-option>
								<el-option label="初中" value="初中"></el-option>
								<el-option label="高中" value="高中"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="年级" style="width: 25%;">
							<el-select v-model="formInline.region" placeholder="请选择">
								<el-option label="某某某" value="某某某"></el-option>
								<el-option label="某某某" value="某某某"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="关键字" style="width: 25%;">
							<el-input v-model="formInline.user" placeholder="姓名"></el-input>
						</el-form-item>
						<el-form-item style="width: 15%;">
							<el-button type="primary" @click="onSubmit">搜索</el-button>
						</el-form-item>
					</el-form>
					<el-table ref="multipleTable" v-model="tableData" :data="tableData" tooltip-effect="dark" style="width: 60%;border:1px solid #E1E1E1;"
					 @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="学生姓名" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column prop="name" label="所在年级" width="120">
						</el-table-column>
						<el-table-column prop="address" label="所在班级" show-overflow-tooltip>
						</el-table-column>
					</el-table>
				</div>
			</div>
			<div class="right">
				<p style="padding-left: 10px;">已选择学生</p>
				<button>取消</button>
				<button>保存</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'Class',
		props: {
			title: {
				type: String,
				default: '保存'
			},
			title1: {
				type: String,
				default: '取消'
			}
		},
		data() {
			return {
				// checkboxGroup1: ['上海'],
				// checkboxGroup2: ['上海'],
				// cities: cityOptions,
				formInline: {
					user: '',
					region: ''
				},
				tableData: [{
					date: '学生姓名',
					name: '学段',
					address: '年级'
				}, {
					date: '学生姓名',
					name: '学段',
					address: '年级'
				}, {
					date: '学生姓名',
					name: '学段',
					address: '年级'
				}, {
					date: '学生姓名',
					name: '学段',
					address: '年级'
				}, {
					date: '学生姓名',
					name: '学段',
					address: '年级'
				}, {
					date: '学生姓名',
					name: '学段',
					address: '年级'
				}],
				multipleSelection: []
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
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style scoped>
	.right button {
		
		margin-top: 300px;
	}
	
	.right button:nth-child(2) {
		border-radius: 5px;
		width: 100px;
		height: 30px;
		background: white;
		color: red;
		border: 1px solid red;
	}
	
	.right button:nth-child(3) {
		border-radius: 5px;
		width: 100px;
		height: 30px;
		border: 1px solid skyblue;
		margin-left: 10px;
		float: right;
		color: skyblue;
		background: #FFFFFF;
	}
	
	.right {
		margin-top: -338px;
		/* display: block; */
		color: black;
		border: 1px solid #EEEEEE;
		width: 25%;
		height: 335px;
		background: white;
		margin-right: 162px;
		/* /* margin-right: 400px; */
		float: right;
	}
	
	#contain {
		margin-top: 30px;
		border: 1px solid #FFFFFF;
		box-shadow: 0px 2px 25px gainsboro;
		/* 	margin-left: 30px; */
		padding-left: 20px;
	}
	input {
		height: 40px;
		padding-left: 10px;
		width: 300px;
	}
	
	#contain {
		margin-top: 30px;
		border: 1px solid #FFFFFF;
		box-shadow: 0px 2px 25px gainsboro;
	}
	
	h2 {
		margin-left: 20px;
	}
	
	.ulli li {
		width: 500px;
		line-height: 50px;
		list-style: none;
		display: inline-block;
	}
	
	.ulli {
		margin-left: -20px;
	}
	#header {
		width: 100%;
		height: 50px;
		color: #FFFFFF;
		position: relative;
	}

	#header button:nth-child(1) {
		border-radius: 8px;
		width: 80px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	#header button:nth-child(2) {
		border-radius: 8px;
		width: 80px;
		box-shadow: 0px 2px 25px skyblue;
		height: 50px;
		margin-left: 10px;
		color: blue;
		background: #FFFFFF;
	}
</style>
