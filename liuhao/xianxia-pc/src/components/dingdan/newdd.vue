<template>
	<div class="zhu">
		<p class="hdd"><span></span> 请选择需转校的订单</p>
		<div class="zhuti">
			<div class="zhong">
				<!-- v-model绑定数据 -->
				<p>订单来源: <el-select v-model="value" placeholder="请选择校区" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p>家长手机号:<el-input placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p>
						<span class="demonstration">订单日期:</span>
						<el-date-picker v-model="value1" type="date" placeholder="选择日期" style="margin-left: 15px;">
						</el-date-picker>
				
				</p>
				<p style="float: right;"><el-button type="primary">搜索</el-button></p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>订单编号</td>
							<td>订单来源</td>
							<td>订单日期</td>
							<td>业务教师</td>
							<td>家长手机号</td>
							<td>学员姓名</td>
							<td>课程名称</td>
							<td>学习状态</td>
							<td>订单总价</td>
							<td>操作</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bh}}</td>
							<td>{{item.ly}}</td>
							<td>{{item.rq}}</td>
							<td>{{item.js}}</td>
							<td>{{item.sjh}}</td>
							<td>{{item.xm}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.zt}}</td>
							<td>{{item.zj}}</td>
							<td>
								<router-link to="tuitui" tag="a" target="_blank">
									<el-button type="text">{{item.cz}}</el-button>
								</router-link>
							</td>
						</tr>
					</table>
					
					<!-- 分页 -->
				<el-pagination background
				 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
					 
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"hdkc",
		components:{
		},
		data() {
			return {
				//下拉列表数据
				option: [{
					value: '选项1',
					label: '支付宝'
				}, {
					value: '选项2',
					label: '微信'
				}, {
					value: '选项3',
					label: '业务扫码收款'
				}, {
					value: '选项4',
					label: '业务线下收款'
				}],
				value: '',
				value1: "",
				//时间
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
				},
				//table
				list:[
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:"转校"	
					},
					{
					bh:"20190415002",
					ly:"支付宝小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"已结束",
					zj:"1500",
					cz:""	
					},
					{
					bh:"20190415003",
					ly:"业务扫码收款",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:"转校"	
					},
					{
					bh:"20190415004",
					ly:"业务线下收款",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"已结束",
					zj:"1500",
					cz:""	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:"转校"	
					},
					{
					bh:"20190415002",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:""	
					},
					{
					bh:"20190415003",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:"转校"	
					},
					{
					bh:"20190415004",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:""	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:"转校"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:""	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:"转校"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"学员姓名",
					mc:"课程名称",
					zt:"学习中",
					zj:"1500",
					cz:""	
					},
				]
			}
		}
	}
</script>

<style scoped>
	.hdd{
		width: 100%;
		height: 40px;
		background-color: #f9f9f9;
		font-size: 15px;
		padding-top: 20px;
	}
	.hdd span{
		display: inline-block;
		width: 6px;
		height: 20px;
		background-color: #1abc9c;
	}
	.zhu {
		width: 100%;
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
	.en ul{
		display: inline-block;
	}
	.en ul:nth-of-type(2){
		position: relative;
		top: -120px;
		left: 200px;
	}
	.en ul li{
		line-height: 30px;
	}
	.en ul li span{
		padding-left: 10px;
	}
</style>
