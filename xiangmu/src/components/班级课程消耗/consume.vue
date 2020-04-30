<template>
	<div id="contain">
		<div>
			<p><span style="border: 1px solid limegreen;background: limegreen;padding-left: 5px;"></span>班级课程消耗</p>
		</div>
		<div style="margin-left: 60px;">
			<div class="header">
				<button @click="dialogFormVisible1=true">批量消耗</button>
				<button @click="dialogFormVisible=true">批量设置自动消耗</button>
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
						<el-option label="小学五年级" value="小学五年级"></el-option>
						<el-option label="小学六年级" value="小学六年级"></el-option>
						<el-option label="初中一年级" value="初中一年级"></el-option>
						<el-option label="初中二年级" value="初中二年级"></el-option>
						<el-option label="初中三年级" value="初中三年级"></el-option>
						<el-option label="高中一年级" value="高中一年级"></el-option>
						<el-option label="高中二年级" value="高中二年级"></el-option>
						<el-option label="高中三年级" value="高中三年级"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态" style="width: 30%;">
					<el-select v-model="formInline.region" placeholder="请选择状态">
						<el-option label="进行中" value="进行中"></el-option>
						<el-option label="已选择" value="已选择"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="width: 15%;">
					<el-button type="primary">搜索</el-button>
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
				<el-table-column prop="price" label="单件" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="active" label="学习中人数" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="jiage" label="本周已消耗课时" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="caozu" label="操作" show-overflow-tooltip>
					<span style="color:blue" @click="dialogFormVisible2=true">消耗</span>
					<span style="color:blue;margin-left: 20px;" @click="dialogFormVisible3=true">消耗规则</span>
				</el-table-column>
			</el-table>
		</div>

		<el-dialog :visible.sync="dialogFormVisible" class='dialog-footer'>
			每周自动消耗课时：<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数" placeholder='请输入课时数'></el-input-number>
			<div slot="footer" class="dialog-footer">
				<button @click="dialogFormVisible = false">保 存</button>
				<button type="primary" @click="dialogFormVisible = false">取 消</button>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogFormVisible1" class='dialog-footer'>
			消耗课时：<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数" placeholder='请输入课时数'></el-input-number>
			<div slot="footer" class="dialog-footer">
				<button @click="dialogFormVisible1 = false">保 存</button>
				<button type="primary" @click="dialogFormVisible1 = false">取 消</button>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogFormVisible2" class='dialog-footer'>
			消耗课时：<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数" placeholder='请输入课时数'></el-input-number>
			<div slot="footer" class="dialog-footer">
				<button @click="dialogFormVisible1 = false">保 存</button>
				<button type="primary" @click="dialogFormVisible1 = false">取 消</button>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogFormVisible3" class='dialog-footer'>
			每周自动消耗课时：<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数" placeholder='请输入课时数'></el-input-number>
			<div slot="footer" class="dialog-footer">
				<button @click="dialogFormVisible1 = false">保 存</button>
				<button type="primary" @click="dialogFormVisible1 = false">取 消</button>
			</div>
		</el-dialog>
		<!-- 分页 -->
		<div class="block" style="text-align: center;">
			<!-- <span class="demonstration">直接前往</span> -->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
			 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: 1,
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
						active: '12',
						jiage: '0',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '2',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '0',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '2',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '0',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '2',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '0',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '2',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '城南校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '0',

					},
					{
						no: '',
						name: 'BKJC-20190405',
						xiaoqu: '初中一年级班级课程',
						date: '滨江校区',
						class: '初中一年级',
						price: '350',
						active: '12',
						jiage: '2',

					},
				],
				multipleSelection: [],
				dialogTableVisible: false,
				dialogFormVisible: false,
				dialogTableVisible1: false,
				dialogFormVisible1: false,
				dialogTableVisible2: false,
				dialogFormVisible2: false,
				dialogTableVisible3: false,
				dialogFormVisible3: false,
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
			handleChange(value) {
				console.log(value);
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
	.dialog-footer {
		text-align: center;
	}

	.dialog-footer button:nth-child(1) {
		border-radius: 8px;
		width: 80px;
		height: 50px;
		color: #FFFFFF;
		background: blue;
	}

	.dialog-footer button:nth-child(2) {
		margin-left: 10px;
		border-radius: 8px;
		width: 80px;
		height: 50px;
		color: black;
		background: white;
	}

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
		width: 150px;
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
