<template>
  <div>
    <top title="学员管理"></top>
    <div class="main" style="width:100%;">
      <div class="main-from clear" style="padding-top:10px;padding-left:10px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit" size="small">搜索</el-button>
          </el-form-item>
          <el-form-item label="学员搜索" class="right">
            <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="main-box clear">
        <el-col :span="8" class="box-left">
          <div class="demo-basic--circle">
            <div class="block" style="position: relative;left: 110px;">
              <el-avatar :size="100" :src="circleUrl"></el-avatar>
            </div>
          </div>
          <h3 style="text-align: center;">学生姓名</h3>
          <div class="box-text">
            <div>
              <span>性别</span>男
            </div>
            <div>
              <span>联系方式</span>1880234567
            </div>
            <div>
              <span>学段</span>初中
            </div>
            <div>
              <span>年级</span>初中二年级
            </div>
            <div>
              <span>是否新生</span>否
            </div>
          </div>
        </el-col>
        <el-col :span="14" class="box-right">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            :header-cell-style="tableHeaderColor"
            :row-class-name="tableRowClassName"
            :cell-style="rowClass"
          >
            <el-tab-pane label="学员订单" name="first">
              <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="tableHeaderColor"
                :row-class-name="tableRowClassName"
                :cell-style="rowClass"
              >
                <el-table-column prop="laiyuan" label="订单来源"></el-table-column>
                <el-table-column prop="tea" label="业务教师"></el-table-column>
                <el-table-column prop="liushui" label="订单流水" width="150px"></el-table-column>
                <el-table-column prop="kecheng" label="课程" width="130px"></el-table-column>
                <el-table-column prop="zong" label="总价"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
				<ul class="ui">
					<li><img src="../../../public/img/jia.png" width="260px"></li>
					<li><img src="../../../public/img/jia.png" width="260px"></li>
					<li><img src="../../../public/img/jia.png" width="260px"></li>
					<li><img src="../../../public/img/jia.png" width="260px"></li>
					<li><img src="../../../public/img/jia.png" width="260px"></li>
					<li><img src="../../../public/img/jia.png" width="260px"></li>
				</ul>
			</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <el-table
                :data="tableData3"
                style="width: 100%"
                :header-cell-style="tableHeaderColor"
                :row-class-name="tableRowClassName"
                :cell-style="rowClass"
              >
                <el-table-column prop="name" label="课程名称"></el-table-column>
                <el-table-column prop="sktime" label="上课时间"></el-table-column>
                <el-table-column prop="kcTea" label="课程教师"></el-table-column>
                <el-table-column prop="status" label="考勤状态"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </div>
    </div>
  </div>
</template>



<script>
import top from "@/components/Top";
import { mapState } from "vuex";
export default {
  name: "StuGuan",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        content: ""
      },
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      activeName: "first",
      tableData: [
        {
          id: 0,
          laiyuan: "自主支付",
          tea: "",
          liushui: "20190415001",
          kecheng: "语文班级课程",
          zong: 1500,
          status: "学习中"
        },
        {
          id: 0,
          laiyuan: "业务销售",
          tea: "业务教师",
          liushui: "20190415002",
          kecheng: "数学一对一",
          zong: 1600,
          status: "已结束"
        },
        {
          id: 0,
          laiyuan: "自主支付",
          tea: "",
          liushui: "20190415001",
          kecheng: "语文班级课程",
          zong: 1500,
          status: "学习中"
        },
        {
          id: 0,
          laiyuan: "业务销售",
          tea: "业务教师",
          liushui: "20190415002",
          kecheng: "数学一对一",
          zong: 1600,
          status: "已结束"
        },
        {
          id: 0,
          laiyuan: "自主支付",
          tea: "",
          liushui: "20190415001",
          kecheng: "语文班级课程",
          zong: 1500,
          status: "学习中"
        },
        {
          id: 0,
          laiyuan: "业务销售",
          tea: "业务教师",
          liushui: "20190415002",
          kecheng: "数学一对一",
          zong: 1600,
          status: "已结束"
        },
        {
          id: 0,
          laiyuan: "自主支付",
          tea: "",
          liushui: "20190415001",
          kecheng: "语文班级课程",
          zong: 1500,
          status: "学习中"
        },
        {
          id: 0,
          laiyuan: "业务销售",
          tea: "业务教师",
          liushui: "20190415002",
          kecheng: "数学一对一",
          zong: 1600,
          status: "已结束"
        },
      ],
      tableData3: [
          {
              id: 1,
              name: '语文班级课程' ,
              sktime: '2020-08-20 14:00',
              kcTea: '授课教师一',
              status: '已考勤'
          },
		  {
		      id: 1,
		      name: '数学一对一' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师二',
		      status: '未考勤'
		  },
		  {
		      id: 1,
		      name: '语文班级课程' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师一',
		      status: '已考勤'
		  },
		  {
		      id: 1,
		      name: '数学一对一' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师二',
		      status: '未考勤'
		  },
		  {
		      id: 1,
		      name: '语文班级课程' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师一',
		      status: '已考勤'
		  },
		  {
		      id: 1,
		      name: '数学一对一' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师二',
		      status: '未考勤'
		  },
		  {
		      id: 1,
		      name: '语文班级课程' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师一',
		      status: '已考勤'
		  },
		  {
		      id: 1,
		      name: '数学一对一' ,
		      sktime: '2020-08-20 14:00',
		      kcTea: '授课教师二',
		      status: '未考勤'
		  }
          ],
      input: ""
    };
  },
  components: {
    top
  },
  methods: {
    onSubmit() {
      // for
      console.log(this.dataContent);
    },
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
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.main-box {
  box-shadow: 0px 0px 15px #ccc;
  width: 90%;
}
.ui li{
	float: left;
	padding-left: 18px;
}
.demo-basic--circle {
  margin: 50px 0 20px;
}
.box-left {
  box-shadow: 0px 0px 10px #ccc;
  margin: 30px;
  box-sizing: border-box;
}
.box-text {
  text-align: left;
  padding: 20px 0 30px;
  color: #666;
}
.box-text div {
  height: 40px;
  line-height: 40px;
}
.box-text span {
  margin-left: 25%;
  font: 800 16px "宋体";
  display: inline-block;
  width: 30%;
}
/** 隔行变色 */
.el-table .warning-row {
  background: #f2f2f2;
}

.el-table .success-row {
  background: white;
}
.box-right{
    padding-top: 20px;
}
</style>