<template>
  <div>
    <top title="教师管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="left">
            <el-button type="primary" @click="insertBool=true">新增教师</el-button>
          </el-form-item>
          <el-form-item class="left">
            <el-button type="primary">导出Excel</el-button>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 弹出层 -->
        <el-dialog title="教师详情" :visible.sync="insertBool" width="70%">
          <el-form :model="form">
            <div class="clear">
              <div class="left" style="width:40%">
                <el-form-item label="教师姓名：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
              <div class="left" style="width:40%">
                <el-form-item label="手机号码：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="clear">
              <div class="left" style="width:40%">
                <el-form-item label="身份证号：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
              <div class="left" style="width:40%">
                <el-form-item label="联系地址：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
                </el-form-item>
              </div>
            </div>
            <div>
              <el-form-item label="联系地址：" :label-width="formLabelWidth">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-change="handleChange"
                >
                  <el-button type="info" icon="el-icon-upload" plain>点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </div>
            <div class="clear">
              <div class="left" style="width:40%">
                <el-form-item label="所在校区：" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="left" style="width:40%">
                <el-form-item label="教学类型：" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div class="clear">
              <div class="left" style="width:40%">
                <el-form-item label="教学学段：" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="left" style="width:40%">
                <el-form-item label="教学科目：" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item label="教师简介：" :label-width="formLabelWidth">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" style="width:77%"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="insertBool = false">取 消</el-button>
            <el-button type="primary" @click="insertBool = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="main-tab">
        <el-table
          :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          :header-cell-style="tableHeaderColor"
        >
          <el-table-column prop="teaName" label="教师姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号码"></el-table-column>
          <el-table-column prop="xiaoQ" label="所在校区"></el-table-column>
          <el-table-column prop="teaType" label="教师类型"></el-table-column>
          <el-table-column prop="xueduan" label="教学学段"></el-table-column>
          <el-table-column prop="kemu" label="教学科目"></el-table-column>
          <el-table-column label="操作" width="118">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
  name: "TeaManage",
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
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        },
        {
          teaName: '教师姓名',
          phone: '手机号码',
          xiaoQ: '所在校区',
          teaType: '教师类型',
          xueduan: '教学学段',
          kemu: '教学科目'
        }
      ],
      insertBool: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: []
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
    },
    handleClick (val) {
      this.insertBool = true
    }
  },
  created() {
    this.totalNum = this.dataContent.length;
  }
};
</script>

<style>
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
.el-form-item{
  text-align: left;
}
</style>