<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="转校管理"></Top>
			<router-link to="/newdd" tag="a" target="_blank" style="margin-top: 15px;">
				<el-button type="primary">新增转校</el-button>
			</router-link>

			<div class="zhong">
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>原订单编号</td>
							<td>订单来源</td>
							<td>订单日期</td>
							<td>业务教师</td>
							<td>家长手机号</td>
							<td>原校区</td>
							<td>转入校区</td>
							<td>审核状态</td>
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
							<td>{{item.zt}}</td>
							<td>
								<a href="#">{{item.cz}}</a>
							</td>
						</tr>
					</table>
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
				//下拉列表
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
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
				},
				list:[
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核拒绝",
					cz:"查看"	
					},
					{
					bh:"20190415002",
					ly:"支付宝小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415003",
					ly:"业务扫码收款",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415004",
					ly:"业务线下收款",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415002",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415003",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415004",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"业务教师",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
					cz:"查看"	
					},
					{
					bh:"20190415001",
					ly:"微信小程序",
					rq:"2019-4-15",
					js:"",
					sjh:"家长手机号",
					xm:"原校区",
					mc:"新校区",
					zt:"审核中",
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
</style>

