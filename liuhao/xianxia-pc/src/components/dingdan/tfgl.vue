<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="退费管理"></Top>
			<div class="zhong">
				<!-- v-model绑定数据 -->
				<p>家长手机号:<el-input v-model="input" placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p>退费状态:
					<el-select v-model="value" placeholder="请选择根菜单" class="el">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p>
					<el-button type="primary" style="margin-left: 240px;">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>原订单编号</td>
							<td>订单来源</td>
							<td>订单日期</td>
							<td>业务教师</td>
							<td>家长手机号</td>
							<td>退费状态</td>
							<td>退费</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bh}}</td>
							<td>{{item.ly}}</td>
							<td>{{item.rq}}</td>
							<td>{{item.js}}</td>
							<td>{{item.sjh}}</td>
							<td>{{item.zt}}</td>
							<td>
								<router-link tag="a" to="/tui" @click="edit(item)">
									<el-button type="text">{{item.tf}}</el-button>
								</router-link>
							</td>
						</tr>
					</table>
					<!-- <el-dialog title="订单详情" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
						<div class="en">
							<ul>
								<li>订单编号:<span>{{cc.bh}}</span></li>
								<li>订单来源:<span>{{cc.ly}}</span></li>
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
								<li>订单时间:<span>{{cc.rq}}</span></li>
								<li>业务教师:<span>{{cc.js}}</span></li>
								<li style="margin-top: 40px;">课程校区:<span>城南校区</span></li>
								<li style="margin-top: 40px;position: relative;top: 20px;">家长手机号:<span>{{cc.sjh}}</span></li>
								<li style="margin-top: 40px;position: relative;top: 30px;">剩余课程:<span>12</span></li>
							</ul>
						</div>
						<span slot="footer" class="">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog> -->
					<el-pagination background
					 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "tfgl",
		components: {
			Top
		},
		data() {
			return {
				cc: {}, //新增数组
				// dialogVisible: false,  //显示弹出层
				value: "", //手机号
				input: "",
				value1: "",
				
				//option下拉列表
				options: [{
					value: '选项1',
					label: '未退费'
				}, {
					value: '选项2',
					label: '已退费'
				}],
				option: [{
					value1: '选项1',
					label: '未退费'
				}, {
					value1: '选项2',
					label: '已退费'
				}],
				
				//表格循环数据
				list: [{
						bh: "20190415001",
						ly: "微信小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "未退费",
						tf: "退费"
					},
					{
						bh: "20190415002",
						ly: "支付宝小程序",
						rq: "2019-4-15",
						js: '业务教师',
						sjh: "家长手机号",
						zt: "已退费",
						tf: "查看"
					},
					{
						bh: "20190415003",
						ly: "微信小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "未退费",
						tf: "退费"
					},
					{
						bh: "20190415004",
						ly: "支付宝小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "已退费",
						tf: "查看"
					},
					{
						bh: "20190415001",
						ly: "微信小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "未退费",
						tf: "退费"
					},
					{
						bh: "20190415002",
						ly: "支付宝小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "已退费",
						tf: "查看"
					},
					{
						bh: "20190415001",
						ly: "微信小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "未退费",
						tf: "退费"
					},
					{
						bh: "20190415002",
						ly: "支付宝小程序",
						rq: "2019-4-15",
						js: '业务教师',
						sjh: "家长手机号",
						zt: "已退费",
						tf: "查看"
					},
					{
						bh: "20190415001",
						ly: "微信小程序",
						rq: "2019-4-15",
						js: '业务教师',
						sjh: "家长手机号",
						zt: "未退费",
						tf: "退费"
					},
					{
						bh: "20190415002",
						ly: "支付宝小程序",
						rq: "2019-4-15",
						js: '',
						sjh: "家长手机号",
						zt: "已退费",
						tf: "查看"
					},
					{
						bh: "20190415001",
						ly: "微信小程序",
						rq: "2019-4-15",
						js: '业务教师',
						sjh: "家长手机号",
						zt: "未退费",
						tf: "退费"
					},
				]
			}
		},
		methods: {
			//点击显示数据
			edit: function(item) {
				this.cc = {
					bh: item.bh,
					ly: item.ly,
					rq:item.rq,
					js:item.js,
					sjh:item.sjh
				}
			}
		},
	}
</script>

<style scoped>
	.zhu {
		width: 1070px;
		height: 710px;
	}
	.zhuti {
		width: 1070px;
		height: 650px;
	}
	.zhong {
		width: 980px;
		height: 650px;
		margin: 10px auto;
	}
	.el {
		padding-left: 18px;
	}
	.in1 {
		width: 460px;
		margin-top: 30px;
	}
	.in {
		width: 200px;
	}
	.zhong p {
		display: inline-block;
		color: grey;
		font-size: 15px;
		padding-left: 15px;
	}

	table {
		width: 1000px;
		margin-top: 15px;
	}
	tr {
		height: 40px;
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
