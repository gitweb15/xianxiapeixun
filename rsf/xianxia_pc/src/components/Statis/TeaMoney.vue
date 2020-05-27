<template>
  <div>
    <Top title="教师业务流水分析"></Top>
    <div class="main">
      <div class="clear">
        <div class="left mainLeft">
          <div class="clear">
            <div class="left">
              <h4>今日业务报班量统计</h4>
            </div>
            <div class="right btncss">
              <div style="text-align:right">
                <el-button size="mini">本月</el-button>
                <el-button size="mini">本周</el-button>
                <el-button size="mini">本日</el-button>
              </div>
            </div>
          </div>
          <div id="chart" class="chart" style="width: 550px;height:240px;"></div>
          <!-- leftMian-->
        </div>
        <div class="left mainRight">
          <div class="clear">
            <h4 class="left gxqCss">今日业务报班量统计</h4>
            <div class="right btncss">
              <el-button size="mini">本月</el-button>
              <el-button size="mini">本周</el-button>
              <el-button size="mini">本日</el-button>
            </div>
          </div>
          <div id="chart2" class="chart" style="width: 550px;height:200px;"></div>
        </div>
        <!-- rightMian-->
      </div>
      <div class="botton">
        <div class="clear">
          <h4 class="left gxqCss">业务报班量统计表</h4>
          <div class="right btncss">
            <el-button size="mini">本月</el-button>
            <el-button size="mini">本周</el-button>
            <el-button size="mini">本日</el-button>
          </div>
        </div>
        <div>
          <el-table
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column prop="pai" label="排名" width="180"></el-table-column>
            <el-table-column prop="tea" label="业务教师" width="180"></el-table-column>
            <el-table-column prop="bbNum" label="报班数量" sortable></el-table-column>
            <el-table-column prop="bbMoney" label="报班金额" sortable></el-table-column>
            <el-table-column prop="paiS" label="排名" sortable></el-table-column>
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
  </div>
</template>

<script>
import Top from "@/components/Top";
let echarts = require("echarts/lib/echarts");
// 引入饼状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "ClassMoney",
  data() {
    return {
      yewuVal: 10000.0,
      zizhuVal: 90000.0,
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示10条
      totalNum: 5, //总页数
      options: [
        { value: "选项1", label: "百合" },
        { value: "选项2", label: "水南" },
        { value: "选项3", label: "龙山" },
        { value: "选项4", label: "玫瑰" },
        { value: "选项5", label: "滨江" },
        { value: "选项6", label: "融侨城" },
        { value: "选项7", label: "宏路" }
      ],
      value: "",
      tableData: [
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 12,
          bbMoney: 1000.0,
          paiS: "上升1"
        },
        {
          id: 0,
          pai: 2,
          tea: "业务教师",
          bbNum: 15,
          bbMoney: 1900.0,
          paiS: "上升2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 11,
          bbMoney: 1300.0,
          paiS: "下降2"
        },
        {
          id: 0,
          pai: 2,
          tea: "业务教师",
          bbNum: 15,
          bbMoney: 1900.0,
          paiS: "上升2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 11,
          bbMoney: 1300.0,
          paiS: "下降2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 15,
          bbMoney: 1900.0,
          paiS: "上升2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 11,
          bbMoney: 1300.0,
          paiS: "下降2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 15,
          bbMoney: 1900.0,
          paiS: "上升2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 11,
          bbMoney: 1300.0,
          paiS: "下降2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 15,
          bbMoney: 1900.0,
          paiS: "上升2"
        },
        {
          id: 0,
          pai: 1,
          tea: "业务教师",
          bbNum: 11,
          bbMoney: 1300.0,
          paiS: "下降2"
        }
      ]
    };
  },
  mounted() {
    this.moneySta();
    this.moneyTong();
  },
  methods: {
    moneySta() {
      var myChart = echarts.init(document.getElementById("chart"));
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function(data) {
            return (
              data.name +
              " : " +
              data.value +
              " (" +
              data.percent.toFixed(1) +
              "%)"
            );
          }
        },
        legend: {
          // orient: 'vertical',
          button: 10,
          left: "center",
          data: [
            "百合校区",
            "水南校区",
            "龙山校区",
            "玫瑰园校区",
            "滨江校区",
            "融侨城校区",
            "宏路校区"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "45%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "centers"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "13",
                fontWeight: "bold",
                position: "center",
                formatter: function(data) {
                  return data.name + data.percent.toFixed(1) + "%";
                }
              }
            },
            labelLine: {
              show: true,
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            data: [
              { value: 10, name: "百合校区" },
              { value: 12, name: "水南校区" },
              { value: 12, name: "龙山校区" },
              { value: 12, name: "玫瑰园校区" },
              { value: 12, name: "滨江校区" },
              { value: 12, name: "融侨城校区" },
              { value: 12, name: "宏路校区" }
            ]
          }
        ],
        color: [
          "#FC7A5C",
          "#006600",
          "#262626",
          "#34D4F1",
          "#7687E8",
          "#3A4B68"
        ]
      };
      myChart.setOption(option);
    },
    moneyTong() {
      var myChart = echarts.init(document.getElementById("chart2"));
      let option = {
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: 10, name: "百合校区" },
              { value: 12, name: "水南校区" },
              { value: 12, name: "龙山校区" },
              { value: 12, name: "玫瑰园校区" },
              { value: 12, name: "滨江校区" },
              { value: 12, name: "融侨城校区" },
              { value: 12, name: "宏路校区" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: [
          "#FC7A5C",
          "#006600",
          "#262626",
          "#34D4F1",
          "#7687E8",
          "#3A4B68"
        ]
      };

      myChart.setOption(option);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    }
  },
  components: {
    Top
  }
};
</script>
<style lang="less" ref="stylesheet/scss"  scoped>
.main {
  text-align: left;
  height: 537px;
  overflow: scroll;
}
.main > .clear {
  width: 1346px;
}
.mainLeft {
  width: 573px;
  height: 310px;
  box-shadow: 0px 0px 20px lightgray;
  margin: 30px 40px 20px 80px;
}
.mainRight {
  width: 573px;
  height: 310px;
  margin: 30px 40px 20px;
  box-shadow: 0px 0px 20px lightgray;
}
.botton {
  width: 1230px;
  box-shadow: 0px 0px 20px lightgrey;
  margin-left: 78px;
}
.mainLeft h4 {
  padding: 10px 20px;
  font-size: 15px;
}
.btncss {
  padding-right: 20px;
}
.btncss button {
  margin: 10px 0 10px;
}
.Valtext h4 {
  margin: 30px;
}
.gxqCss {
  padding: 10px 20px;
  font-size: 15px;
}
.fromcss {
  margin-top: 5px;
}
.fromcss span {
  color: lightgray;
  font-size: 14px;
  padding-right: 10px;
}
.fromcss {
  .el-input {
    width: 140px !important;
    margin-left: 4px;
    height: 30px;
  }
  .el-input__inner {
    width: 140px !important;
    margin-left: 4px;
    height: 30px !important;
  }
  .el-input--suffix .el-input__inner {
    width: 140px !important;
    margin-left: 4px;
    height: 30px !important;
  }
  .el-input__icon {
    height: 116%;
  }
}
</style>