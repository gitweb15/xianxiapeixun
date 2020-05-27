<template>
	<div>
		<Top title="教师业务流水分析"></Top>
		<div class="main">
			<div class="clear">
			</div>
			<div class="clear a">
				<div class="mainLeft1">
					<div class="clear">
						<div class="right btncss">
							<el-button size="mini">本月</el-button>
							<el-button size="mini">本周</el-button>
								<el-button size="mini" style='color:white;background: #0000FF;'>本日</el-button>
						</div>

						<h4>今日量业务报班统计</h4>
						<div style="margin-top: 20px;">
							<ve-pie :data="chartData"></ve-pie>
						</div>
					</div>
					<!-- leftMian-->
				</div>
				<div class="mainRight1">
					<div class="right btncss">
						<el-button size="mini">本月</el-button>
						<el-button size="mini">本周</el-button>
							<el-button size="mini" style='color:white;background: #0000FF;'>本日</el-button>
					</div>
					<div class="clear">
						<h4 class="left gxqCss">今日量业务报金额统计</h4>
					</div>
					<div style="margin-top: 10px;">
						<ve-pie :data="chartData1"></ve-pie>
					</div>
				</div>

				<!-- rightMian-->
			</div>
			<div class="botton">
				<div class="clear">
					<h4 class="left gxqCss">业务报班量统计表</h4>
					<div class="left fromcss">
						<span>校区</span>
						<el-select v-model="value" placeholder="请选择校区" size="10px">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</div>
					<div class="right btncss">
						<el-button size="mini">本月</el-button>
						<el-button size="mini">本周</el-button>
						<el-button size="mini">本日</el-button>
					</div>
				</div>
				<div class="main-tab">
					<el-table :data="tableData" style="width: 100%;margin-top: 10px;" :header-cell-style="tableHeaderColor"
					 :row-class-name="tableRowClassName">
						<el-table-column label="排名" prop="no" width="180"></el-table-column>
						<el-table-column prop="lai" label="业务教师" width="190"></el-table-column>
						<el-table-column prop="name" label="报班数量" width="190"></el-table-column>
						<el-table-column prop="sex" label="报班金额" width="190"></el-table-column>
						<el-table-column prop="zc" label="排名" width="180"></el-table-column>
					</el-table>
				</div>
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
				formInline: {
					user: '',
					region: '',
					content: ''
				},
				// dataContent:this.wfbSelectJson
				tableData: [{
					no: '1',
					lai: '业务教师一',
					name: '12',
					sex: '￥100000',
					zc: '上升 1',
				}, {
					no: '2',
					lai: '业务教师二',
					name: '2',
					sex: '￥50000',
					zc: '下降 10',
				}, {
					no: '1',
					lai: '业务教师一',
					name: '12',
					sex: '￥100000',
					zc: '上升 1',
				}, {
					no: '2',
					lai: '业务教师二',
					name: '2',
					sex: '￥50000',
					zc: '下降 10',
				}, {
					no: '1',
					lai: '业务教师一',
					name: '12',
					sex: '￥100000',
					zc: '上升 1',
				}, {
					no: '2',
					lai: '业务教师二',
					name: '2',
					sex: '￥50000',
					zc: '下降 10',
				}, {
					no: '1',
					lai: '业务教师一',
					name: '12',
					sex: '￥100000',
					zc: '上升 1',
				}, {
					no: '2',
					lai: '业务教师二',
					name: '2',
					sex: '￥50000',
					zc: '下降 10',
				}, ],
				chartData: {
					columns: ['状态', '数值'],
					rows: [{
							'数值': 11.24,
							'状态': "百合校区"
						},
						{
							'数值': 13.48,
							'状态': "水南校区"
						},
						{
							'数值': 20.47,
							'状态': "龙山校区"
						},
						{
							'数值': 15.43,
							'状态': "玫瑰园校区"
						},
						{
							'数值': 3.37,
							'状态': "滨江校区"
						},
						{
							'数值': 13.48,
							'状态': "融侨城校区"
						},
						{
							'数值': 20.22,
							'状态': "宏路校区"
						}
					]
				},
				chartData1: {
					columns: ['状态', '数值'],
					rows: [{
							'数值': 11.24,
							'状态': "百合校区"
						},
						{
							'数值': 13.48,
							'状态': "水南校区"
						},
						{
							'数值': 20.47,
							'状态': "龙山校区"
						},
						{
							'数值': 15.43,
							'状态': "玫瑰园校区"
						},
						{
							'数值': 3.37,
							'状态': "滨江校区"
						},
						{
							'数值': 13.48,
							'状态': "融侨城校区"
						},
						{
							'数值': 20.22,
							'状态': "宏路校区"
						}
					]
				},
				yewuVal: 90,
				zizhuVal: 10.0,
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
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex % 2 == 1) {
					return "warning-row";
				} else {
					return "success-row";
				}
			},
			tableHeaderColor({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (rowIndex === 0) {
					return "background-color: gainsboro;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;";
				} else {
					return "height:100px;";
				}
			},
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
								value: this.zizhuVal,
								name: "水南校区"
							},
							{
								value: this.yewuVal,
								name: "龙山校区"
							},
							{
								value: this.zizhuVal,
								name: "玫瑰园校区"
							},
							{
								value: this.yewuVal,
								name: "滨江校区"
							},
							{
								value: this.zizhuVal,
								name: "融侨城校区"
							},
							{
								value: this.zizhuVal,
								name: "宏路校区"
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
						data: ["手机报班", "业务报班"]
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
							name: "手机报班",
							type: "line",
							stack: "总量",
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: "业务报班",
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
	.el-table .warning-row {
		background: #f2f2f2;
	}
	
	.el-table .success-row {
		background: white;
	}
	
	.el-table td {
		padding: 7px 0 !important;
	}

	.main {
		text-align: left;
		height: 640px;
	}

	.mainLeft1 {
		width: 503px;
		height: 410px;
		box-shadow: 0px 0px 20px lightgray;
		margin: -40px 40px 20px 30px;
		position: relative;
		top: 70px;
	}

	.mainRight1 {
		width: 503px;
		height: 410px;
		margin: 30px 30px 20px;
		box-shadow: 0px 0px 20px lightgray;
		float: right;
		position: relative;
		top: -390px;
	}

	.mainLeft {
		width: 503px;
		height: 300px;
		box-shadow: 0px 0px 20px lightgray;
		margin: 30px 40px 20px 30px;
	}

	.mainRight {
		width: 503px;
		height: 300px;
		margin: 30px 30px 20px;
		box-shadow: 0px 0px 20px lightgray;
		float: right;
		position: relative;
		top: -350px;
	}

	.botton {
		width: 1030px;
		box-shadow: 0px 0px 20px lightgrey;
		margin-left: 28px;
		position: relative;
		top: -345px;
	}

	.mainLeft h4 {
		padding: 10px 20px;
		font-size: 15px;
	}

	.mainLeft1 h4 {
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
