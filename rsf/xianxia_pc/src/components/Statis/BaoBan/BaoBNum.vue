<template>
  <div>
    <Top title="报班量统计分析"></Top>
    <div class="main">
      <div class="clear">
        <div class="left mainLeft">
          <div class="clear">
            <div class="left">
              <h4>报班金额统计</h4>
              <div id="chart" class="chart" style="width: 300px;height:240px;"></div>
            </div>
            <div class="right btncss">
              <div style="text-align:right">
                <el-button size="mini">本月</el-button>
                <el-button size="mini">本周</el-button>
                <el-button size="mini">本日</el-button>
              </div>
              <div class="Valtext">
                <h4>总收入 {{ yewuVal+zizhuVal }}</h4>
                <h4>自主报班 {{ zizhuVal }}</h4>
                <h4>业务报班 {{ yewuVal }}</h4>
              </div>
            </div>
          </div>
          <!-- leftMian-->
        </div>
        <div class="left mainRight">
          <div class="clear">
            <h4 class="left gxqCss">各校区报班情况</h4>
            <div class="right btncss">
              <el-button size="mini">本月</el-button>
              <el-button size="mini">本周</el-button>
              <el-button size="mini">本日</el-button>
            </div>
          </div>
          <div id="chart2" class="chart" style="width: 480px;height:240px;"></div>
        </div>
        <!-- rightMian-->
      </div>
      <div class="clear">
        <div class="left mainLeft">
          <div class="clear">
            <div class="clear">
              <h4 class="left gxqCss">手机报班转化分析</h4>
              <div class="right btncss">
                <el-button size="mini">本月</el-button>
                <el-button size="mini">本周</el-button>
                <el-button size="mini">本日</el-button>
              </div>
            </div>
            <div id="chart4" class="chart" style="width: 500px;height:300px;"></div>
          </div>
          <!-- leftMian-->
        </div>
        <div class="left mainRight">
          <div class="clear">
            <h4 class="left gxqCss">报班类型统计</h4>
            <div class="right btncss">
              <el-button size="mini">本月</el-button>
              <el-button size="mini">本周</el-button>
              <el-button size="mini">本日</el-button>
            </div>
          </div>
          <div id="chart5" class="chart" style="width: 480px;height:240px;"></div>
        </div>
        <!-- rightMian-->
      </div>
      <div class="botton">
        <div class="clear">
          <h4 class="left gxqCss">近期报班金额趋势</h4>
          <div class="left fromcss">
            <span>校区</span>
            <el-select v-model="value" placeholder="请选择活动区域" size="10px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="right btncss">
            <el-button size="mini">本月</el-button>
            <el-button size="mini">本周</el-button>
            <el-button size="mini">本日</el-button>
          </div>
        </div>
        <div id="chart3" class="chart" style="width: 1000px;height:400px;"></div>
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
  name: "BaoBNum",
  data() {
    return {
      yewuVal: 10000.0,
      zizhuVal: 90000.0,
      options: [
        { value: "选项1", label: "百合" },
        { value: "选项2", label: "水南" },
        { value: "选项3", label: "龙山" },
        { value: "选项4", label: "玫瑰" },
        { value: "选项5", label: "滨江" },
        { value: "选项6", label: "融侨城" },
        { value: "选项7", label: "宏路" }
      ],
      value: ""
    };
  },
  mounted() {
    this.moneySta();
    this.moneyStaZhu();
    this.moneyStaZhe();
    this.moneyLou();
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
              data.seriesName +
              "<br/>" +
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
          bottom: 10,
          left: "center",
          data: ["业务报班", "自主报班"]
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
              { value: this.yewuVal, name: "业务报班" },
              { value: this.zizhuVal, name: "自主报班" }
            ]
          }
        ],
        color: ["#7687e8", "#3a4b68"]
      };
      myChart.setOption(option);
    },
    moneyStaZhu() {
      var myChart = echarts.init(document.getElementById("chart2"));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["业务报班", "自主报班"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["百合", "水南", "龙山", "玫瑰", "滨江", "融侨城", "宏路"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "业务报班",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "自主报班",
            type: "bar",
            stack: "广告",
            barWidth: 20,
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ],
        color: ["#7687e8", "#3a4b68"]
      };
      myChart.setOption(option);
    },
    moneyStaZhe() {
      var myChart = echarts.init(document.getElementById("chart3"));
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          left: "center",
          bottom: 10,
          data: ["业务报班", "自主报班"]
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "5%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2019-04-09",
            "2019-04-10",
            "2019-04-11",
            "2019-04-12",
            "2019-04-13",
            "2019-04-14"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "业务报班",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "自主报班",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ],
        color: ["#7687e8", "#3a4b68"]
      };
      myChart.setOption(option);
    },
    moneyLou() {
      var myChart = echarts.init(document.getElementById("chart4"));
      let option = {
        title: {},
        tooltip: {
          trigger: "item",
          formatter: function(data) {
            return data.name + data.value;
          }
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ["查看课程", "添加订单", "成功支付"]
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              formatter: function(data) {
                return data.percent.toFixed(1) + "%";
              }
            },
            labelLine: {
              show: true,
              length: 10
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "13",
                fontWeight: "bold",
                position: "inside",
                formatter: function(data) {
                  return data.name + data.percent.toFixed(1) + "%";
                }
              }
            },
            data: [
              { value: 500, name: "查看课程" },
              { value: 300, name: "添加订单" },
              { value: 90, name: "成功支付" }
            ]
          }
        ],
        color: ["#3a4b68", "#7687e8", "#34d4f1"]
      };
      myChart.setOption(option);
    },
    moneyTong() {
      var myChart = echarts.init(document.getElementById("chart5"));
      let option = {
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: ["课程续费", "新购课程"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: 800, name: "课程续费" },
              { value: 1700, name: "新购课程" }
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
        color: ["#3a4b68", "#7687e8"]
      };

      myChart.setOption(option);
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