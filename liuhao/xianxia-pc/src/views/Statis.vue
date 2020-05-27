<template>
  <div class="barmain">
    <Header></Header>
    <!-- header -->
    <div class="main clear">
      <div class="left barcss">
        <Bar :barContentData="barContent" :text="Course"></Bar>
      </div>
      <div class="left wfdcss">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Bar from "../components/Bar";
export default {
  name: "Statis",
  components: {
    Header,
    Bar,
    // WFDSelect
  },
  data() {
    return {
      barContent: [{
					text: "统计分析",
					content: [{
							title: "考勤流水分析",
							url: 'kqls'
						}, {
							title: "报班量统计分析",
							url: 'bbltj'
						},
						{
							title: "报班金额统计分析",
							url: 'bbje'
						}, {
							title: "教师业务流水分析",
							url: 'jsyw'
						},
						{
							title: "学员支付流水分析",
							url: 'xyls'
						}
					]
				}]
    }
  }
};
</script>

<style scoped>
.barmain {
  height: 100%;
}
.main {
  height: 92%;
}
</style>