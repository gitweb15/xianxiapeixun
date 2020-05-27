<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="订单管理"></Top>
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
								<a href="#" @click="edit(item)">
									<el-button type="text" @click="dialogVisible = true">{{item.cz}}</el-button>
								</a>
							</td>
						</tr>
					</table>
					<el-dialog title="订单详情" :visible.sync="dialogVisible" width="80%">
						<div class="en">
							<ul>
								<li>订单编号:<span>123</span></li>
								<li>订单来源:<span>123</span></li>
								<li style="margin-top: 40px;">课程名称:<span>英语个性化一对一教学</span></li>
								<li>课程教师:<span>授课教师一</span></li>
								<li style="margin-top: 40px;">家长ID:<span>耐寒教育</span></li>
								<li>学员姓名:<span>学员一,学员二</span></li>
								<li style="margin-top: 40px;">课程单价:<span>100</span></li>
								<li>剩余总价:<span>1200</span></li>
								<li>退费方式:<span>
									<el-select v-model="value1" placeholder="请选择退费方式" class="el">
										<el-option v-for="item in option" :key="item.value1" :label="item.label" :value="item.value1">
										</el-option>
									</el-select>
								</span></li>
							</ul>
							<ul>
								<li>订单时间:<span>123</span></li>
								<li>业务教师:<span>123</span></li>
								<li style="margin-top: 40px;">课程校区:<span>城南校区</span></li>
								<li style="margin-top: 40px;position: relative;top: 20px;">家长手机号:<span>123</span></li>
								<li style="margin-top: 40px;position: relative;top: 30px;">剩余课程:<span>12</span></li>
							</ul>
						</div>
						<span slot="footer" class="">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
					<!-- 分页 -->
					<el-pagination background
					 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
					 
				</div>
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
					dialogVisible: false,
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
				value1: '',
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
					cz:"查看"	
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
