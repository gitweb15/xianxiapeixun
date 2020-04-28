<template>
	<div>
		<Header2></Header2>
		<div>
			<bian></bian>
		</div>
		<div class="zhu">
			<div class="zhuti">
				<Header title="校区管理"></Header>
				<div style="margin-top: 13px;">
					<el-button type="primary" @click="centerDialogVisible = true">新增校区</el-button>
					<el-button type="primary" style="margin-bottom: 10px;">导出Excel</el-button>
				</div>
				<div>
					<el-dialog :visible.sync="centerDialogVisible" width="80%" center style="margin-left: 150px;" show-close="false">
						<p style="font-size: 15px;margin-top: -20px;">校区详情</p>
						<div class="lh">
							<p class="p1" style="margin-left: 40px;">校区名称: 
							<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
							</p>
							<p class="p1" style="margin-left: 80.0px;">校区地址: 
							<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
							</p>
							<br />
							<p class="p1" style="margin-left: 40px;">联系方式: 
							<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
							</p>
						</div>
						<span slot="footer" class="dialog-footer">
							<el-button type="primary" @click="centerDialogVisible = false">保存</el-button>
							<el-button @click="centerDialogVisible = false">重置</el-button>
						</span>
					</el-dialog>
				</div>
				<div>
					<!-- <table width="100%" class="tab" cellpadding="0" cellspacing="0">
						<tr class="se">
						<td>序</td>
						<td>校区名称</td>
						<td>校区地址</td>
						<td>联系方式</td>
						<td>修改</td>
						</tr>
							<tr v-for="(item, index) of slist" :key="index">
								<td>
									{{index+1}}
								</td>
								<td width="25%">
									{{item.title}}
								</td>
								<td width="35%">
									{{item.dz}}
								</td>
								<td>
									{{item.phone}}
								</td>
								<td>
									<span>修改</span>
								</td>
							</tr>
					</table> -->
					<el-table :data="slist.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 1179px"
					 :header-cell-style="tableHeaderColor" :row-class-name="tableRowClassName">
						<!-- <el-table-column label="选择" type="selection" width="100"></el-table-column> -->
						<el-table-column prop="id" label="编码" width="90"></el-table-column>
						<el-table-column prop="title" label="校区名称" width="330"></el-table-column>
						<el-table-column prop="dz" label="校区地址" width="410"></el-table-column>
						<el-table-column prop="phone" label="联系方式" width="220"></el-table-column>
						<el-table-column label="修改" width="118">
							<template>
								<el-button type="text" @click="centerDialogVisible = true">修改</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style="margin-top: 10px;margin-left: 300px;"></el-pagination>
				</div>
				
			</div>
		</div>
	</div>
</template>


<script>
	import Header from '../../components/Header.vue'
	import Header2 from '../../components/Header2.vue'
	import Bian from '../../components/liu/bian.vue'
	export default {
		name: "cdgl",
		components: {
			Header,
			Header2,
			Bian
		},
		data() {
			return {
				slist: [{
						id: '1',
						title: '城南校区',
						dz: '福清市中联天御财富广场4楼',
						phone: '17746084680'
					},
					{
						id: '2',
						title: '水榭校区',
						dz: '福清市水南车站旁 景园公寓208',
						phone: '0591-85220810'
					},
					{
						id: '3',
						title: '世贸校区',
						dz: '福清市龙山车站 农商银行旁3楼',
						phone: '0591-85211969'
					},
					{
						id: '4',
						title: '花之南校区',
						dz: '福清市玫瑰园27#临街2层',
						phone: '0591-85150106'
					},
					{
						id: '5',
						title: '滨江校区',
						dz: '福清市国际公馆2#2层(大地影院对面)',
						phone: '0591-86550125'
					},
					{
						id: '6',
						title: '九洞桥校区',
						dz: '福清市融侨城17#207.208店面',
						phone: '0591-86550125'
					},
					{
						id: '7',
						title: '万达校区',
						dz: '福清市金辉华府1号楼(宏路中学旁)',
						phone: '0591-85370025'
					}
				],
				centerDialogVisible: false,
				currentPage: 1, //默认显示第一页
				pageSize: 10, //默认每页显示10条
				totalNum: 1000 //总页数
			}
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
					return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left";
				}
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageSize = val; //动态改变
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage = val; //动态改变
			}
		},
		created() {
			this.totalNum = this.slist;
		}
	
	}
</script>

<style>
	.zhu {
		width: 1170;
		height: 610px;
		overflow-x: hidden;

	}

	.zhuti {
		width: 1170px;
		margin-left: 202px;
	}
	.se {
		background-color: #d7d7d7;
	}

	.el {
		padding-left: 18px;
	}

	.in {
		width: 310px;
		position: relative;
		top: -25px;
		left: 60px;
		
	}

	.lh p {
		display: inline-block;
	}
	.el-table .warning-row {
		background: #f2f2f2;
	}

	.el-table .success-row {
		background: white;
	}
	td div{
		text-align: center;
	}
	th div{
		text-align: center;
	}
</style>
