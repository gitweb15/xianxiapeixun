<template>
  <div>

    <div style="text-align: left;margin-top: 40px;position: absolute;z-index: -1;line-height: 30px;">
      <van-index-bar>
        <van-search v-model="value" placeholder="请输入学员姓名进行搜索" style="margin-left: 20px;width: 100%;" />
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
        <div style="margin-left: 30px;" class="color">
          <p>学员姓名</p>
        </div>
      </van-index-bar>
    </div>
  

  </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       activeName: 'first'
  //     };
  //   },
  //   methods: {
  //     handleClick(tab, event) {
  //       console.log(tab, event);
  //     }
  //   }
  // };
</script>

<style>
  .color p:nth-child(2) {
    color: #999999;
  }

  .van-index-bar__sidebar {
    position: fixed;
    top: 45%;
    right: 0;
    z-index: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .right span:nth-child(1) {
    float: left;
    margin-left: 40px;
  }

  .right span:nth-child(2) {
    float: right;
    color: red;
    margin-right: 50px;
  }

  .right1 span:nth-child(1) {
    float: left;
    margin-left: -63px;
    margin-top: 40px;
    color: #999;
  }

  .right1 span:nth-child(2) {
    float: right;
    margin-top: 20px;
    color: #999;
    margin-right: 50px;
  }

  .color {
    line-height: 80px;
  }
</style>
