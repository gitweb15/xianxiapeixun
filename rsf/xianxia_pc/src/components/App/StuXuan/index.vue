<template>
  <div>
    <hea title="选择学员"></hea>
    <p class="p1">
      <span></span>
      <span>请选择参与学员</span>
    </p>
    <router-link to="StuInsert/2">
      <van-button
        type="info"
        size="small"
        style="float: right;position: relative;top: -48px;left: -20px;"
      >新增学员</van-button>
    </router-link>
    <van-radio-group v-model="radio" class="ro">
      <ul class="ku">
        <li>
          <van-radio name="1" icon-size="15px" style="padding-left: 20px;padding-top: 20px;">学员一</van-radio>
        </li>
        <li>
          <van-radio name="2" icon-size="15px" style="padding-left: 20px;padding-top: 20px;">学员二</van-radio>
        </li>
        <li>
          <van-radio name="3" icon-size="15px" style="padding-left: 20px;padding-top: 20px;">学员三</van-radio>
        </li>
      </ul>
    </van-radio-group>
    <div style="margin: 18px;position: relative;top: 210px;">
      <router-link to="KeGouMai">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          size="50"
          style="border-radius: 5%;width: 90%;margin-left: 21px;"
        >保存</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import hea from "@/components/App/Header";
export default {
  name: "StuXuan",
  data() {
    return {
      radio: "1"
    };
  },
  components: {
    hea
  }
};
</script>

<style scoped>
.p1 {
  color: #737373;
  font-size: 17px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 80px;
  text-align: left;
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
.ku li {
  width: 93%;
  height: 75px;
  text-align: center;
  margin-left: 10px;
  box-shadow: 1px 1px 1px 1px #e5e5e5;
  margin-top: 15px;
}
</style>
