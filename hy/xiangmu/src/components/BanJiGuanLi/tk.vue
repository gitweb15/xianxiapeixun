<template>
	<div style="width: 100%;">
		<top title="调课"></top>
		<router-link tag='el-button' type="primary" style='margin-left: 40px;margin-top: 20px; color: #FFF;background-color: #409EFF;border-color: #409EFF;
' @click="dialogFormVisible = true" to='/tiaoke'>确认调课</router-link>
		<router-link tag='el-button' style='margin-left: 40px;margin-top: 20px;' @click="dialogFormVisible = true" to='/tiaoke'>取消</router-link>
		<el-form :model="form">
			<div style="width: 50%;margin-left: 250px;">
				<el-form-item label="课程编码:" :label-width="formLabelWidth">BJKC-20190405</el-form-item>
				<el-form-item label="课程校区:" :label-width="formLabelWidth">城南校区</el-form-item>
			</div>
			<div style="float: right;margin-top: -125px;margin-right: 20px;width: 50%;">
				<el-form-item label="课程名称:" :label-width="formLabelWidth">初中一年级班级课程</el-form-item>
				<el-form-item label="授课教师:" :label-width="formLabelWidth">王大壮</el-form-item>
			</div>
		</el-form>
		<div style="border: 1px solid gainsboro; width: 40%;height: 300px;padding: 20px;margin-left: 20px;">
			<span class="demonstration">原课程日期：</span>
			<el-date-picker v-model="value1" type="datetime" placeholder="单击选择时间" style="width:70%;">
			</el-date-picker>
			<div style="margin: 10px;line-height: 50px;">
				<p>2019-4-26 第二节</p>
				<p>2019-4-26 第六节</p>
			</div>
		</div>
		<img src="../../assets/18.png" style="width:8%;height:20%;margin-top: -40px;text-align: center;top: 330px;position: absolute;left: 615px;"/>
		<div style="border: 1px solid gainsboro; width: 40%;float: right;margin-top: -343px;height: 300px;padding: 20px;margin-right: 50px;">
			<span class="demonstration">调课日期：</span>
			<el-date-picker v-model="value1" type="datetime" placeholder="单击选择时间" style="width:70%;">

			</el-date-picker>
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="调课教室:" class="left" style="margin-top: 20px;">
					<el-select v-model="formInline.region" placeholder="请选择教室" style='width: 250px;margin-left: 10px;'>
						<el-option label="教室一" value="教室一"></el-option>
						<el-option label="教室二" value="教室二"></el-option>
						<el-option label="教室三" value="教室三"></el-option>
						<el-option label="教室四" value="教室四"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div style="margin: 10px;">
				<ul style="float: left;width:600px;line-height: 50px;" class="ulli">
					<li>第一节</li>
					<li>第二节</li>
					<li>第三节</li>
					<li>第四节</li>
					<li>第五节</li>
					<li>第六节</li>
					<li>第七节</li>
					<li>第八节</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import top from "../Top";
	import {
		mapState
	} from "vuex";
	export default {
		name: "tk",
		data() {
			return {
				currentPage: 1, //默认显示第一页
				pageSize: 10, //默认每页显示10条
				totalNum: 5, //总页数
				formInline: {
					user: '',
					region: '',
					content: ''
				},
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
			};
		},
		components: {
			top
		},

	};
</script>

<style>
	.ulli li {
		margin-bottom:50px;
		width: 100px;
		border: 1px solid gainsboro;
		margin-left: 20px;
		text-align: center;
		float: left;
	}

	.el-table .warning-row {
		background: #f2f2f2;
	}

	.el-table .success-row {
		background: white;
	}

	.el-table td {
		padding: 7px 0 !important;
	}
</style>
