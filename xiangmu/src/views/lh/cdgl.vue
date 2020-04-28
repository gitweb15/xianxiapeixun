<template>
	<div>
		<Header2></Header2>
		<div>
			<bian></bian>
		</div>
		<div class="zhu">
			<div class="zhuti">
				<Header title="菜单管理"></Header>
				<div style="margin-top: 10px;">
					<p class="p1">根菜单:</p>
					<el-select v-model="value" placeholder="请选择根菜单" class="el">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					  
					  <p class="p1" style="margin-left: 35px;">父菜单:</p>
					  <el-select v-model="valuel" placeholder="请选择父菜单" class="el">
					      <el-option
					        v-for="item in option"
					        :key="item.valuel"
					        :label="item.label"
					        :value="item.valuel">
					      </el-option>
					    </el-select>
						
						<p class="p1" style="margin-left: 40px;">菜单名称:</p>
						<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
						
						<el-button type="primary" style="margin-left: 40px;">搜索</el-button>
				</div>
				<div style="margin-top: 10px;">
					<el-button type="primary" @click="dialogVisible = true" style="margin-bottom: 10px;">新增</el-button>
				</div>
				<div>
					<el-dialog
					  title="菜单管理"
					  :visible.sync="dialogVisible"
					  width="80%"
					  :before-close="handleClose" style="margin-left: 100px;">
					 <div class="nei">
						 <p class="p1" style="margin-left: 40px;">菜单类型:
							<el-select v-model="value2" placeholder="请选择根菜单" class="el">
							    <el-option
							      v-for="item in optionl"
							      :key="item.value2"
							      :label="item.label"
							      :value="item.value2">
							    </el-option>
							  </el-select>
						 </p>
						 <p class="p1" style="margin-left: 170px;">菜单类型:
						 <el-input v-model="input1" placeholder="请输入内容" class="in el"></el-input>
						 </p>
						 <p class="p1" style="margin-left: 26px;">父菜单名称:
						 <el-input v-model="input2" placeholder="请输入内容" class="in el"></el-input>
						 </p>
						 <p class="p1" style="margin-left: 75px;">菜单类型:
														<el-select v-model="value3" placeholder="请选择根菜单" class="el">
															<el-option
															  v-for="item in optiono"
															  :key="item.value3"
															  :label="item.label"
															  :value="item.value3">
															</el-option>
														  </el-select>
						 </p>
					 </div>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="dialogVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					  </span>
					</el-dialog>
				</div>
				<div>
					<table width="100%" class="tab" cellpadding="0" cellspacing="0">
						<tr class="se">
						<td>序</td>
						<td>菜单类型</td>
						<td>菜单名称</td>
						<td>父菜单名称</td>
						<td>根菜单名称</td>
						<td>地址</td>
						<td>排序序号</td>
						<td>是否激活</td>
						<td>操作</td>
				
						</tr>
							<tr>
								<td>1</td>
								<td>小程序菜单</td>
								<td>课程</td>
								<td></td>
								<td></td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr class="se">
								<td>2</td>
								<td>小程序菜单</td>
								<td>消息</td>
								<td></td>
								<td></td>
								<td></td>
								<td>2</td>
								<td>否</td>
								<td>
									<span>修改</span>
									<span>启用</span>
								</td>				
							</tr>
							<tr>
								<td>3</td>
								<td>小程序菜单</td>
								<td>个人中心</td>
								<td></td>
								<td></td>
								<td></td>
								<td>3</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr class="se">
								<td>4</td>
								<td>后台菜单</td>
								<td>首页</td>
								<td></td>
								<td></td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr>
								<td>5</td>
								<td>后台菜单</td>
								<td>课程管理</td>
								<td></td>
								<td></td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr class="se">
								<td>6</td>
								<td>后台菜单</td>
								<td>首页</td>
								<td></td>
								<td>课程管理</td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr>
								<td>7</td>
								<td>后台菜单</td>
								<td>首页</td>
								<td></td>
								<td>课程管理</td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr class="se">
								<td>8</td>
								<td>后台菜单</td>
								<td>班级课程管理</td>
								<td>课程管理</td>
								<td>课程管理</td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr>
								<td>9</td>
								<td>后台菜单</td>
								<td>晚辅导课程管理</td>
								<td>课程管理</td>
								<td>课程管理</td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr class="se">
								<td>10</td>
								<td>后台菜单</td>
								<td>班级课程管理</td>
								<td>课程管理</td>
								<td>课程管理</td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
							<tr>
								<td>11</td>
								<td>后台菜单</td>
								<td>班级课程管理</td>
								<td>课程管理</td>
								<td>课程管理</td>
								<td></td>
								<td>1</td>
								<td>是</td>
								<td>
									<span>修改</span>
									<span>禁用</span>
								</td>				
							</tr>
					</table>
					<v-pagination show-quick-jumper :total="500" style="margin-left: 330px;"></v-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/Header.vue'
	import Header2 from '../../components/Header2.vue'
	import Bian from '../../components/liu/bian.vue'
	export default{
		name:"cdgl",
		components:{
			Header,
			Header2,
			Bian	
		},
		 data() {
		      return {
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
		        },{
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
				optionl:[{
					value2: '选项1',
					label: '小程序菜单'
				},
				{
					value2: '选项1',
					label: '后台菜单'
				}],
				optiono:[{
					value3: '选项1',
					label: '根菜单1'
				},
				{
					value3: '选项1',
					label: '根菜单2'
				}],
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
				},{
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
		  //       value: '',
				// valuel:'',
				// input:'',
				// slist:[
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'1',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'2',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'3',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'4',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'5',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'6',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'7',
				// 	},
				// 	{
				// 		title:'小程序菜单',
				// 		name:'课程',
				// 		fcdn:'',
				// 		gcdm:'',
				// 		dress:'',
				// 		px:'1',
				// 		true:'是',
				// 		id:'8',
				// 	}
				// ],
				value: '',
				valuel:'',
				input:'',
				value2:'',
				value3:'',
				input1:'',
				input2:'',
				dialogVisible: false,
				methods: {
				      handleClose(done) {
				        this.$confirm('确认关闭？')
				          .then(_ => {
				            done();
				          })
				          .catch(_ => {});
				      }
				    }
		      }
		    }
	}
</script>
	
<style scoped>
	.zhu{
		width: 1205;
		height: 610px;
		overflow: auto;
		
	}
	.zhuti{
		width: 1190px;
		margin-left: 202px;
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
	}
	.tab{
		
	}
	.tab tr td{
		text-align: center;
		font-size: 14px;
	}
	.tab tr td span{
		margin-left: 10px;
		color: #0062CC;
		cursor: pointer;
	}
	.tab tr{
		width: 100%;
		height: 44px;
		
	}
	.se{
		background-color: #d7d7d7;
	}
</style>
