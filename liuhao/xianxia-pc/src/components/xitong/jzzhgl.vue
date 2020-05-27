<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="家长账号管理"></Top>
			<div class="zhong">
				<p>用户来源: <el-select v-model="value" placeholder="请选择校区" class="el in1">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p>是否注册: <el-select v-model="value1" placeholder="请选择校区" class="el in">
						<el-option v-for="item in option1" :key="item.value1" :label="item.label" :value="item.value1">
						</el-option>
					</el-select>
				</p>
				<p>是否消费: <el-select v-model="value2" placeholder="请选择校区" class="el in">
						<el-option v-for="item in option2" :key="item.value2" :label="item.label" :value="item.value2">
						</el-option>
					</el-select>
				</p>
				<p>家长手机号:<el-input placeholder="请输入内容" class="in el"></el-input>
				</p>
				<p style="float: right;"><el-button type="primary">搜索</el-button></p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>用户来源</td>
							<td>用户昵称</td>
							<td>性别</td>
							<td>是否注册</td>
							<td>手机号码</td>
							<td>学员数</td>
							<td>是否退费</td>
							<td>查看</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.bh}}</td>
							<td>{{item.ly}}</td>
							<td>{{item.rq}}</td>
							<td>{{item.js}}</td>
							<td>{{item.sjh}}</td>
							<td>{{item.xm}}</td>
							<td>{{item.mc}}</td>
							<td>
								<a href="#" @click="edit(item)">
									<el-button type="text" @click="dialogVisible = true">{{item.cz}}</el-button>
								</a>
							</td>
						</tr>
					</table>
					<el-dialog title="家长详情" :visible.sync="dialogVisible" width="65%" :before-close="handleClose">
						<div class="en">
							<ul>
								<li>用户来源:<span>{{cc.bh}}</span></li>
								<li>性别:<span>{{cc.rq}}</span></li>
								<li style="margin-top: 40px;">是否注册:<span>{{cc.js}}</span></li>
								<li>注册时间:<span>授课教师一</span></li>
								<li style="margin-top: 40px;">学员数量:<span>{{cc.xm}}</span></li>
								<li>是否退费:<span>{{cc.mc}}</span></li>
								<li>剩余总价:<span>1200</span></li>
							</ul>
							<ul>
								<li>用户昵称:<span>{{cc.ly}}</span></li>
								<li>获取时间:<span>{{cc.js}}</span></li>
								<li style="margin-top: 40px;">手机号码:<span>{{cc.sjh}}</span></li>
								<li style="margin-top: 40px;position: relative;top: 20px;">学员姓名:<span>学员一,学员二</span></li>
								<li style="margin-top: 40px;position: relative;top: 30px;">消费次数:<span>12</span></li>
							</ul>
						</div>
						<span slot="footer" class="">
							<el-button @click="dialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
					 :page-sizes="[1, 3, 5, 8]" :page-size="pageSize" layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
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
				cc: {},
				dialogVisible: false,
				option: [{
					value: '选项1',
					label: '微信小程序'
				}, {
					value: '选项2',
					label: '支付宝小程序'
				}],
				option1: [{
					value1: '选项1',
					label: '是'
				}, {
					value1: '选项2',
					label: '否'
				}],
				option2: [{
					value2: '选项1',
					label: '是'
				}, {
					value2: '选项2',
					label: '否'
				}],
				value: '',
				value1: "",
				value2:'',
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
				},
				list:[
					{
					bh:"微信小程序",
					ly:"微信昵称_ABB",
					rq:"男",
					js:"是",
					sjh:"18899876542",
					xm:"2",
					mc:"是",
					cz:"查看"	
					},
					{
					bh:"支付宝小程序",
					ly:"支付宝昵称",
					rq:"女",
					js:"否",
					sjh:"",
					xm:"",
					mc:"否",
					cz:"查看"	
					},
					{
					bh:"微信小程序",
					ly:"微信昵称_ABB",
					rq:"男",
					js:"是",
					sjh:"18899876542",
					xm:"2",
					mc:"是",
					cz:"查看"	
					},
					{
					bh:"支付宝小程序",
					ly:"支付宝昵称",
					rq:"女",
					js:"否",
					sjh:"",
					xm:"",
					mc:"否",
					cz:"查看"	
					},
					{
					bh:"微信小程序",
					ly:"微信昵称_ABB",
					rq:"男",
					js:"是",
					sjh:"18899876542",
					xm:"2",
					mc:"是",
					cz:"查看"	
					},
					{
					bh:"支付宝小程序",
					ly:"支付宝昵称",
					rq:"女",
					js:"否",
					sjh:"",
					xm:"",
					mc:"否",
					cz:"查看"	
					},
					{
					bh:"微信小程序",
					ly:"微信昵称_ABB",
					rq:"男",
					js:"是",
					sjh:"18899876542",
					xm:"2",
					mc:"是",
					cz:"查看"	
					},
					{
					bh:"支付宝小程序",
					ly:"支付宝昵称",
					rq:"女",
					js:"否",
					sjh:"",
					xm:"",
					mc:"否",
					cz:"查看"	
					},
					{
					bh:"微信小程序",
					ly:"微信昵称_ABB",
					rq:"男",
					js:"是",
					sjh:"18899876542",
					xm:"2",
					mc:"是",
					cz:"查看"	
					},
					{
					bh:"支付宝小程序",
					ly:"支付宝昵称",
					rq:"女",
					js:"否",
					sjh:"",
					xm:"",
					mc:"否",
					cz:"查看"	
					},
					{
					bh:"微信小程序",
					ly:"微信昵称_ABB",
					rq:"男",
					js:"是",
					sjh:"18899876542",
					xm:"2",
					mc:"是",
					cz:"查看"	
					},
					{
					bh:"支付宝小程序",
					ly:"支付宝昵称",
					rq:"女",
					js:"否",
					sjh:"",
					xm:"",
					mc:"否",
					cz:"查看"	
					},
				]
			}
		},
		methods: {
			edit: function(item) {
				this.cc = {
					bh: item.bh,
					ly: item.ly,
					rq:item.rq,
					js:item.js,
					sjh:item.sjh,
					xm:item.xm,
					mc:item.mc
				}
			}
		},
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
	.en ul{
		display: inline-block;
	}
	.en ul:nth-of-type(2){
		position: relative;
		top: -20px;
		left: 200px;
	}
	.en ul li{
		line-height: 30px;
	}
	.en ul li span{
		padding-left: 10px;
	}
	.in1{
		width: 180px;
	}
	.in {
		width: 130px;
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
