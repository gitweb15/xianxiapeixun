<template>
  <div>
    <div style="position: fixed;z-index: 1;background-color: white;margin-top: 0px;width: 100%;height: 9%;">
      <router-link to='/wanfudao' style="float: left;margin-top: 17px;color: black;margin-left: 10px;">
        <van-icon name="arrow-left" tag='p' />待支付订单</router-link>
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
    <div style="float: left;">
      <div style="margin-top: 110px;width: 100%;">
        <img src="../../assets/2.png" style="width: 40%;" />
        <div style="float: right;margin-top: -10px;width: 50%;margin-left: 2px;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
      </div>
      <van-divider />
      <p><span style="float: left;margin-left: 20px;">2019-4-12 11:36:14</span> <span style='margin-top:-2px;float: right;margin-right: -20px;width: 50%;'>剩余
          <van-count-down :time="time" style='margin-top: 1px;float: right;margin-right: 50px;' /></span></p>
      <div style="float: right;margin-right: 10px;margin-top: 20px;">
        <el-button type="default" @click="dialogVisible = true">取消支付</el-button>
        <router-link type="info" to='/kecheng' tag='van-button' class="zf">立即支付</router-link>
      </div>
      <van-divider />
    </div>

    <div style="float: left;">
      <div style="margin-top: 30px;">
        <img src="../../assets/2.png" style="width: 40%;" />
        <div style="float: right;margin-top: -10px;width: 50%;margin-left: 2px;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
      </div>
      <van-divider />
      <p><span style="float: left;margin-left: 20px;">2019-4-12 11:36:14</span> <span style='margin-top:-2px;float: right;margin-right: -20px;width: 50%;'>剩余
          <van-count-down :time="time" style='margin-top: 1px;float: right;margin-right: 50px;' /></span></p>
      <div style="float: right;margin-right: 10px;margin-top: 20px;">
       <el-button type="default" @click="dialogVisible = true">取消支付</el-button>
        <router-link type="info" to='/shoukuan' tag='van-button' class="zf">立即支付</router-link>
      </div>
      <van-divider />
    </div>


    <div style="float: left;">
      <div style="margin-top: 30px;">
        <img src="../../assets/2.png" style="width: 40%;" />
        <div style="float: right;margin-top: -10px;width: 50%;margin-left: 2px;" class="red">
          <p>英语个性化一对一教学</p>
          <p>￥1500/10课时</p>
        </div>
      </div>
      <van-divider />
      <p><span style="float: left;margin-left: 20px;">2019-4-12 11:36:14</span> <span style='margin-top:-2px;float: right;margin-right: -20px;width: 50%;'>剩余
          <van-count-down :time="time" style='margin-top: 1px;float: right;margin-right: 50px;' /></span></p>
      <div style="float: right;margin-right: 10px;margin-top: 20px;">
        <!-- <van-button type="default" @click="dialogVisible = true">取消支付</van-button> -->
        <el-button type="default" @click="dialogVisible = true">取消支付</el-button>
        <router-link type="info" to='/shoukuan' tag='van-button' class="zf">立即支付</router-link>
        <el-dialog title="" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
          <span>
            您确认取消订单么？订单取消后

            不可恢复!</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <van-divider />
    </div>
    <!-- <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
         <el-form :model="form">
           <el-form-item label="活动名称" :label-width="formLabelWidth">
             <el-input v-model="form.name" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="活动区域" :label-width="formLabelWidth">
             <el-select v-model="form.region" placeholder="请选择活动区域">
               <el-option label="区域一" value="shanghai"></el-option>
               <el-option label="区域二" value="beijing"></el-option>
             </el-select>
           </el-form-item>
         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="dialogFormVisible = false">取 消</el-button>
           <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
         </div>
       </el-dialog>
 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        isShow: false,
        message: '显示',
        time: 10 * 60 * 60 * 1000,
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        // dialogTableVisible: false,
        //  dialogFormVisible: false,
      };

    },
    methods: {
      // a(){
      //   alert('取消成功')
      // },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
            path: '/kecheng2'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/kecheng2'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/kecheng2'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/kecheng2'
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
  };
</script>

<style>
  .zf {
    background: #1989fa;
    color: white;
    margin-left: 20px;
  }

  .red p:nth-child(2) {
    color: red;
  }

  body {
    font-size: 17px;
  }
</style>
