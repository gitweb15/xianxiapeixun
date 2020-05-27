<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="校区管理"></Top>
			<div class="zhong">
				<p><el-button type="primary" @click="dialogVisible = true">新增校区</el-button></p>
				<p><el-button type="primary">导出Excel</el-button></p>
				<!-- 对话框 -->
					<el-dialog
					  title="校区管理"
					  :visible.sync="dialogVisible"
					  width="60%"
					  :before-close="handleClose">
					  <div>
						  <p>校区名称:<el-input placeholder="请输入内容" class="in el"></el-input></p>
						  <p style="margin-left: 100px;">校区地址:<el-input placeholder="请输入内容" class="in el"></el-input></p>
						  <p style="margin-top: 30px;">联系方式:<el-input placeholder="请输入内容" class="in el"></el-input></p>
					  </div>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="dialogVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					  </span>
					</el-dialog>
				<div>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>序</td>
							<td>校区名称</td>
							<td>校区地址</td>
							<td>联系方式</td>
							<td>修改</td>
						</tr>
						<tr v-for="(item,index) in list" :key="index"> 
							<td>1</td>
							<td>城南校区</td>
							<td>福清市中联天御财富广场4楼</td>
							<td>17746084680</td>
							<td>
								<a href="#"><el-button type="text" @click="dialogVisible = true">修改</el-button></a>
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
		name: "xiao",
		components: {
			Top
		},
		data(){
			return{
				dialogVisible: false,
				list:[]
			}
		},		
		 methods: {
		      handleClose(done) {
		        this.$confirm('确认关闭？')
		          .then(_ => {
		            done();
		          })
		          .catch(_ => {});
		      },
		    },
			  created() {
			    
			    // this.axios.get("http://122.112.179.240:9005/api/addData/addRecipe?doctorId=12&patientId=12&receptionType=liu&typeId=11").then((res) => {
			    //   console.log(res);
			    // });
			    fetch("http://122.112.179.240:9005/api/addData/addRecipe?doctorId=12&patientId=12&receptionType=liu&typeId=11",{
			      method:'GET',
			      headers:{ 'Content-Type': 'application/json' },
			      //body: JSON.stringify({key:value}), //POST传参方式
			      credentials: 'include' //允许携带cookie
			    })//fetch返回的是promise对象。所以fetch().then()第一个then里返回的并不是真正的数据。而是一个promise，所以我们需要通过链式操作第二个then()来获取真正的数据。
			    .then(res => {
			        return res.json();
			    })
			    .then(res => {
			      // 这里返回的数据就是我们想要请求的json数据
			      if(res.message == "OK") {
			        console.log(res.responseBody.list);
			      }
			    })
			  }
		}
</script>

<style scoped>
	.zhu {
		width: 1070px;
		height: 510px;
	}
	.zhuti {
		width: 1070px;
		height: 510px;
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
		font-size: 12px;
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
</style>
