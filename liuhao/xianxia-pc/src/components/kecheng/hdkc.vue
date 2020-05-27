<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="活动课程管理"></Top>
			<div style="margin-top: 10px;">
				<p class="p1">校区:</p>
				<el-select v-model="value" placeholder="请选择校区" class="el in">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
				  
				  <p class="p1" style="margin-left: 40px;">课程名称:</p>
				  <div class="in">
					  <el-input v-model="input" placeholder="请输入内容" class="el in"></el-input>
				  </div>
				 
				  
				  <p class="p1" style="margin-left: 35px;">是否活动:</p>
				  <el-select v-model="valuel" placeholder="请选择内容" class="el in">
				      <el-option
				        v-for="item in option"
				        :key="item.valuel"
				        :label="item.label"
				        :value="item.valuel">
				      </el-option>
				    </el-select>
					
					<el-button type="primary" style="margin-left: 40px;">搜索</el-button>
			</div>
			<div>
				<el-dialog title="活动课程管理" :visible.sync="dialogFormVisible">
				  <el-form :model="form">
				    <el-form-item label="设置原价:" :label-width="formLabelWidth">
				      <p style="position: relative;left: -200px;">1500</p>
				    </el-form-item>
				    <el-form-item label="活动价格:" :label-width="formLabelWidth">
						<div class="in">
							<el-input v-model="form.name" autocomplete="off" placeholder="请输入活动内容" style="position: relative;left: -115px;"></el-input>
							<p style="color: red;position: relative;left: -120px;">注意：设置价格及代表参加活动</p>
						</div>
				    </el-form-item>
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
				    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				  </div>
				</el-dialog>
			</div>
			<div>
				<table width="100%" class="tab" cellpadding="0" cellspacing="0">
					<tr class="se">
						<td>选择</td>
						<td>编码</td>
						<td>名称</td>
						<td>校区</td>
						<td>年级</td>
						<td>原价 </td>
						<td>是否参加活动</td>
						<td>活动价</td>
						<td>操作</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr class="se">
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr class="se">
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr class="se">
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr class="se">
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
						</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>BJKC-20190405</td>
						<td>初中一年级班级课程</td>
						<td>城南校区</td>
						<td>初中一年级</td>
						<td>350</td>
						<td>是</td>
						<td>300</td>
						<td>
							<el-button type="text" @click="dialogFormVisible = true">设置活动价</el-button>
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
	export default{
		name:"hdkc",
		components:{
			Top	
		},
		data() {
		      return {
		        options: [{
		          value: '选项1',
		          label: '城南校区'
		        }, {
		          value: '选项2',
		          label: '水榭校区'
		        }, {
		          value: '选项3',
		          label: '世贸校区'
		        }, {
		          value: '选项4',
		          label: '花之南校区'
		        }, {
		          value: '选项5',
		          label: '滨江校区'
		        },{
		          value: '选项6',
		          label: '九洞桥校区'
		        },
				{
				  value: '选项7',
				  label: '万达校区'
				},
				],
				option: [{
				  valuel: '选项1',
				  label: '是'
				}, {
				  valuel: '选项2',
				  label: '否'
				}
				],
				value: '',
				valuel:'',
				input:'',
				 dialogFormVisible: false,
				 form: {
							name:'',
				           date1: '',
				           date2: '',
				           delivery: false,
				           type: [],
				           resource: '',
				           desc: ''
				         },
				         formLabelWidth: '120px'
				}
				}
		}
</script>

<style scoped>
	.zhu{
		width: 1115;
		height: 610px;
		overflow-x: auto;
		text-align: center;
	}
	.zhuti{
		width: 1110px;
	}
	.nei p{
		margin-left: 90px;
		margin-top: 15px;
	}
	.p1{
		display: inline-block;
		color: #999999;
	}
	.el{
		padding-left: 18px;
	}
	.in{
		width: 310px;
		display: inline-block;
	}
	.tab{
		width: 1110px;
		margin-top: 10px;
	}
	.tab tr td{
		text-align: center;
		font-size: 13px;
	}
	.tab tr td span{
		margin-left: 10px;
		color: #0062CC;
		cursor: pointer;
	}
	.in {
		width: 200px;
	}
	.tab tr{
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
