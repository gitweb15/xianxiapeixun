<template>
  <div>
    <top title="分班列表"></top>
    <div class="main" style="width:100%;">
      <div style="padding:10px 0px 10px 10px;text-align:left;">
        <el-button type="primary" @click.native="dialogFormVisible = true">新增分班</el-button>

        <el-dialog :visible.sync="dialogFormVisible">
          <el-form :model="form" class="from">
            <!-- 课程-->
            <div class="clear">
              <div class="left">
                <el-form-item label="课程编码">
                  <el-input v-model="form.name" placeholder="请输入内容" style="width:60%"></el-input>
                </el-form-item>
              </div>
              <div class="left">
                <el-form-item label="课程名称">
                  <el-input v-model="form.name" placeholder="请输入内容" style="width:60%"></el-input>
                </el-form-item>
              </div>
            </div>
            <!-- 年级-->
            <el-form-item label="年级">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="一年级" value="shanghai"></el-option>
                <el-option label="二年级" value="beijing"></el-option>
                <el-option label="三年级" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <!-- 价格-->
            <div class="clear">
              <div class="left">
                <el-form-item label="课程编码">滨江校区</el-form-item>
              </div>
              <div class="left">
                <el-form-item label="课时">
                  <el-input v-model="form.name" placeholder="请输入内容" style="width:60%"></el-input>
                </el-form-item>
              </div>
            </div>
            <!-- 开课-->
            <el-form-item label="立即开课">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
            <!-- 课程描述 -->
            <el-form-item label="课程描述">
              <el-input
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 6}"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="校区" class="left">
            <el-select v-model="formInline.region" placeholder="请选择校区">
              <el-option label="城南校区" value="城南校区"></el-option>
              <el-option label="滨江校区" value="滨江校区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">搜索</el-button>
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
          <el-table-column prop="id" label="课程编码" width="200"></el-table-column>
          <el-table-column prop="name" label="课程名称" width="250"></el-table-column>
          <el-table-column prop="xiaoQ" label="班级编码" width="200"></el-table-column>
          <el-table-column prop="grade" label="班级名称" width="200"></el-table-column>
          <el-table-column prop="Oprice" label="授课教师" width="200"></el-table-column>
          <el-table-column prop="can" label="学员数量" width="180"></el-table-column>
          <el-table-column label="操作" width="118">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">管理</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">移除</el-button>
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
  name: "FenBanTab",
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
      dataContent: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "120px",
      radio: 1
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
.el-dialog__header {
  padding: 0px !important;
}
.from .left {
  width: 50%;
}
</style>