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
  name: "Studnet",
  components: {
    Header,
    Bar
    // WFDSelect
  },
  data() {
    return {
      barContent:[
			{
				text:"学员管理",
				content:[
					{
						title:"学员列表",
						url:"xylb"
					},
					{
						title:"学员管理",
						url:"xygl"
					}
				]
			}
		]
    };
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