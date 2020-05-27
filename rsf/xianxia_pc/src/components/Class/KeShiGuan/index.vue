<template>
  <div>
    <top title="课时管理"></top>
    <div class="main" style="width:100%;">
      <div class="text-left">
        <el-button type="primary" @click="onSubmit" size="small">新增课时</el-button>
        <el-dialog :visible.sync="insertClass" width="45%" style="height:500px;">
        <span style="padding-right:10px;">教室名称</span>
          <el-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          ></el-time-picker>
          <div slot="footer" class="dialog-footer">
            <el-button @click="insertClass = false">取 消</el-button>
            <el-button type="primary" @click="insertClass = false">保 存</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;"></div>
      <div class="main-tab">
        <el-table
          :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
          :cell-style="rowClass"
        >
          <el-table-column prop="jieNum" label="节次"></el-table-column>
          <el-table-column prop="kaiData" label="开始时间"></el-table-column>
          <el-table-column prop="jieData" label="结束时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
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
  name: "KeShiGuan",
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
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
        },
        {
          id: 0,
          jieNum: "1",
          kaiData: "2019-02-03",
          jieData: "2020-02-03"
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