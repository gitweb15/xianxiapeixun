<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="优惠卷管理"></Top>
			<div class="zhong">
				<p>用户名称:<el-input placeholder="请输入内容" class="el in"></el-input></p>
				<p>使用状态:<el-select v-model="value1" placeholder="请选择内容" class="el">
						<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
						</el-option>
					</el-select></p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>序</td>
							<td>用户昵称</td>
							<td>优惠卷金额</td>
							<td>获取途径</td>
							<td>获取时间</td>
							<td>到账时间</td>
							<td>使用状态</td>
							<td>
								使用订单
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bm}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.xq}}</td>
							<td>{{item.nj}}</td>
							<td>{{item.dj}}</td>
							<td>{{item.rs}}</td>
							<td>{{item.ks}}</td>
							<td>
								<router-link to="/Order/ddgl" tag="a">
									<el-button type="text" @click="dialogVisible = true">{{item.tk}}</el-button>
								</router-link>
								
							</td>
						</tr>
					</table>
					<!-- <el-dialog
					  :visible.sync="dialogVisible"
					  width="40%"
					  :before-close="handleClose">
					  <p style="margin-left: 110px;">消耗课时:<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="请输入课时数" placeholder="请输入课时数" style="margin-left: 30px;"></el-input-number></p>
					  <span slot="footer" class="dialog-footer" style="position: relative;left: -150px;">
					    <el-button @click="dialogVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					  </span>
					</el-dialog> -->
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "kcxh",
		components: {
			Top
		},
		data() {
			return{
				// dialogVisible: false,
				num: 1,
				option1: [{
					value1: '选项1',
					label: '未使用'
				}, {
					value1: '选项2',
					label: '已使用'
				}
			],
				value1:"",
			list:[
				{
					bm:"1",
					mc:"微信昵称——AVV",
					xq:"50",
					nj:"邀请注册",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"未使用",
					tk:""
				},
				{
					bm:"2",
					mc:"支付宝昵称——ADE",
					xq:"100",
					nj:"退费",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"已使用",
					tk:"20190415001"
				},
				{
					bm:"1",
					mc:"微信昵称——AVV",
					xq:"50",
					nj:"邀请注册",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"未使用",
					tk:""
				},
				{
					bm:"2",
					mc:"支付宝昵称——ADE",
					xq:"100",
					nj:"退费",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"已使用",
					tk:"20190415001"
				},
				{
					bm:"1",
					mc:"微信昵称——AVV",
					xq:"50",
					nj:"邀请注册",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"未使用",
					tk:""
				},
				{
					bm:"2",
					mc:"支付宝昵称——ADE",
					xq:"100",
					nj:"退费",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"已使用",
					tk:"20190415001"
				},
				{
					bm:"1",
					mc:"微信昵称——AVV",
					xq:"50",
					nj:"邀请注册",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"未使用",
					tk:""
				},
				{
					bm:"2",
					mc:"支付宝昵称——ADE",
					xq:"100",
					nj:"退费",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"已使用",
					tk:"20190415001"
				},
				{
					bm:"1",
					mc:"微信昵称——AVV",
					xq:"50",
					nj:"邀请注册",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"未使用",
					tk:""
				},
				{
					bm:"2",
					mc:"支付宝昵称——ADE",
					xq:"100",
					nj:"退费",
					dj:"2019-4-24 13:29:12",
					rs:"2019-6-24 13:29:12",
					ks:"已使用",
					tk:"20190415001"
				},
			]
				
			}
			
				}
				}
</script>

<style scoped>
	.zhu {
		width: 1090px;
		height: 510px;
	}

	.zhuti {
		width: 1090px;
		height: 510px;
	}

	.zhong {
		margin-top: 10px;
	}

	.zhong p {
		display: inline-block;
		padding-right: 15px;
	}

	.el {
		padding-left: 18px;
	}

	.in {
		width: 200px;
	}

	table {
		width: 1100px;
		margin-top: 15px;
	}

	tr {
		height: 45px;
		font-size: 16px;
	}

	tr td {
		text-align: center;
		font-size: 13px;
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
	table tr:hover{
		background-color: #eaeaea;
	}
</style>


