<template>
  <div>
    <top title="校区管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="left">
            <el-button type="primary" @click="insertBool=true">新增校区</el-button>
          </el-form-item>
          <el-form-item class="left">
            <el-button type="primary">导出Excel</el-button>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-dialog title="校区详情" :visible.sync="insertBool" width="70%">
          <el-form :model="form">
            <div class="clear">
              <div class="left" style="width:40%">
                <el-form-item label="校区名称：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
              <div class="left" style="width:40%">
                <el-form-item label="校区地址：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="clear">
              <div class="left" style="width:40%">
                <el-form-item label="联系方式：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="insertBool = false">取 消</el-button>
            <el-button type="primary" @click="insertBool = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="main-tab">
        <el-table
          :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :cell-style="rowClass"
        >
          <el-table-column prop="id" label="序"></el-table-column>
          <el-table-column prop="name" label="校区名称"></el-table-column>
          <el-table-column prop="address" label="校区地址"></el-table-column>
          <el-table-column prop="phone" label="联系方式"></el-table-column>
          <el-table-column label="操作" width="118">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
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
  name: "XiaoQu",
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
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 2,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 3,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 4,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 5,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 6,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 7,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 8,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 9,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 10,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 11,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        },
        {
          id: 12,
          name: "城南校区",
          address: "财富广场4楼",
          phone: "110"
        }
      ],
      insertBool: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: []
    };
  },
  components: {
    top
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;text-align: center;";
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
    handleClick (val) {
      // 修改点击事件
      this.insertBool = true
    }
  },
  created() {
    this.totalNum = this.dataContent.length;
  }
};
</script>

<style>
.upload-demo {
  text-align: left;
}
.el-upload__tip {
  margin: 0px;
  height: 30px;
}
.el-table td {
  padding: 7px 0 !important;
}
.el-form-item {
  text-align: left;
}
</style>