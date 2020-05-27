<template>
  <div>
    <top title="班级课程管理"></top>
    <div class="main" style="width:100%;">
      <div style="padding:10px 0px 10px 10px;text-align:left;">
        <el-button type="primary" size="small" @click.native="dialogFormVisible = true">新增课程</el-button>
        <el-button type="primary" size="small">导出Excel</el-button>
        <el-dialog :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="课程封面">
              <!--上传-->
              <el-upload
                class="upload-demo"
                multiple
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="3"
              >
                <el-button size="small" type="info" icon="el-icon-upload" plain>点击上传</el-button>
                <div slot="tip" class="el-upload__tip">支持文件格式：jpg、jpeg,单次上传文件限制大小2MB</div>
              </el-upload>
              <!-- 上传-->
            </el-form-item>
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
            <el-form-item label="开课校区">
              <el-table :data="gridData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="校区" width="180"></el-table-column>
                <el-table-column prop="name" label="教师" width="180"></el-table-column>
                <el-table-column prop="address" label="操作"></el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item label="课程简介">
              <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
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
                    <!-- 查询弹出层 -->
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
          :cell-style="rowClass"
        >
          <el-table-column label="选择" type="selection"></el-table-column>
          <el-table-column prop="id" label="编码"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="xiaoQ" label="校区"></el-table-column>
          <el-table-column prop="grade" label="年级"></el-table-column>
          <el-table-column prop="oprice" label="价格"></el-table-column>
          <el-table-column prop="can" label="学习中人数"></el-table-column>
          <el-table-column prop="Pprice" label="状态"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">开课</el-button>
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
import axios from 'axios'
import top from "@/components/Top";
import { mapState } from "vuex";
export default {
  name: "ban",
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
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
        },
        {
          id: "编码",
          name: "名称",
          xiaoQ: "校区",
          grade: "年级",
          oprice: "价格",
          can: "学习中人数"
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
      selTan: false
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
      // 搜索按钮点击事件
      this.selTan = true
    }
  },
  created() {
    this.totalNum = this.dataContent.length;
  },
  mounted() {
    axios.get('https://www.fastmock.site/mock/26715f0938dee4fe31526bbe7a2af048/xianxia/xianxia/cs').then(res => {
      console.log(res)
    })
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