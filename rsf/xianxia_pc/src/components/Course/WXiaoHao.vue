<template>
  <div>
    <top title="晚辅导课程消耗"></top>
    <div class="main" style="width:100%;">
      <div style="padding:10px 0px 10px 10px;text-align:left;">
        <el-button type="primary" size="small" @click.native="dialogFormVisible = true">批量消耗</el-button>
        <el-button type="primary" size="small" @click.native="zixiao = true">设置自动消耗</el-button>
        <el-dialog :visible.sync="dialogFormVisible" width="40%">
          <span style="color:gray;padding-right:10px;">消耗课时</span>
          <el-input-number v-model="num" :min="1" :max="10" label="描述文字" placeholder="请输入课时数"></el-input-number>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog :visible.sync="zixiao" width="40%">
          <span style="color:#999;padding-right:10px;font-size:13px;">每周自动消耗课时</span>
          <el-input-number v-model="num" :min="1" :max="10" label="描述文字" placeholder="请输入课时数"></el-input-number>
          <div slot="footer" class="dialog-footer">
            <el-button @click="zixiao = false">取 消</el-button>
            <el-button type="primary" @click="zixiao = false">确 定</el-button>
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
          <el-table-column prop="Oprice" label="单价"></el-table-column>
          <el-table-column prop="can" label="学习中人数"></el-table-column>
          <el-table-column prop="Pprice" label="本周已消耗课时"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small" @click.native="dialogFormVisible = true">消耗</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small" @click.native="zixiao = true">消耗规则</el-button>
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
  name: "XiaoHao",
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
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
        },
        {
          id: '编码',
          name: '名称',
          xiaoQ: '校区',
          grade: '年级',
          Oprice: '单价',
          can: '学习中人数'
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
      num: undefined,
      zixiao: false
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
  height: 40px !important;
}
.el-dialog__body,
.dialog-footer {
  text-align: center;
}
.el-input-number {
  width: 250px;
}
</style>