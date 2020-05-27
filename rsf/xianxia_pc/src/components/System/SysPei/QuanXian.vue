<template>
  <div>
    <top title="权限管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="根菜单：" class="left">
            <el-select v-model="formInline.content" placeholder="请选择根菜单">
              <el-option label="首页" value="1"></el-option>
              <el-option label="课程管理" value="2"></el-option>
              <el-option label="学员管理" value="3"></el-option>
              <el-option label="订单管理" value="4"></el-option>
              <el-option label="教师管理" value="5"></el-option>
              <el-option label="统计分析" value="6"></el-option>
              <el-option label="支付中心" value="7"></el-option>
              <el-option label="系统管理" value="8"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="父菜单：" class="left">
            <el-select v-model="formInline.content" placeholder="请选择父菜单">
              <el-option label="首页" value="1"></el-option>
              <el-option label="课程管理" value="2"></el-option>
              <el-option label="学员管理" value="3"></el-option>
              <el-option label="订单管理" value="4"></el-option>
              <el-option label="教师管理" value="5"></el-option>
              <el-option label="统计分析" value="6"></el-option>
              <el-option label="支付中心" value="7"></el-option>
              <el-option label="系统管理" value="8"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜单名称：" class="left">
            <el-input type="text" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="main-tab">
        <el-table
          :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :row-class-name="tableRowClassName"
          :cell-style="rowClass"
        >
          <el-table-column label="选择" type="selection"></el-table-column>
          <el-table-column prop="id" label="序"></el-table-column>
          <el-table-column prop="type" label="菜单类型"></el-table-column>
          <el-table-column prop="name" label="菜单名称"></el-table-column>
          <el-table-column prop="fName" label="父菜单名称"></el-table-column>
          <el-table-column prop="gName" label="根菜单名称"></el-table-column>
          <el-table-column label="家长">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.jiang"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="业务教师">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.yeTea"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="授课教师">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.shouTea"></el-checkbox>
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
import top from "@/components/Top";
import { mapState } from "vuex";
export default {
  name: "QuanXian",
  data() {
    return {
      currentPage: 1, //默认显示第一页
      pageSize: 10, //默认每页显示10条
      totalNum: 5, //总页数
      formInline: {
        user: "",
        region: "",
        content: ""
      },
      dataContent: [
        {
          id: 1,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 2,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 3,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 4,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          jiang: true,
          yeTea: false,
          shouTea: false
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          jiang: true,
          yeTea: false,
          shouTea: false
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      radio: "1",
      num: 1
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
        return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;text-align:center";
      } else {
        return "height:100px;";
      }
    },
    rowClass() {
      return "text-align: center;";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    onSubmit() {
      // for
      console.log(this.dataContent);
    }
  },
  created() {
    this.totalNum = this.dataContent.length;
  }
};
</script>

<style>
.width70 {
  width: 70%;
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
.el-dialog__header {
  padding: 0px !important;
}
.el-dialog__wrapper .el-input__inner {
  height: 35px;
}
</style>