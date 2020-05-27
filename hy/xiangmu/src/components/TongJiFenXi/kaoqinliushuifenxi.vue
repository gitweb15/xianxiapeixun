<template>
	<div>
		<Top title="考勤流水分析"></Top>
		<div class="main">
			<div class="clear">
				<div class="left mainLeft">
					<div class="clear">
						<div class="left">
							<h4>今日考勤总览</h4>
							<div id="chart" class="chart" style="width: 300px;height:240px;"></div>
						</div>
						<div class="right btncss">
							<div class="Valtext">
								<h4>应到 {{ yewuVal+zizhuVal }}</h4>
								<h4>实到 {{yewuVal}}</h4>
								<h4>未到 {{zizhuVal}}</h4>
							</div>
						</div>
					</div>
					<!-- leftMian-->
				</div>
				<div class="left mainRight">
					<div class="clear">
						<h4 class="left gxqCss">各校区考勤情况</h4>
					</div>
					<div id="chart2" class="chart" style="width: 480px;height:240px;"></div>
				</div>
				<!-- rightMian-->
			</div>

			<div class="botton">
				<div class="clear">
					<h4 class="left gxqCss">近期考勤趋势</h4>
					<div class="left fromcss">
						<span>校区</span>
						<el-select v-model="value" placeholder="请选择校区" size="10px">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</div>
					<div class="right btncss">
						<el-button size="mini">近一年</el-button>
						<el-button size="mini">近半年</el-button>
						<el-button size="mini">近七日</el-button>
					</div>
				</div>
				<div id="chart3" class="chart" style="width: 1000px;height:400px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import Top from "../Top";
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
				yewuVal: 1330.0,
				zizhuVal: 70.0,
				options: [{
						value: "选项1",
						label: "百合校区"
					},
					{
						value: "选项2",
						label: "水南"
					},
					{
						value: "选项3",
						label: "龙山"
					},
					{
						value: "选项4",
						label: "玫瑰"
					},
					{
						value: "选项5",
						label: "滨江"
					},
					{
						value: "选项6",
						label: "融侨城"
					},
					{
						value: "选项7",
						label: "宏路"
					}
				],
				value: ""
			};
		},
		mounted() {
			this.moneySta();
			this.moneyStaZhu();
			this.moneyStaZhe();
			this.moneyLou();
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
						data: ["实到", "未到"]
					},
					series: [{
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
						data: [{
								value: this.yewuVal,
								name: "实到"
							},
							{
								value: this.zizhuVal,
								name: "未到"
							}
						]
					}],
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

					grid: {
						left: "3%",
						right: "4%",
						bottom: "3%",
						containLabel: true
					},
					xAxis: [{
						type: "category",
						data: ["百合", "水南", "龙山", "玫瑰", "滨江", "融侨城", "宏路"]
					}],
					yAxis: [{
						type: "value"
					}],
					series: [{
							name: "业务报班",
							type: "bar",
							stack: "广告",
							data: [20, 82, 91, 34, 90, 30, 10]
						},
						{
							name: "自主报班",
							type: "bar",
							stack: "广告",
							barWidth: 20,
							data: [50, 32, 21, 54, 90, 30, 10]
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
						data: ["实到", "未到"]
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
					series: [{
							name: "实到",
							type: "line",
							stack: "总量",
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: "未到",
							type: "line",
							stack: "总量",
							data: [1200, 1320, 1001, 1304, 1200, 1300, 1200]
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
							dataView: {
								readOnly: false
							},
							restore: {},
							saveAsImage: {}
						}
					},
					legend: {
						data: ["查看课程", "添加订单", "成功支付"]
					},

					series: [{
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
						data: [{
								value: 500,
								name: "查看课程"
							},
							{
								value: 300,
								name: "添加订单"
							},
							{
								value: 90,
								name: "成功支付"
							}
						]
					}],
					color: ["#3a4b68", "#7687e8", "#34d4f1"]
				};
				myChart.setOption(option);
			}
		},
		components: {
			Top
		}
	};
</script>
<style lang="less" ref="stylesheet/scss" scoped>
	.main {
		text-align: left;
		height: 640px;
	}

	.mainLeft {
		width: 503px;
		height: 310px;
		box-shadow: 0px 0px 20px lightgray;
		margin: 30px 40px 20px 30px;
	}

	.mainRight {
		width: 503px;
		height: 310px;
		margin: 30px 30px 20px;
		box-shadow: 0px 0px 20px lightgray;
		float: right;
		position: relative;
		top: -360px;
	}

	.botton {
		width: 1030px;
		box-shadow: 0px 0px 20px lightgrey;
		margin-left: 28px;
		position: relative;
		top: -300px;
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
		margin-top: 20px;
		position: relative;
		left: -30px;
		top: 70px;
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
			height: 86%;
		}
	}
</style>
