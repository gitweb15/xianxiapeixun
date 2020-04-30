<template>
	<div id="contain">
		<div>
			<p><span style="border: 1px solid limegreen;background: limegreen;padding-left: 5px;"></span>试学课程管理</p>
		</div>
		<div style="margin-left: 60px;">
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
				<el-form-item label="课程名称" style="width: 25%;">
					<el-select v-model="formInline.region" placeholder="请选择内容">
						<el-option label="某某某" value="某某某"></el-option>
						<el-option label="某某某" value="某某某"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="是否活动" style="width: 30%;">
					<el-select v-model="formInline.region" placeholder="请选择内容">
						<el-option label="是" value="是"></el-option>
						<el-option label="否" value="否"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="width: 15%;">
					<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div style="margin-left: 50px;">
			<!-- <div class="header">
				<button>新增活动</button>
			</div> -->
			<el-table ref="multipleTable" :data="tableData" class="select" tooltip-effect="dark" style="width:95%;background: gainsboro;"
			 @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="name" label="编码" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="xiaoqu" label="名称" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="date" label="校区" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="class" label="年级" width="120">
				</el-table-column>
				<el-table-column prop="price" label="原件" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="active" label="是否参加活动" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="jiage" label="试学价格" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="time" label="试学时间" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="caozu" label="操作" show-overflow-tooltip>
					<span style="color:blue" @click="dialogFormVisible = true">设置试学规则</span>
				</el-table-column>
			</el-table>
		</div>

		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="活动管理" :label-width="formLabelWidth" style="width: 10%;margin-left: -40px;font-weight: bold;">
					<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input> -->
				</el-form-item>
				<el-form-item label="活动名称" :label-width="formLabelWidth" style="width: 10%;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input>
				</el-form-item>
				<el-form-item label="活动开始时间" :label-width="formLabelWidth" style="width: 50%;">
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
		<!-- 分页 -->
		<div class="block" style="text-align: center;">
			<!-- <span class="demonstration">直接前往</span> -->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
			 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>


		<el-dialog :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="设置试学规则:" :label-width="formLabelWidth" style="width: 10%;margin-left:20px;font-weight: bold;font-size: 50px;">
				</el-form-item>
				<el-form-item label="课程原价:" :label-width="formLabelWidth" style="width: 40%;">
					1500
				</el-form-item>
				<el-form-item label="课程原课时:" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;">
					15课时
				</el-form-item>
				<el-form-item label="试学价格:" :label-width="formLabelWidth">
					<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input> -->
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入试学价格" style="width: 195px;"></el-input>
				</el-form-item>
				<el-form-item label="试学课程:" :label-width="formLabelWidth" style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;">
					<!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;"></el-input> -->
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入试学课程"></el-input>
				</el-form-item>
				<p style="color: red;width:50%;position: absolute;left: 140px;bottom: 80px;">注意：设置课时及课时则代表参加课程活动</p>
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
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,
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
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '是',
						jiage: '300',
						time: '3课时',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '否',
						jiage: '',
						time: '',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '是',
						jiage: '300',
						time: '3课时',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '否',
						jiage: '',
						time: '',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '是',
						jiage: '300',
						time: '3课时',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '否',
						jiage: '',
						time: '',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '是',
						jiage: '300',
						time: '3课时',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '否',
						jiage: '',
						time: '',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '是',
						jiage: '300',
						time: '3课时',
					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '否',
						jiage: '',
						time: '',
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
