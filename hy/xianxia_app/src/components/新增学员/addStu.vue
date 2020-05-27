<template>
  <div>

    <div style="text-align: left;">
      <p @click="left" style="float: left;margin-top: -50px;color: black;">
        <van-icon name="arrow-left" />学员详情
      </p>
      <p class="p1"><span></span><span>学员新增</span></p>
      <div class="d3">
        <p>
          <img src="../../assets/5.png">
        </p>
        <p>上传头像</p>
        <p>
          <van-field name="用户名" placeholder="请输入手机号" style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;" />
        </p>
        <p>
          <van-field readonly clickable name="picker" :value="value" label="" placeholder="请选择性别" @click="showPicker = true"
            style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;" />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
          </van-popup>
        </p>
        <p>
          <van-field readonly clickable name="picker" :value="value2" label="" placeholder="请选择学段" @click="showPicker = true"
            style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;" />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker show-toolbar :columnsl="columns" @confirm="onConfirm" @cancel="showPicker = false" />
          </van-popup>
        </p>
        <p>
          <van-field readonly clickable name="picker" :value="value3" label="" placeholder="请选择年级" @click="showPicker = true"
            style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;" />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
          </van-popup>
        </p>
        <router-link tag='div' style="margin: 18px;position: relative;top: 120px;" to='/guanli'>
          <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
            保存信息
          </van-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        value2: '',
        value3: '',
        columns1: ['1', '2', '3', '4', '5'],
        columns: ['男', '女'],
        columnsl2: ['男', '女'],
        showPicker: false,
        value1: 0,
        option1: [{
            text: '全部商品',
            value: 0
          },
          {
            text: '新款商品',
            value: 1
          },
          {
            text: '活动商品',
            value: 2
          },
        ]
      };
    },
    methods: {
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      left() {
        this.$router.go(-1);
      }
    },
  };
</script>

<style scoped>
  .p1 {
    color: #737373;
    font-size: 17px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 70px;
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

  .d3 {
    margin-top: 30px;
  }

  .d3 p {
    text-align: center;
  }
</style>
