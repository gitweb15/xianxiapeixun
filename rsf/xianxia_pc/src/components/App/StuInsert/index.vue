<template>
  <div class="appZ">
    <hea title="选择学员"></hea>
    <h3 style="margin-top:50px;">新增学员</h3>
    <div class="d3">
      <p>
        <van-image round width="7.4rem" height="7rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </p>
      <p>上传头像</p>
      <p>
        <van-field
          name="用户名"
          placeholder="请输入手机号"
          style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"
        />
      </p>
      <p>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label
          placeholder="请选择性别"
          @click="showPicker = true"
          style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </p>
      <p>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value2"
          label
          placeholder="请选择学段"
          @click="showPicker = true"
          style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columnsl="columnsl"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </p>
      <p>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value3"
          label
          placeholder="请选择年级"
          @click="showPicker = true"
          style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </p>
      <div style="margin: 18px;position: relative;top: 120px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          size="50"
          style="border-radius: 5%;width: 90%;margin-left: 21px;"
          @click="routeLink"
        >保存信息</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import hea from "@/components/App/Header";
export default {
  name: "StuInsert",
  data() {
    return {
      value: "",
      value2: "",
      columnsl: ["1", "2", "3", "4", "5"],
      columns: ["男", "女"],
      showPicker: false,
      value1: 0,
      value2: undefined,
      value3: undefined,
      option1: [
        {
          text: "全部商品",
          value: 0
        },
        {
          text: "新款商品",
          value: 1
        },
        {
          text: "活动商品",
          value: 2
        }
      ],
      num: 0
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    // 路由跳转
    routeLink() {
      console.log(this.num)
      if (this.num == 1) {
        this.$router.push({ path: "/App/Tab/StuGuan" });
      } else if (this.num == 2) {
        this.$router.push({ path: "/App/Tab/StuXuan" });
      }
    }
  },
  mounted() {
    this.num = this.$route.params.num;
    console.log(this.num);
  },
  components: {
    hea
  }
};
</script>

<style scoped>
.appZ h3 {
  text-align: left;
  font-size: 15px;
  border-left: #2e79ff 5px solid;
  padding-left: 10px;
  margin: 10px;
  position: relative;
}
.d3 {
  margin-top: 30px;
}

.d3 p {
  text-align: center;
}
</style>
