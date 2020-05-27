<template>
  <div>
    <div style="position: fixed;z-index: 1;background-color: white;margin-top: 0px;width: 100%;height: 9%;">
      <p style="float: left;margin-top: 17px;color: black;">
        <van-icon name="arrow-left" @click='left'/>课程购买</p>
      <img src="../../assets/20.png" style="position: absolute;top: 20px;right: 20px;z-index: 1;" @click="showPopup" />
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <div style="text-align: center;margin:0px 20px;line-height: 35px;">
          <p @click="showPopup1">转发</p>

          <van-popup class='send' v-model="show1" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
            <p>
              <van-icon name="passed" />
            </p>
            <p>已发送</p>
          </van-popup>
          <p @click="showPopup2">添加到桌面</p>
          <van-popup class='send' v-model="show2" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
            <p>
              <van-icon name="passed" />
            </p>
            <p>已添加</p>
          </van-popup>
          <p @click="showPopup3">从我的小程序中移除</p>
          <van-popup class='send' v-model="show3" style='width: 100px;height: 100px;border-radius: 10px;line-height: 25px;color: white;background-color: black;'>
            <p>
              <van-icon name="passed" />
            </p>
            <p>已移除</p>
          </van-popup>
          <p @click="showPopup4">关于</p>
        </div>
      </van-popup>
    </div>
    <div style="float: left;text-align: left;margin:55px 30px;">
      <div>
        <p>用户名称:耐寒教育</p>
        <p>用户手机:18802329867</p>
      </div>
      <div>
        <img src="../../assets/2.png" style="width: 50%;" />
        <div style="float: right;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
      </div>
      <p>
        <van-cell title="选择学员" is-link arrow-direction="" style='color: black;' to='/stu' />
        <span style="z-index: 0;position: absolute;right: 70px;top:275px;color: #999999;">已选择2人</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="选择校区及教师" is-link arrow-direction="" style='color: black;' to='/teacher' />
        <span style="z-index: 0;position: absolute;right: 70px;top:350px;color: #999999;">福清校区 侯晨阳</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="选择优惠券" is-link arrow-direction="" style='color: black;' to='/teacher' />
        <span style="z-index: 0;position: absolute;right: 70px;top:430px;color: #999999;">已使用200元</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="价格" is-link arrow-direction="" style='color: #999;' to='/wanfudao' />
        <span style="z-index: 0;position: absolute;right: 70px;top:510px;color: #999999;">￥1500.00</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="学员数量" is-link arrow-direction="" style='color: #999;' to='/wanfudao' />
        <span style="z-index: 0;position: absolute;right: 70px;top:585px;color: #999999;">2</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="优惠券" is-link arrow-direction="" style='color: #999;' to='/wanfudao' />
        <span style="z-index: 0;position: absolute;right: 70px;top:660px;color: #999999;">-200.00</span>
      </p>
      <van-divider />
      <p>
        <van-cell title="实付" is-link arrow-direction="" style='color: #999;' to='/wanfudao' />
        <span style="z-index: 0;position: absolute;right: 70px;top:731px;color: red;">￥2800.00</span>
      </p>
      <van-divider />
      <div style="background: white;width: 100%;position: fixed;z-index: 0;bottom: 0px;">
        <span style="color: red;float: left;margin-left: 30px;margin-top: 5px;font-size: 25px;">￥3000.00</span>
        <router-link @click="click" style="float: right;margin-right: 20px;border-radius: 0px 0px 10px 0px;background: #0000FF;width: 50%;height: 50px;color: white;line-height: 50px;text-align: center;"
          to='/zhifu'>立即支付</router-link>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        message: '显示',
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        // show: false,
        // actions: [
        //   { name: '选项' },
        //   { name: '选项' },
        //   { name: '选项', subname: '描述信息' },
        // ],
      }
    },
    methods: {
      left() {
        this.$router.go(-1);
      },
      showPopup() {
        this.show = true;
      },
      showPopup1() {
        this.show1 = true;
        setTimeout(() => {
          this.show = false;
          this.show1 = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/kecheng'
          })
        }, 100)
      },
      click() {
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.message = '隐藏';
        } else {
          this.message = '显示';
        }
      },
      // onSelect(item) {
      //   // 默认情况下点击选项时不会自动收起
      //   // 可以通过 close-on-click-action 属性开启自动收起
      //   this.show = false;
      //   Toast(item.name);
      // },
      // s(){
      //   this.show = true;
      // },
      cy() {
        // Toast.fail('失败文案');
        alert('请选择成员')
      },
      cy1() {
        // Toast.fail('失败文案');
        alert('请选择教师')
      }
    }
  }
</script>
<style>
  button {
    width: 120px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }

  .red p:nth-child(2) {
    color: red;
  }
</style>
