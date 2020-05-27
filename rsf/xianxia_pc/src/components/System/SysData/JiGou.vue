<template>
  <div>
    <top title="机构通知"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="left">
            <el-button type="primary" @click="onSubmit">新增机构通知</el-button>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary">搜索</el-button>
          </el-form-item>
          <el-form-item class="right" label="通知关键字：" style="margin-right:10px;">
            <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <!-- 新增机构弹出层 -->
        <el-dialog title="通知内容" :visible.sync="insertJiGou" width="70%">
          <el-form :model="form" style="text-align:left;padding-left:30px;">
            <el-form-item label="活动名称" style="width:100%">
              <el-input
                type="textarea"
                style="width:80%"
                :rows="6"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="value1" multiple placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="insertJiGou = false">发 送</el-button>
            <el-button @click="insertJiGou = false">重 置</el-button>
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
          <el-table-column prop="name" label="通知名称"></el-table-column>
          <el-table-column prop="content" label="通知内容" width="700"></el-table-column>
          <el-table-column prop="user" label="发送用户"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="selFun(scope.row)" type="text" size="small">查看</el-button>
              <!-- 查询弹出层 -->
              <el-dialog title="通知内容" :visible.sync="selJiGou" width="70%">
                <el-form :model="form" style="text-align:left;padding-left:30px;">
                  <el-form-item label="查看内容" style="width:100%">
                    <el-input
                      type="textarea"
                      style="width:80%"
                      :rows="6"
                      placeholder="各位老师请注意，本周末因为上级检查临时休息，请安排好自己的工作，谢谢！"
                      v-model="textarea"
                      :disabled="true"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="发送用户" :label-width="formLabelWidth">
                    <el-tag>业务教师</el-tag>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <el-tag>授课教师</el-tag>
                  </el-form-item>
                  <el-form-item label="发送时间" :label-width="formLabelWidth">2019-4-14 23:01:17</el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="selJiGou = false">确 认</el-button>
                </div>
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
import top from "@/components/Top";
import { mapState } from "vuex";
export default {
  name: "JiGou",
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
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 2,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 1,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 2,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 1,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 2,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 1,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 2,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 1,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 2,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 1,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        },
        {
          id: 2,
          name: "名字",
          content:
            "亲爱的[UserName],您的学员[StuName]在[CourseData]应参加的[CourseName]考勤味道,请确认!",
          user: "家长"
        }
      ],
      selTui: false,
      dialogFormVisible: false,
      selData: {},
      textarea:
        "亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束，请确认！",
      insertJiGou: false,
      form: {},
      textarea: "",
      options: [
        {
          value: "选项1",
          label: "家长"
        },
        {
          value: "选项2",
          label: "业务教师"
        },
        {
          value: "选项3",
          label: "授课教师"
        }
      ],
      value1: [],
      selJiGou: false
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    onSubmit() {
      this.insertJiGou = true;
    },
    rowClass() {
      return "text-align: center;";
    },
    selFun(val) {
      this.selJiGou = true;
    }
  },
  computed: {},
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
.disDiv > div {
  width: 50%;
  display: inline-block;
  padding: 15px 0;
}
.disDiv > div > span {
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 10px;
}
</style>