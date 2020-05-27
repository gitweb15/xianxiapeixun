<template>
  <div class="appZ">
    <hea title="学员管理"></hea>
    <h3>
      学员管理
      <span>编辑</span>
    </h3>
    <van-radio-group v-model="radio" class="ro" v-for="(item, index) in 3" :key="index">
      <div class="ku">
        <van-cell
          title="学员姓名"
          is-link
          value
          style="position: relative;top: 19px;left: 0px;width: 90%;"
           to="StuXiang"
        />
      </div>
    </van-radio-group>
    <div style="margin: 18px;position: relative;top: 210px;">
      <van-button
        round
        block
        type="info"
        native-type="submit"
        size="50"
        @click="routeL"
        style="border-radius: 5px;width: 90%;margin: 0 auto"
      >新增学员</van-button>
    </div>
  </div>
</template>

<script>
import hea from "@/components/App/Header";
export default {
  name: "StuGuan",
  data() {
    return {
      radio: "1"
    };
  },
  methods: {
    routeL() {
      this.$router.push({ path: "/App/Tab/StuInsert/1" });
    }
  },
  components: {
    hea
  }
};
</script>

<style scoped>
.appZ {
  padding-top: 10px;
}
.appZ h3 {
  text-align: left;
  font-size: 15px;
  border-left: #2e79ff 5px solid;
  padding-left: 10px;
  margin: 10px;
  position: relative;
  margin-top: 50px;
}
.appZ h3 span {
  position: absolute;
  right: 10px;
}
.p1 {
  color: #737373;
  font-size: 17px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 30px;
}

.p1 span:nth-of-type(1) {
  display: inline-block;
  width: 6px;
  height: 22px;
  background-color: #2e79ff;
}

.p1 span:nth-of-type(2) {
  display: inline-block;
  position: relative;
  top: -5px;
  left: 5px;
}
.ro {
  margin-top: 15px;
}
.ku {
  width: 93%;
  height: 75px;
  text-align: center;
  margin: 0 auto;
  box-shadow: 1px 1px 1px 1px #e5e5e5;
  margin-top: 25px;
}
</style>
