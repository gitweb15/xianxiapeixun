<template>
  <div class="body">
    <p @click="left" style="float: left;margin-top: -40px;color: black;">
      <van-icon name="arrow-left" />学员管理
    </p>
    <div class="title">
      <div>
      <span style="border: 1px solid #0000FF;padding: 2px;background-color: #0000FF;"></span>
      <span style='margin-left: 10px;'>学员管理</span></div>
      <span style='float: right;margin-top: -26px;margin-right: 27px;'>编辑</span>
    </div>
    <div class="main" v-if="boolShow">
      <router-link tag="div" v-for="(item, index) in mainData" :key="index" :to="item.url">
        <van-icon :name="item.icon" />
        <span>{{ item.span }}</span>
        <van-icon :name="item.rightIcon" />
      </router-link>
    </div>
    <van-button type="info" class='btn' to='/addStu'>新增学员</van-button>

  </div>
</template>

<script>
  export default {
    name: "yidenLgohin",
    data() {
      return {
        mainData: [{
            span: "学员姓名",
            rightIcon: "arrow",
            url: '/xueyuan'
          },
          {
            span: "学员姓名",
            rightIcon: "arrow",
            url: '/xueyuan'
          },
          {
            span: "学员姓名",
            rightIcon: "arrow",
            url: '/xueyuan'
          },

        ],
        boolShow: true,
        boolShow2: true
      };
    },
    methods:{
      left() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style scoped>
  .btn {
    width: 90%;
    margin-left: 3px;
    margin-top: 320px;
  }

  .title span:nth-child(3) {
    float: right;
    margin-top: -20px;
    margin-right: 30px;
  }

  .title {
    font-weight: bold;
    text-align: left;
    margin-left: 10px;
    margin-top: 60px;
  }

  /* .title span:nth-child(1) {
    text-align: left;
    font-weight: bold;position: absolute;top: 40px;
  } */

  .main {
    line-height: 60px;
    border-radius: 3px;
    box-shadow: 0px 0px 15px #ccc;
    text-align: left;
    margin: 10px;
    background: #fff;
    position: relative;
    top: 50px;
    padding: 30px 10px 30px;
  }

  .main>div>span {
    position: relative;
    top: -6px;
    margin-left: 10px;
  }

  .main>div {
    padding-top: 3px;
    border-bottom: #ccc 1px solid;
    padding: 10px 0 5px 10px;
  }

  .main>div>i:last-child {
    float: right;
    margin-right: 10px;
    margin-top: 20px;
  }

  .main i {
    font-size: 25px;
  }
</style>
