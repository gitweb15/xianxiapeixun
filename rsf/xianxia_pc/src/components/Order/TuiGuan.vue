<template>
  <div>
    <top title="退费管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="家长手机号" class="left">
            <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="退费状态" class="left">
            <el-select v-model="formInline.region" placeholder="请选择状态">
              <el-option label="已退费" value="支付宝"></el-option>
              <el-option label="未退费" value="微信"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="main-tab">
        <el-table
          :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="id" label="原订单编号"></el-table-column>
          <el-table-column prop="ddLaiY" label="订单来源"></el-table-column>
          <el-table-column prop="ddData" label="订单日期"></el-table-column>
          <el-table-column prop="tea" label="业务教师"></el-table-column>
          <el-table-column prop="phone" label="家长手机号"></el-table-column>
          <el-table-column prop="status" label="退费状态"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">退费</el-button>
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
  name: "TuiGuan",
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
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        },
        {
          id: 1,
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        },
        {
          id: 1,
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        },
        {
          id: 1,
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        },
        {
          id: 1,
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        },
        {
          id: 1,
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        },
        {
          id: 1,
          ddLaiY: "微信小程序",
          ddData: "2020-06-06",
          tea: "业务教师",
          phone: "137...",
          status: "未退费"
        }
      ],
      selTui: false,
      dialogFormVisible: false,
      selData: {}
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
    onSubmit() {
      // for
      console.log(this.dataContent);
    },
    handleClick(val) {
      this.selTui = true;
      this.selData = val;
      this.$router.push('/tfck')
    }
  },
  computed: {},
  created() {
    this.totalNum = this.dataContent.length;
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
.disDiv > div {
  width: 50%;
  display: inline-block;
  padding: 15px 0;
}
.disDiv > div > span {
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 10px;
}
</style>