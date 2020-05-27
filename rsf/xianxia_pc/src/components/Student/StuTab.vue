<template>
  <div>
    <top title="学员列表"></top>
    <div class="main" style="width:100%;">
      <div style="padding:10px 0px 10px 10px;text-align:left;">
        <el-button type="primary" size="small" @click.native="dialogFormVisible = true">导出Excel</el-button>
      </div>
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="学员姓名" class="left">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="家长手机号码" class="left">
             <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="校区" class="left">
            <el-select v-model="formInline.content" placeholder="请选择校区">
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
          <el-table-column prop="name" label="学员姓名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="phone" label="家长联系方式"></el-table-column>
          <el-table-column prop="xueD" label="学段"></el-table-column>
          <el-table-column prop="nianj" label="年级"></el-table-column>
          <el-table-column prop="xinBool" label="是否新学员"></el-table-column>
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
  name: "StuTab",
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
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
        },
        {
          id: 1,
          name: '学员一',
          sex: '男',
          phone: '133...',
          xueD: '初中',
          nianj: '初中二年级',
          xinBool: '是'
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