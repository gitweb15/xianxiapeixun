<template>
	<div>
		<div>
<<<<<<< HEAD
			<p><span style="border: 1px solid limegreen;background: limegreen;padding-left: 5px;"></span>活动课程管理</p>
=======
			<p><span style="border: 1px solid limegreen;background: limegreen;"></span>活动课程管理</p>
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline top" style="margin-left: 100px;">
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
<<<<<<< HEAD
				<el-select v-model="formInline.region1" placeholder="请输入内容">
=======
				<el-select v-model="formInline.region" placeholder="请输入内容">
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
					<el-option label="某某某" value="某某某"></el-option>
					<el-option label="某某某" value="某某某"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="是否活动" style="width: 25%;">
<<<<<<< HEAD
				<el-select v-model="formInline.region2" placeholder="请选择内容">
=======
				<el-select v-model="formInline.region" placeholder="请选择内容">
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
					<el-option label="是" value="是"></el-option>
					<el-option label="否" value="否"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item style="width: 15%;">
				<el-button type="primary" @click="dialogFormVisible = true">搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table ref="multipleTable" :data="tableData" class="select" tooltip-effect="dark" style="width:90%;background: gainsboro;margin-left: 100px;"
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
			<el-table-column prop="price" label="原件" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="study" label="是否活动" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="status" label="活动价" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="caozuo" label="操作" show-overflow-tooltip>
<<<<<<< HEAD
				<span @click="dialogFormVisible = true" style="color: blue;">设置活动价</span>
				<!-- <span style="padding-left: 10px;color: blue;">查看</span> -->
=======
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
			</el-table-column>
			<!-- <el-table-column style="margin-right: 30px;" prop="caozuo1" label="" show-overflow-tooltip>
			</el-table-column> -->
		</el-table>

		<div class="block" style="text-align: center;margin-top: 30px;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
			 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
			</el-pagination>
		</div>
		<el-dialog title="设置活动价格" :visible.sync="dialogFormVisible">
<<<<<<< HEAD
			<el-form :model="form">
				<el-form-item label="课程原价:" :label-width="formLabelWidth">
					1500
				</el-form-item>
				<el-form-item label="活动价格:" :label-width="formLabelWidth">
					<el-input v-model="form.region" placeholder="请选择活动价格">
					</el-input>
					<p style="color: red;">注意：设置价格则代表参加活动</p>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
			</div>
=======
		  <el-form :model="form">
		    <el-form-item label="课程原价:" :label-width="formLabelWidth">
		      1500
		    </el-form-item>
		    <el-form-item label="活动价格:" :label-width="formLabelWidth">
		      <el-input v-model="form.region" placeholder="请选择活动价格">
		      </el-input>
			  <p style="color: red;">注意：设置价格则代表参加活动</p>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
		  </div>
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
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
					study: '是',
					status: '300',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '滨江校区',
					date: '初中一年级',
					price: '350',
					study: '否',
					status: '',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '城南校区',
					date: '初中一年级',
					price: '350',
					study: '是',
					status: '300',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '滨江校区',
					date: '初中一年级',
					price: '350',
					study: '否',
					status: '',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '城南校区',
					date: '初中一年级',
					price: '350',
					study: '是',
					status: '300',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '滨江校区',
					date: '初中一年级',
					price: '350',
					study: '否',
					status: '',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '城南校区',
					date: '初中一年级',
					price: '350',
					study: '是',
					status: '300',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, {
					no: 'BJKC20190405',
					name: '初中一年级班级课程',
					xiaoqu: '滨江校区',
					date: '初中一年级',
					price: '350',
					study: '否',
					status: '',
<<<<<<< HEAD
					
=======
					caozuo: '设置活动价'
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
				}, ],
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
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>
<style>
</style>
