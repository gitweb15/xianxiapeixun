<template>
	<div id="contain">
		<div>
			<!-- <p><span style="border: 1px solid limegreen;background: limegreen;padding-left: 5px;"></span>班级课程消耗</p> -->
			<top title='轮播图管理'></top>
		</div>
		<div style="margin-left: 0px;">
			<el-button type="primary" style='margin-left: 20px;' @click="dialogFormVisible1 = true">新增轮播图</el-button>
		</div>
		<div style="margin-left: -40px;">
			<!-- <div class="header">
 				<button>新增活动</button>
 			</div> -->
			<!-- <span><img src="@/assets/lb1.PNG"/></span> -->
			<el-table ref="multipleTable" :data="tableData" class="select" tooltip-effect="dark" style="width:95%;background: gainsboro;margin-top: 20px;"
			 @selection-change="handleSelectionChange" :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
				</el-table-column>
				<el-table-column prop="name" label="轮播图" width='255'>
					<template>
						<img src="../../assets/lb1.png"/>
					</template>
					<!-- <template>
						<img src="../../assets/lb1.png" style="height: 50px;width: 60%;" />
						<img src="../../assets/lb2.png" style="height: 50px;width: 60%;" />
					</template> -->
				</el-table-column>
				<el-table-column prop="xiaoqu" label="跳转链接" width='255'>
				</el-table-column>
				<el-table-column prop="date" label="是否使用" width='255'>
				</el-table-column>
				<el-table-column prop="caozu" label="操作" width='255'>
					<span style="color:blue" @click="dialogFormVisible2=true">删除</span>
					<span style="color:blue;margin-left: 20px;" @click="dialogFormVisible3=true">停用</span>
				</el-table-column>
			</el-table>
		</div>

		<el-dialog :visible.sync="dialogFormVisible1">
			<el-form :model="form">
				<p style="font-weight: bold;">轮播图编辑</p>
				<el-form-item label="上传轮播图:" :label-width="formLabelWidth" style="margin-left: -40px;margin-top: 40px;">
					<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">点击或拖动文件到此处上传
							<p style="padding-bottom: 20px;">支持文件格式PNG、JPG</p>
						</div>
					</el-upload>
				</el-form-item>

				<el-form-item label="跳转链接:" :label-width="formLabelWidth" style="margin-left: -40px;margin-top: 40px;">
					<el-input v-model="form.name" autocomplete="off" placeholder="请输入内容" style="width: 200px;margin-right: 340px;"></el-input>
				</el-form-item>

				<el-form-item label="立即使用:" :label-width="formLabelWidth" style="margin-left: -40px;">
					<el-radio v-model="form.name" autocomplete="off" checked='checked' style='margin-right: 110px;'>是</el-radio>
					<el-radio v-model="form.name" autocomplete="off" style='margin-right: 10px;'>否</el-radio>
					<!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
				</el-form-item>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">保存</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">重置</el-button>
			</div>
		</el-dialog>
		<!-- 分页 -->
		<div class="block" style="text-align: center;margin-top: 30px;">
			<!-- <span class="demonstration">直接前往</span> -->
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3"
			 :page-size="100" layout="prev, pager, next, jumper" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import top from '../Top.vue'
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
						xiaoqu: 'http://www.yuanyingedu.com/',
						date: '是',
					},
					{

						xiaoqu: 'http://www.yuanyingedu.com/',
						date: '否',
					},
					{


						xiaoqu: 'http://www.yuanyingedu.com/',
						date: '是',
					},
					{

						xiaoqu: 'http://www.yuanyingedu.com/',
						date: '否',
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
				formLabelWidth: '120px',
			
			}
		},
		components: {
			top
		},
		methods: {
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex % 2 == 1) {
					return "warning-row";
				} else {
					return "success-row";
				}
			},
			tableHeaderColor({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (rowIndex === 0) {
					return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;";
				} else {
					return "height:100px;";
				}
			},
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
	.el-table .warning-row {
		background: #f2f2f2;
	}
	
	.el-table .success-row {
		background: white;
	}
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
		color: blue;
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
