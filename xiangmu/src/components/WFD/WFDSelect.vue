<template>
  <div>
    <top title="活动课程管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="校区" class="left">
            <el-select v-model="formInline.region" placeholder="请选择校区">
              <el-option label="城南校区" value="城南校区"></el-option>
              <el-option label="滨江校区" value="滨江校区"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="课程内容" class="left">
            <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="是否活动" class="left">
            <el-select v-model="formInline.content" placeholder="请选择内容">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="main-tab">
        <el-table
          :data="wfbSelectJson.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :row-class-name="tableRowClassName"
        >
          <el-table-column label="选择" type="selection" width="100"></el-table-column>
          <el-table-column prop="id" label="编码" width="150"></el-table-column>
          <el-table-column prop="name" label="名称" width="200"></el-table-column>
          <el-table-column prop="xiaoQ" label="校区" width="120"></el-table-column>
          <el-table-column prop="grade" label="年级" width="120"></el-table-column>
          <el-table-column prop="Oprice" label="原价" width="150"></el-table-column>
          <el-table-column prop="can" label="是否参与活动" width="120"></el-table-column>
          <el-table-column prop="Pprice" label="活动价" width="120"></el-table-column>
          <el-table-column label="操作" width="118">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">设置活动价</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 3, 5, 8]"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>



<script>
import top from "../Top";
import { mapState } from "vuex";
export default {
  name: "WFDSelect",
  data() {
    return {
      currentPage: 1, //默认显示第一页
      pageSize: 10, //默认每页显示10条
      totalNum: 5, //总页数
      formInline: {
          user: '',
          region: '',
          content:''
        },
        dataContent:this.wfbSelectJson
    };
  },
  components: {
    top
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;";
      } else {
        return "height:100px;";
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    onSubmit(){
        // for
        console.log(this.dataContent)
    }
  },
  computed: {
    ...mapState(["wfbSelectJson"])
  },
  created() {
    this.totalNum = this.wfbSelectJson.length;
  }
};
</script>

<style>
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