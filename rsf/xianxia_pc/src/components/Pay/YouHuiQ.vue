<template>
  <div>
    <top title="优惠券管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="用户昵称：" class="left">
            <el-input v-model="formInline.user" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
          <el-form-item label="使用状态：" class="left">
            <el-select v-model="formInline.region" placeholder="请选中内容" size="small">
              <el-option label="已使用" value="1"></el-option>
              <el-option label="未使用" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit" size="small">搜索</el-button>
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
          <el-table-column prop="id" label="序"></el-table-column>
          <el-table-column prop="name" label="用户昵称"></el-table-column>
          <el-table-column prop="yhMoney" label="优惠券金额"></el-table-column>
          <el-table-column prop="hqtj" label="获取途径"></el-table-column>
          <el-table-column prop="hqTime" label="获取时间"></el-table-column>
          <el-table-column prop="dqTime" label="到期时间"></el-table-column>
          <el-table-column prop="status" label="使用状态"></el-table-column>
          <el-table-column label="使用订单" width="150">
            <template slot-scope="scope">
              <router-link to="/Order/ddgl">
                <el-button @click="handleClick(scope.row)" type="text" size="small">{{ scope.row.ding }}</el-button>
              </router-link>
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
  name: "DingGuan",
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
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: "20000101"
        },
        {
          id: 2,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: ""
        },{
          id: 1,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: "20000101"
        },
        {
          id: 2,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: ""
        },
        {
          id: 1,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: "20000101"
        },
        {
          id: 2,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: ""
        },
        {
          id: 1,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: "20000101"
        },
        {
          id: 2,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: ""
        },
        {
          id: 1,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: "20000101"
        },
        {
          id: 2,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: ""
        },
        {
          id: 1,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: "20000101"
        },
        {
          id: 2,
          name: "名字",
          yhMoney: "999",
          hqtj: "注册",
          hqTime: "2000-01-01",
          dqTime: "2000-05-05",
          status: "未使用",
          ding: ""
        }
      ],
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
        return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;text-align:center";
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
    rowClass() {
      return "text-align: center;";
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