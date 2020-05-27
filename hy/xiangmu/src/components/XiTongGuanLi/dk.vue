<template>
	
	<top title="调课"></top>
	<el-button type="primary" style='margin-left: 40px;margin-top: 20px;' @click="dialogFormVisible = true">确认调课</el-button>
	<el-button style='margin-left: 40px;margin-top: 20px;' @click="dialogFormVisible = true">取消</el-button>
	<el-form :model="form">
		<el-form-item label="课程编码:" :label-width="formLabelWidth" style="width: 50%;margin-left: 50px;">BJKC-20190405</el-form-item>
		<el-form-item label="课程校区:" :label-width="formLabelWidth" style="width: 50%;margin-left: 50px;">城南校区</el-form-item>
	
		<div style="float: right;margin-top: -125px;margin-right: 20px;width: 50%;">
			<el-form-item label="课程名称:" :label-width="formLabelWidth">初中一年级班级课程</el-form-item>
			<el-form-item label="授课教师:" :label-width="formLabelWidth">王大壮</el-form-item>
		</div>
	
	</el-form>
	<div style="border: 1px solid gainsboro; width: 35%;height: 300px;padding: 20px;margin-left: 20px;">
		<span class="demonstration">原课程日期：</span>
		<el-date-picker v-model="value1" type="datetime" placeholder="单击选择时间">
		</el-date-picker>
		<div style="margin: 10px;">
			<p>2019-4-26 第二节</p>
			<p>2019-4-26 第六节</p>
		</div>
	
	</div>
	<div style="border: 1px solid gainsboro; width: 20%;height: 300px;padding: 20px;margin-left: 120px;position: absolute;right: 30px;">
		<span class="demonstration">调课日期：</span>
		<el-date-picker v-model="value1" type="datetime" placeholder="单击选择时间">
	
		</el-date-picker>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="调课教室" class="left" style="width: 105%;margin-top: 20px;">
				<el-select v-model="formInline.region" placeholder="请选择教室" style='width: 220px;'>
					<el-option label="教室一" value="教室一"></el-option>
					<el-option label="教室二" value="教室二"></el-option>
					<el-option label="教室三" value="教室三"></el-option>
					<el-option label="教室四" value="教室四"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<div style="margin: 10px;">
			<ul style="float: left;width: 500px;" class="ulli">
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
</template>

<script>
</script>

<style>
</style>
