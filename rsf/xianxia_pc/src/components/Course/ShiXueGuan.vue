<template>
  <div>
    <top title="试学课程管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="校区" class="left">
            <el-select v-model="formInline.region" placeholder="请选择校区">
              <el-option label="城南校区" value="城南校区"></el-option>
              <el-option label="滨江校区" value="滨江校区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年级" class="left">
            <el-select v-model="formInline.region" placeholder="请选择年级">
              <el-option label="初中一年级" value="初中一年级"></el-option>
              <el-option label="初中二年级" value="初中二年级"></el-option>
              <el-option label="初中三年级" value="初中三年级"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态" class="left">
            <el-select v-model="formInline.content" placeholder="请选择状态">
              <el-option label="已开课" value="已开课"></el-option>
              <el-option label="未开课" value="未开课"></el-option>
            </el-select>
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
          <el-table-column prop="id" label="编码"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="xiaoQ" label="校区"></el-table-column>
          <el-table-column prop="grade" label="年级"></el-table-column>
          <el-table-column prop="Oprice" label="原价"></el-table-column>
          <el-table-column prop="can" label="是否参与活动"></el-table-column>
          <el-table-column prop="shiJia" label="试学价格"></el-table-column>
          <el-table-column prop="Pprice" label="试学时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">设置试学规则</el-button>
              <el-dialog
                title="设置试学规则"
                :visible.sync="dialogVisible"
                width="40%"
                style="text-align:left"
              >
                <div class="clear">
                  <div class="left" style="width:17%;line-height:35px">课程原价：</div>
                  <div class="left" style="width:30%;margin-right:10px;line-height:35px">1500</div>
                  <div class="left" style="width:17%;line-height:35px">课程原课时：</div>
                  <div class="left" style="width:30%;line-height:35px">15课时</div>
                </div>
                <div class="clear" style="margin-top:10px;">
                  <div class="left" style="width:17%;line-height:35px">活动价格：</div>
                  <div class="left" style="width:30%;margin-right:10px;">
                    <el-input v-model="jia" placeholder="请输入试学价格" clearable></el-input>
                  </div>
                  <div class="left" style="width:17%;line-height:35px">试学课时：</div>
                  <div class="left" style="width:30%">
                    <el-input v-model="jia" placeholder="请输入试学课时" clearable></el-input>
                  </div>
                </div>
                <p style="color: red;padding-left:77px;">注意设置价格则代表参加活动！</p>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
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
  name: "ShiXueGuan",
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
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          Oprice: "原价",
          can: "是否参与活动价",
          shiJia: "试学价格",
          Pprice: "试学时间"
        }
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
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
      dialogVisible: false,
      jia: ""
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
    handleClick(val) {
      this.dialogVisible = true;
    }
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
</style>