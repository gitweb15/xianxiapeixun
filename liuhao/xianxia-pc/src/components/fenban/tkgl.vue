<template>
	<div class="zhu">
		<div class="zhuti">
			<Top title="调课管理"></Top>
			<div class="zx">
				<div class="io">
					<router-link to="cc" tag="a" target="_blank">
						<el-button type="primary" style="position: relative;left: -80px;">新增调课</el-button>
					</router-link>
					<!-- <el-button type="primary" style="position: relative;left: -80px;">新增调课</el-button> -->
					<p class="p1">校区:
						<el-select v-model="value" placeholder="请选择校区" class="el">
							<el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</p>
					<el-button type="primary" style="position: relative;left: 780px;top: -38px;">搜索</el-button>
					<div>
						<table cellpadding="0" cellspacing="0" class="tab">
							<tr class="se">
								<td>校区</td>
								<td>调课课程</td>
								<td>教师</td>
								<td>原上课时间</td>
								<td>调整后时间</td>
								<td>操作</td>
							</tr>
							<tr>
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr class="s">
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr>
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr class="s">
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr>
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr class="s">
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr>
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr class="s">
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr>
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
							<tr class="s">
								<td>城南校区</td>
								<td>语文一对一个性化课程</td>
								<td>王大壮</td>
								<td>2019-4-26 第二节</td>
								<td>2019-4-26 第三节</td>
								<td>
									<a href="#">查看</a>
								</td>
							</tr>
						</table>
						<el-pagination background
						 layout="prev, pager, next, jumper" :total="1000" style="margin-top: 20px;margin-left: 20px;"></el-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/Top.vue'
	export default {
		name: "CDGL",
		components: {
			Top
		},
		data() {
			return {
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
				value: ''
			}
		}

	}
</script>

<style scoped>
	.zhu {
		width: 1070px;
		height: 710px;
		overflow-x: hidden;
		text-align: center
	}

	.zhuti {
		width: 1070px;
		height: 710px;
		overflow-x: hidden;
	}

	.zx {
		width: 980px;
		height: 400px;
	}

	.io {
		position: relative;
		left: -360px;
		top: 15px;
	}

	.p1 {
		margin-top: 10px;
	}

	.tab {
		width: 1080px;
		position: relative;
		left: 300px;
		top: -20px;
	}

	.tab tr {
		height: 40px;
	}

	.tab tr td {
		text-align: center;
		font-size: 13px;
	}

	.se {
		background-color: #d7d7d7;
	}

	.s {
		background-color: #f2f2f2;
	}

	table tr:hover {
		background-color: #eaeaea;
	}
</style>
