<template>
  <div class="ss">
    <top title="课表管理"></top>
    <div class="topCss">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
			<!-- 按钮 -->
          <el-button type="primary" size="small">新增用户</el-button>
          <el-button type="primary" size="small">导入Excel</el-button>
          <el-button type="text" size="small">Excel模板下载</el-button>
        </el-form-item>
        <div class="clear">
			<!-- 下拉列表 -->
          <el-form-item class="left" label="校区">
            <el-select v-model="value" placeholder="请选择">
              <el-option label="校区1" value="校区1"></el-option>
              <el-option label="校区2" value="校区2"></el-option>
              <el-option label="校区3" value="校区3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="left" label="教室">
            <el-select v-model="value1" placeholder="请选择教室">
              <el-option label="教室1" value1="教室1"></el-option>
              <el-option label="教室2" value1="教室2"></el-option>
              <el-option label="教室3" value1="教室3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="right">
          <el-button type="primary">搜索</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="main">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td></td>
          <td colspan="5">星期一</td>
          <td colspan="5">星期二</td>
          <td colspan="5">星期三</td>
          <td colspan="5">星期四</td>
          <td colspan="5">星期五</td>
        </tr>
        <tr>
          <td>教师/节次</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>滨江教师一</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>滨江教师二</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>百合教师一</td>
          <td></td>
          <td>
			  <p>课程一</p>
			  <p>教师一</p>
		  </td>
          <td></td>
          <td>
			  <p>课程二</p>
			  <p>教师二</p>
		  </td>
          <td>
			  <p>课程一</p>
			  <p>教师一</p>
		  </td>
          <td></td>
          <td></td>
          <td>
			  <p>课程一</p>
			  <p>教师一</p>
		  </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>百合教师二</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>宏路教师一</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>宏路教师二</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>滨江教室一</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>滨江教室二</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import top from "@/components/Top";
export default {
  name: "KeBiaoGuan",
  data() {
    return {
		//下拉值
		value:"",
		value1:""
	};
  },
  components: {
    top
  }
};
</script>

<style scoped>
.is-selected {
  color: #1989fa;
}
.ss {
  position: relative;
}
.main {
  width: 1092px;
  height: 393px;
  box-sizing: border-box;
  overflow: scroll;
}
table {
  width: 2500px;
}
table td {
  border: 1px solid #d7d7d7;
  width: 100px;
  height: 50px;
  text-align: center;
}
table tr td:nth-of-type(1){
	font-size: 15px;
}
table tr:nth-of-type(1) td{
	text-align: center;
}
table > tr:first-child td,
table > tr > td:first-child {
  border: none;
  background: #f2f2f2;
}
.topCss {
  padding: 10px 0 10px 10px;
  text-align: left;
}
</style>