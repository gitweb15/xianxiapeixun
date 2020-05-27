<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="教室管理"></Top>
			<!-- 点击显示弹出框 -->
			<el-button type="primary" @click="dialogVisible = true" style="margin-top: 10px;">新增教室</el-button>
			<!-- 弹出框 -->
			<el-dialog
			  :visible.sync="dialogVisible"
			  width="30%"
			  :before-close="handleClose">
			  <div class="lei">
				  <!-- v-model绑定数据 -->
				  <p style="margin-left: 30px;">&nbsp;&nbsp;校区:<el-select v-model="value" placeholder="请选择校区" class="el">
				  						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
				  						</el-option>
				  					</el-select></p>
				  					<p></p>
				  					<p>
				  						教室名称:<el-input placeholder="请输入内容" class="in el"></el-input>
				  					</p>
				  					<p>教室位置:<el-input placeholder="请输入内容" class="in el"></el-input></p>
			  </div>
			  
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			  </span>
			</el-dialog>
			<div class="zhong">
				<p>校区:<el-select v-model="value" placeholder="请选择校区" class="el">
						<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</p>
				<p style="float: right;">
					<el-button type="primary">搜索</el-button>
				</p>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>校区</td>
							<td>教室名称</td>
							<td>教室位置</td>
							<td>
								操作
							</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index">
							<td>{{item.xq}}</td>
							<td>{{item.mc}}</td>
							<td>{{item.wz}}</td>
							<td>
								<a href="#">
									<el-button type="text" @click="dialogVisible = true">{{item.sc}}</el-button>
								</a>
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
	export default {
		name: "fbgl",
		components: {
			Top
		},
		data() {
			return {
				 dialogVisible: false, //弹出框
				 //下拉列表数据
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
					}, {
						value: '选项6',
						label: '九洞桥校区'
					},
					{
						value: '选项7',
						label: '万达校区'
					},
				],
				value:"",

				list: [

					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
					{
						xq: "滨江校区",
						mc: "B1042",
						wz: "B1042",
						sc: "删除"
					},
				]
			}
		},
		 methods: {
		      handleClose(done) {
				  //弹出框关闭
		        this.$confirm('确认关闭？')
		          .then(_ => {
		            done();
		          })
		          .catch(_ => {});
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
	.lei p{
		margin-top: 15px;
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