<template>
  <div class="ss">
    <top title="课表管理"></top>
    <div class="topCss">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" size="small">导入Excel</el-button>
          <el-button type="primary" size="small">导出Excel</el-button>
          <el-button type="text" size="small">Excel模板下载</el-button>
        </el-form-item>
        <div class="clear">
          <el-form-item class="left" label="校区">
            <el-select v-model="value" placeholder="请选择">
              <el-option label="校区1" value="校区1"></el-option>
              <el-option label="校区2" value="校区2"></el-option>
              <el-option label="校区3" value="校区3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="left" label="教室">
            <el-select v-model="value" placeholder="请选择教室">
              <el-option label="教室1" value="教室1"></el-option>
              <el-option label="教室2" value="教室2"></el-option>
              <el-option label="教室3" value="教室3"></el-option>
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
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
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
    return {};
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