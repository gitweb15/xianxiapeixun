<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="课时管理"></Top>
			<el-button type="primary" @click="dialogVisible = true" style="position: relative;left: -400px;top: 10px;">新增</el-button>
			<!-- 对话框 -->
			<el-dialog
			  title=""
			  :visible.sync="dialogVisible"
			  width="40%"
			  :before-close="handleClose">
			  <p>教师名称:
			  <!-- 时间控件 model绑定值 -->
			  <el-time-picker
			      is-range
			      v-model="value1"
			      range-separator="至"
			      start-placeholder="开始时间"
			      end-placeholder="结束时间"
			      placeholder="选择时间范围">
			    </el-time-picker></p>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			  </span>
			</el-dialog>
				<div>
					<table class="tab" cellpadding="0" cellspacing="0">
						<tr class="se">
							<td>节次</td>
							<td>开始时间</td>
							<td>结束时间</td>
							<td>操作</td>
						</tr>
						<tr>
							<td>1</td>
							<td>08.05</td>
							<td>08.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr class="se">
							<td>2</td>
							<td>09.05</td>
							<td>09.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr>
							<td>1</td>
							<td>08.05</td>
							<td>08.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr class="se">
							<td>2</td>
							<td>09.05</td>
							<td>09.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr>
							<td>1</td>
							<td>08.05</td>
							<td>08.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr class="se">
							<td>2</td>
							<td>09.05</td>
							<td>09.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr>
							<td>1</td>
							<td>08.05</td>
							<td>08.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr class="se">
							<td>2</td>
							<td>09.05</td>
							<td>09.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr>
							<td>1</td>
							<td>08.05</td>
							<td>08.50</td>
							<td><a href="#">删除</a></td>
						</tr>
						<tr class="se">
							<td>2</td>
							<td>09.05</td>
							<td>09.50</td>
							<td><a href="#">删除</a></td>
						</tr>
					</table>
					<el-pagination background
					 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
				</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default{
		name:"ksgl",
		components:{
			Top
		},
		 data() {
		      return {
		        dialogVisible: false,
				value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
		      };
		    },
		    methods: {
		      handleClose(done) {
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
	.zhu{
		width: 1070px;
		height: 610px;
		overflow-x: hidden;
		text-align: center;
	}
	.zhuti{
		width: 1070px;
		height: 610px;
		overflow-x: hidden;
	}
	.tab{
		width: 1050px;
		margin-top: 15px;
	}
	.tab tr{
		height: 37px;
	}
	.se{
		background-color: #d7d7d7;
	}
	tr td{
		font-size: 13px;
	}
</style>
