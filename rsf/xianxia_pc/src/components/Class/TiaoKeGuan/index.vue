<template>
  <div>
    <top title="调课管理"></top>
    <div class="main" style="width:100%;">
      <div class="text-left">
        <router-link to="xztkgl" style="color:white">
          <el-button type="primary" @click="onSubmit" size="small">新增调课</el-button>
        </router-link>
      </div>
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <!-- 校区 -->
          <el-form-item label="校区：" class="left">
            <el-select v-model="formInline.region" placeholder="请选择校区">
              <el-option label="城南校区" value="城南校区"></el-option>
              <el-option label="水榭校区" value="水榭校区"></el-option>
              <el-option label="世贸校区" value="世贸校区"></el-option>
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
          :cell-style="rowClass"
        >
          <el-table-column prop="xiaoQ" label="校区"></el-table-column>
          <el-table-column prop="tkName" label="调课课程"></el-table-column>
          <el-table-column prop="tea" label="教师"></el-table-column>
          <el-table-column prop="yuanKe" label="原上课时间"></el-table-column>
          <el-table-column prop="THouKe" label="调整后时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查询</el-button>
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
  name: "TiaoKeGuan",
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
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        },
        {
          id: "0",
          xiaoQ: "城南校区",
          tkName: "语文一对一个性化课程",
          tea: "王大志",
          yuanKe: "2019-4-26 第二节",
          THouKe: "2019-4-28 第三节"
        }
      ],
      form: [],
      insertClass: false
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
      this.insertClass = true;
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
.width80 {
  width: 80%;
}
.text-left {
  text-align: left;
  margin: 10px;
}
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
td {
  text-align: center;
}
</style>