<template>
	<div>
		<Header2></Header2>
		<div>
			<bian></bian>
		</div>
		<div class="zhu">
			<div class="zhuti">
				<Header title="课表管理"></Header>
				<div class="guan">
					<el-button type="primary">导入Excel</el-button>
					<el-button type="primary" style="margin-left: 20px;">导出Excel</el-button>
					<a class="sp">下载Excel模板</a>
					<div style="margin-top: 10px;">
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

<style>
	.zhu{
		width: 1205;
		height: 610px;
		overflow: hidden;
		
	}
	.zhuti{
		width: 1190px;
		margin-left: 202px;
	}
	.guan{
		width: 950px;
		margin: 0.625rem auto;
		height: 610px;
	
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
