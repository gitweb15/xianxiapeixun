<template>
  <div>
    <top title="请选择需转校的订单"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <!-- 用户来源 -->
          <el-form-item label="用户来源" class="left">
            <el-select v-model="formInline.region" placeholder="请选择内容">
              <el-option label="微信小程序" value="微信小程序"></el-option>
              <el-option label="支付宝小程序" value="微信小程序"></el-option>
            </el-select>
          </el-form-item>
          <!-- 是否注册 -->
          <el-form-item label="是否注册" class="left">
            <el-select v-model="formInline.region" placeholder="请选择内容">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <!-- 是否消费 -->
          <el-form-item label="校区" class="left">
            <el-select v-model="formInline.region" placeholder="请选择内容">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <!-- 搜索 -->
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
          <el-table-column prop="userIn" label="用户来源" width="200"></el-table-column>
          <el-table-column prop="name" label="用户昵称" width="280"></el-table-column>
          <el-table-column prop="sex" label="性别" width="150"></el-table-column>
          <el-table-column prop="phone" label="手机号码" width="200"></el-table-column>
          <el-table-column prop="stuNum" label="学员数" width="250"></el-table-column>
          <el-table-column prop="xiaoBool" label="是否消费" width="120"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <router-link to="/zhuansel">
                <el-button @click="handleClick(scope.row)" type="text" size="small">转校</el-button>
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
  name: "XuanZhuan",
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
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        },
        {
          userIn: '用户来源',
          name: '用户昵称',
          sex: '性别',
          phone: '手机号码',
          stuNum: '学员数',
          xiaoBool: '是否消费'
        }
      ],
      dialogVisible: false,
      jiaZhangXinXi: {},
      time: new Date().toLocaleString()
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
    handleClick(s) {
      console.log(s);
      this.jiaZhangXinXi = s;
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  computed: {
    ...mapState(["wfbSelectJson"])
  },
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
.jzWidthCss {
  width: 50%;
  float: left;
  font-size: 13px;
  line-height: 30px;
  padding-left: 10%;
  margin: 10px 0;
  
}
</style>