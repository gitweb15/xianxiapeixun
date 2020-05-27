<template>
  <div class="barmain">
    <Header></Header>
    <!-- header -->
    <div class="main clear">
      <div class="left barcss">
        <Bar :barContentData="barContent"></Bar>
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
  name: "Course",
  data(){
    return {
      barContent: [
        {
          text: '课程管理',
          content: [
            {
              title: '班级课程管理',
              url: 'bjk'
            },
            {
              title: '晚辅导课程管理',
              url: 'wfdkcgl'
            },
            {
              title: '一对一课程管理',
              url: 'ydy'
            }
          ]
        },
        {
          text: '课程消耗',
          content: [
            {
              title: '班级课程消耗',
              url: 'bxiao'
            },
            {
              title: '晚辅导课程消耗',
              url: 'wxiao'
            },
            {
              title: '一对一课程消耗',
              url: 'YdyXiaoHao'
            }
          ]
        },
        {
          text: '活动课程管理',
          content: [
            {
              title: '班级课程活动管理',
              url: 'bjhd'
            },
            {
              title: '晚辅导课程活动管理',
              url: 'kchd'
            },
            {
              title: '一对一课程活动管理',
              url: 'hdkcc'
            }
          ]
        },
		{
			text:'试学课程管理',
			content:[
				{
					title:'班级课程试学管理',
					url:'kcsxgl'
				},
				{
					title:'晚辅导试学课程管理',
					url:'wsxgl'
				},
				{
					title:'一对一课程试学管理',
					url:'onegl'
				}
			]
		}
      ]
    }
  },
  components: {
    Header,
    Bar,
    // WFDSelect
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