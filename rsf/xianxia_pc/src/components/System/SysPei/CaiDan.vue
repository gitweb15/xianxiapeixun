<template>
  <div>
    <top title="菜单管理"></top>
    <div class="main" style="width:100%;">
      <div style="padding:10px 0px 10px 10px;text-align:left;">
        <el-button type="primary" size="small" @click.native="cai = true">新增菜单</el-button>
        <!-- 弹出层 -->
        <el-dialog title="菜单管理" :visible.sync="cai" width="70%">
          <el-form :model="form" class="clear">
            <el-form-item label="菜单类型：">
              <el-select v-model="form.region" placeholder="请选择内容">
                <el-option label="小程序菜单" value="xiaocx"></el-option>
                <el-option label="后台菜单" value="houtai"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动名称：">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="父菜单名称：">
              <el-select v-model="form.region" placeholder="请选择内容">
                <el-option label="父菜单一" value="fu1"></el-option>
                <el-option label="父菜单二" value="fu2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="根菜单名称">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="配置地址：" style="width:100%">
              <el-input v-model="form.name" autocomplete="off" style="width:73%"></el-input>
            </el-form-item>
            <el-form-item label="配置地址：" style="width:100%">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否立即激活：">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cai = false">取 消</el-button>
            <el-button type="primary" @click="cai = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="根菜单：" class="left">
            <el-select v-model="formInline.content" placeholder="请选择根菜单">
              <el-option label="已开课" value="已开课"></el-option>
              <el-option label="未开课" value="未开课"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="父菜单：" class="left">
            <el-select v-model="formInline.content" placeholder="请选择父菜单">
              <el-option label="已开课" value="已开课"></el-option>
              <el-option label="未开课" value="未开课"></el-option>
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
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="paixun" label="排序序号"></el-table-column>
          <el-table-column prop="jiBool" label="是否激活"></el-table-column>
          <el-table-column label="使用订单" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button @click="handleClick2(scope.row)" type="text" size="small">禁用</el-button>
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
  name: "CaiDan",
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
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 2,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 3,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 4,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "",
          gName: "",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          address: "",
          paixun: "1",
          jiBool: "是"
        },
        {
          id: 5,
          type: "小程序菜单",
          name: "课程",
          fName: "课程管理",
          gName: "课程管理",
          address: "",
          paixun: "1",
          jiBool: "是"
        }
      ],
      cai: false,
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
    },
    handleClick (val){
      this.cai = true
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
.el-dialog__wrapper .el-input__inner {
  height: 35px;
}
.el-dialog__body .el-form-item__content > .el-input,
.el-dialog__body .el-form-item__content > .el-select {
  width: 250px;
}
.el-dialog__body .el-form-item__label {
  width: 120px;
}
.el-dialog__body .el-form-item{
  float: left;
  width: 370px;
  margin-top: 10px;
}
.el-dialog__body .el-form-item:nth-child(2),.el-dialog__body .el-form-item:nth-child(4){
  margin-left: 40px;
}
</style>