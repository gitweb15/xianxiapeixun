<template>
	<div id="contain">
<!-- 		<div class="p">
			<p><span style="border: 1px solid limegreen;background: limegreen;padding-left: 5px;"></span>班级课程活动管理</p>
		</div> -->
		<div style="margin-left: -20px;">
			<top title='班级课程活动管理'></top>
			<div style="margin-left: 40px;">
				<el-button type="primary" @click="dialogFormVisible = true">新增活动</el-button>
			</div>
			<el-table ref="multipleTable" :data="tableData" class="select" tooltip-effect="dark" style="width:95%;background: red;margin-top: 30px;"
			 @selection-change="handleSelectionChange" :header-cell-style="tableHeaderColor">
				<el-table-column prop="no" label="序" width="140">
				</el-table-column>
				<el-table-column prop="name" label="活动名称" width="270">
				</el-table-column>
				<el-table-column prop="xiaoqu" label="开始时间" width="230">
				</el-table-column>
				<el-table-column prop="date" label="结束时间" width="230">
				</el-table-column>
				<el-table-column prop="price" label="查看" width="90">
					<span @click="dialogFormVisible = true" style="color: blue;">修改</span>
					<!-- <span style="padding-left: 10px;color: blue;">查看</span> -->
					<router-link style="padding-left: 10px;color: blue;" to='/click'>查看</router-link>
				</el-table-column>
				<el-table-column style="" prop="caozuo1" label="" show-overflow-tooltip>

				</el-table-column>
			</el-table>
		</div>

		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="活动管理" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;font-weight: bold;">
					<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input> -->
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" style="width: 10%;margin-right: 570px;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="活动开始时间" :label-width="formLabelWidth" style="width: 50%;margin-right: 530px;">
					<!-- <el-time-select v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-time-select> -->
					<el-date-picker v-model="value" type="date" placeholder="点击选择时间">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="活动结束时间" :label-width="formLabelWidth">
					<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input> -->
					<el-date-picker v-model="value1" type="date" placeholder="点击选择时间">
					</el-date-picker>
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
	import top from '../Top.vue'
	export default {
		data() {
			return {
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value: '',
				formInline: {
					user: '',
					region: ''
				},
				tableData: [{
						no: '1',
						name: '2018六六续班节',
						xiaoqu: '2018.6.1',
						date: '2018.6.10',
						// price: '修改 查看'
					},
					{
						no: '2',
						name: '2018双十二报班节',
						xiaoqu: '2018.12.12',
						date: '2018.12.12',
						//price: '修改 查看'
					},
					{
						no: '1',
						name: '2018六六续班节',
						xiaoqu: '2018.6.1',
						date: '2018.6.10',
						//price: '修改 查看'
					},
					{
						no: '2',
						name: '2018双十二报班节',
						xiaoqu: '2018.12.12',
						date: '2018.12.12',
						//price: '修改 查看'
					},
					{
						no: '1',
						name: '2018六六续班节',
						xiaoqu: '2018.6.1',
						date: '2018.6.10',
						//price: '修改 查看'
					},
					{
						no: '2',
						name: '2018双十二报班节',
						xiaoqu: '2018.12.12',
						date: '2018.12.12',
						//price: '修改 查看'
					},
					{
						no: '1',
						name: '2018六六续班节',
						xiaoqu: '2018.6.1',
						date: '2018.6.10',
						//price: '修改 查看'
					},
					{
						no: '2',
						name: '2018双十二报班节',
						xiaoqu: '2018.12.12',
						date: '2018.12.12',
						//price: '修改 查看'
					},
					{
						no: '1',
						name: '2018六六续班节',
						xiaoqu: '2018.6.1',
						date: '2018.6.10',
						//price: '修改 查看'
					},
					{
						no: '2',
						name: '2018双十二报班节',
						xiaoqu: '2018.12.12',
						date: '2018.12.12',
						//price: '修改 查看'
					},
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
		components:{
			top
		},
		methods: {
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			  if (rowIndex === 0) {
			    return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;";
			  } else {
			    return "height:100px;";
			  }
			},
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
	.p p {
		padding-top: 20px;
		text-align: left;
		margin-left: 0px;
	}

	el-input {
		width: 20px;
	}

	.header {
		width: 97%;
		height: 50px;
		color: #FFFFFF;
		margin-left: 25px;
		position: relative;
		margin-top: 0px;
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

	/* #contain{
		text-align: center;
	} */
</style>
