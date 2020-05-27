<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="课表管理"></Top>
			<div class="guan">
				<div style="position: relative;left: -400px;">
					<el-button type="primary">导入Excel</el-button>
					
					
					<el-button type="primary" style="margin-left: 20px;">导出Excel</el-button>
					<a class="sp">下载Excel模板</a>
				</div>
				<div style="margin-top: 10px;position: relative;left: -270px;">
					<p class="p1">校区:</p>
					<el-select v-model="value" placeholder="请选择校区" class="el">
					    <el-option
					      v-for="item in option"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					<p class="p1" style="margin-left: 20px;">教室:</p>
					<el-select v-model="valuel" placeholder="请选择教室" class="el">
					    <el-option
					      v-for="item in options"
					      :key="item.valuel"
					      :label="item.label"
					      :value="item.valuel">
					    </el-option>
					  </el-select>
				</div>
				<el-button type="primary" style="position: relative;left: 400px;top: -40px;">搜索</el-button>
				</div>
			</div>
			<div class="ta">
					<table cellpadding="0" cellspacing="0">
						<tr style="background-color: #f2f2f2;">
							<td></td>
							<td colspan="5">星期一</td>
							<td colspan="5">星期二</td>
							<td colspan="5">星期三</td>
							<td colspan="5">星期四</td>
							<td colspan="5">星期五</td>
						</tr>
						<tr>
							<td>教室/节次</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
						</tr>
						<tr>
							<td>滨江教室一</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							
						</tr>
						<tr>
							
						</tr>
						<tr>
							<td></td>
						</tr>
						<tr>
							<td></td>
						</tr>
						<tr>
							<td></td>
						</tr>
						<tr>
							<td></td>
						</tr>
					</table>
			</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default{
		name:"kbgl",
		components:{
			Top
		},
		data() {
		      return {
		        options: [{
		          valuel: '选项1',
		          label: '教室01'
		        }, {
		          valuel: '选项2',
		          label: '教师02'
		        }, {
		          valuel: '选项3',
		          label: '教师03'
		        }, {
		          valuel: '选项4',
		          label: '展示当前校区所有教室'
		        },
				],
				option: [{
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
				value: '',
				valuel:'',
				}
				}
		}
</script>

<style scoped>
	.zhu{
		width: 1105;
		height: 610px;
		text-align: center;
		overflow: hidden;
	}
	.zhuti{
		width: 1110px;
	}
	.guan{
		width: 950px;
		margin: 0.625rem auto;
		height: 610px;
	
	}
	.ta{
		overflow: auto;
		position: absolute;
		top: 200px;
		overflow: overlay;
	}
	.ta tr td{
		width: 300px;
		height: 50px;
		font-size: 14px;
	}
	.sp{
		display: inline-block;
		color: red;
		text-decoration: underline;
		cursor: pointer;
		margin-top: 8px;
		margin-left: 8px;
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
</style>
