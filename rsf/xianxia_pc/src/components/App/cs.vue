<template>
  <div id="app"></div>
</template>
<script>
import axios from "axios"; //直接引用就行
export default {
  name: "App",
  created() {
    //  axios.post("/goods/goodsList",{  //
    //     limit:5,
    //     page:1
    //  }).then((data)=>{
    //    console.log(data);
    //  })
    axios.get("/goods/goodsList", {
        params: {
          limit: 5,  //一页有5条数据
          page: 1   //第几页
        }
      }).then((data) => {
      console.log(data);
      });
  }
}
</script>
<style lang="scss">
</style>