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
  name: "Order",
  components: {
    Header,
    Bar
  },
  data() {
    return {
      barContent:[
					{
						text:"订单管理",
						content:[
							{
								title:"订单管理",
								url:"ddgl"
							},
							{
								title:"退费管理",
								url:"tfgl"
							},
							{
								title:"转校管理",
								url:"zxgl"
							}
						]
					}
				]
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