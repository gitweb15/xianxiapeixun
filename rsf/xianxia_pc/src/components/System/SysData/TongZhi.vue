<template>
  <div>
    <top title="通知管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="通知内容：" class="left">
            <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="发送用户：" class="left">
            <el-select v-model="formInline.region" placeholder="请选中内容">
              <el-option label="家长" value="1"></el-option>
              <el-option label="授课老师" value="2"></el-option>
              <el-option label="业务老师" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit" size="small">搜索</el-button>
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
          <el-table-column prop="name" label="通知名称"></el-table-column>
          <el-table-column prop="content" label="通知内容" width="700"></el-table-column>
          <el-table-column prop="user" label="发送用户"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-dialog title="通知编辑" :visible.sync="selTui">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <div class="clear">
                    <el-form-item label="通知标题：" class="left">
                      <el-input v-model="formInline.user" placeholder="课程结束提醒" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="发送用户：" class="left">
                      <el-input v-model="formInline.j" placeholder="家长" :disabled="true"></el-input>
                    </el-form-item>
                  </div>
                  <div>
                  <el-form-item label="通知内容">
                    <el-input type="textarea" :rows="4" v-model="textarea" style="width:600px;text-align:left;"></el-input>
                  </el-form-item>
                  </div>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="selTui = false">保 存</el-button>
                  <el-button type="primary" @click="selTui = false">重 置</el-button>
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
  name: "TongZhi",
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
      textarea: '亲爱的[UserName],您报名的[CourseName]的课程还剩3个课时即将结束，请确认！'
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
      // for
      console.log(this.dataContent);
    },
    handleClick(val) {
      this.selTui = true;
      this.selData = val;
    },
    rowClass() {
      return "text-align: center;";
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