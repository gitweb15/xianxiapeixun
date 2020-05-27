<template>
  <div style class="appZ">
    <div>
      <router-link
        type="primary"
        to="/Order/zxgl"
        tag="el-button"
        style="background: #0000FF;color: white;"
      >提交转校</router-link>
      <router-link
        to="/Order/zxgl"
        type="danger"
        tag="el-button"
        style="background-color: red;color: white;width: 10%;"
      >取消</router-link>
    </div>
    <el-form :model="form" title="订单详情" style="border: 1px solid gainsboro;margin-top: 50px;">
      <el-form-item
        label="订单详情"
        :label-width="formLabelWidth"
        style="width:50%;margin-left: 20px; font-weight: bold;"
      ></el-form-item>
      <el-form-item label="课程编码" :label-width="formLabelWidth" style="width:50%;margin-left: 40px;">
        <span>20190415001</span>
      </el-form-item>
      <el-form-item
        label="订单来源"
        :label-width="formLabelWidth"
        style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;"
      >
        <span>微信小程序</span>
      </el-form-item>
      <el-form-item label="订单时间" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span>20190414</span>
      </el-form-item>
      <el-form-item
        label="业务教师"
        :label-width="formLabelWidth"
        style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;"
      >
        <span>无</span>
      </el-form-item>

      <el-form-item label="课程名称" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span>英语个性化一对一教学</span>
      </el-form-item>
      <el-form-item
        label="课程校区"
        :label-width="formLabelWidth"
        style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;"
      >
        <span>城南校区</span>
      </el-form-item>
      <el-form-item label="课程教师" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span style="margin-right: 130px;">授课教师一</span>
        <!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
      </el-form-item>

      <el-form-item label="家长ID" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span>耐寒教育</span>
      </el-form-item>
      <el-form-item
        label="家长手机号"
        :label-width="formLabelWidth"
        style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;"
      >
        <span>18809122232</span>
      </el-form-item>
      <el-form-item label="学员姓名" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span style="margin-right: 10px;">学员一,学员二</span>
        <!-- <el-input v-model="form.name" autocomplete="off" pla"></el-input> -->
      </el-form-item>
      <el-form-item label="课程单价" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span>100</span>
      </el-form-item>
      <el-form-item
        label="剩余课时"
        :label-width="formLabelWidth"
        style="width: 50%;float: right;margin-top: -60px;margin-right: 0px;"
      >
        <span>12</span>
      </el-form-item>
      <el-form-item label="剩余总价" :label-width="formLabelWidth" style="margin-left: 40px;">
        <span style="margin-right: 10px;">1200</span>
      </el-form-item>
      <el-form-item label="退费方式" :label-width="formLabelWidth" style="margin-left: 40px;">
        <el-select>
          <el-option value="请选择退费方式">请选择退费方式</el-option>
          <el-option value="请选择退费方式">请选择退费方式</el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ZhuanSel"
};
</script>

<style>
.appZ {
  margin: 0px 50px 0px 50px;
  text-align: left;
  margin-top: 10px;
}
</style>
