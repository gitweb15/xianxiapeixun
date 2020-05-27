<template>
  <div>
    <top title="班级课程活动管理"></top>
    <div class="main" style="width:100%;">
      <div style="padding:10px 0px 10px 10px;text-align:left;">
        <el-button type="primary" @click.native="dialogFormVisible = true">新增</el-button>
        <el-dialog title="活动管理" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称">
              <el-input v-model="form.name" class="width70" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="活动开始时间">
              <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="活动结束时间">
              <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
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
          <el-table-column prop="name" label="活动名称"></el-table-column>
          <el-table-column prop="xiaoQ" label="开始时间"></el-table-column>
          <el-table-column prop="grade" label="结束时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small" @click.native="dialogFormVisible = true">修改</el-button>
              <router-link to="wfdSel">
                <el-button @click="handleClick(scope.row)" type="text" size="small" to="wfdSel">查看</el-button>
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
  name: "banHuoGuan",
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
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
        },
        {
          id: '序',
          name: '开班时间',
          grade: '结束时间'
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
      value1: '',
      value2: '',
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
  width: 30%;
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