<template>
  <div>
    <top title="分班管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="校区" class="left">
            <el-select v-model="formInline.region" placeholder="请选择校区">
              <el-option label="城南校区" value="城南校区"></el-option>
              <el-option label="滨江校区" value="滨江校区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程名称" class="left">
            <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
        <el-dialog :visible.sync="selTan" style="text-align:left">
          <el-form :model="form">
            <div class="clear">
              <div class="left" style="width:50%">
                <el-form-item label="课程编码">
                  <el-input v-model="form.name" class="width70"></el-input>
                </el-form-item>
              </div>
              <div class="left" style="width:50%">
                <el-form-item label="课程名称">
                  <el-input v-model="form.name" class="width70"></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item label="年级">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <div class="clear">
              <div class="left" style="width:50%">
                <el-form-item label="价格">
                  <el-input v-model="form.name" class="width70"></el-input>
                </el-form-item>
              </div>
              <div class="left" style="width:50%">
                <el-form-item label="课时">
                  <el-input v-model="form.name" class="width70"></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item label="立即开课">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="课程简介">
              <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="selTan = false">取 消</el-button>
            <el-button type="primary" @click="selTan = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="main-tab">
        <el-table
          :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="id" label="课程编码" width="250"></el-table-column>
          <el-table-column prop="name" label="课程名称" width="299"></el-table-column>
          <el-table-column prop="xiaoQ" label="校区" width="150"></el-table-column>
          <el-table-column prop="Oprice" label="未排课" width="250"></el-table-column>
          <el-table-column prop="can" label="已分班数量" width="250"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">分班</el-button>
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
  name: "FenBanGuanLi",
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
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        },
        {
          id: '课程编码',
          name: '课程名称',
          xiaoQ: '校区',
          Oprice: '未排课',
          can: '已分班数量'
        }
      ],
      selTan: false,
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
      radio: '1'
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
      // 查询的点击事件
      this.selTan = true;
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
.width70 {
  width: 70%;
}
</style>