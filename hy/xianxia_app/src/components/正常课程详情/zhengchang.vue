<template>
  <div class="conent">
    <div class="dian">
      <router-link to='/wanfudao' style="float: left;margin-top: 17px;color: black;">
        <van-icon name="arrow-left" tag='p' />正常课程详情</router-link>
      <img src="../../assets/20.png" class="img" @click="showPopup" />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <div style="text-align: center;margin:0px 20px;line-height: 35px;">
        <p @click="showPopup1">转发</p>
        <van-popup class='send' v-model="show1">
          <p>
            <van-icon name="passed" />
          </p>
          <p>已发送</p>
        </van-popup>
        <p @click="showPopup2">添加到桌面</p>
        <van-popup class='send' v-model="show2">
          <p>
            <van-icon name="passed" />
          </p>
          <p>已添加</p>
        </van-popup>
        <p @click="showPopup3">从我的小程序中移除</p>
        <van-popup class='send' v-model="show3">
          <p>
            <van-icon name="passed" />
          </p>
          <p>已移除</p>
        </van-popup>
        <p @click="showPopup4">关于</p>
      </div>
    </van-popup>
    <div>
      <img src="../../assets/2.png" style="width: 80%;height: 100%;margin-top: 75px;" />
      <div class="right">
        <span>课程名称</span>
        <span>￥1500/10课时</span>
      </div>
      <div class="right1">
        <span>263人已报名</span>
      </div>
    </div>
    <div class="course">
      <van-tabs v-model="active">
        <van-tab title="精品课程">
          <p style="color: #0000FF">精品课程</p>
          <p style="width: 100%;">采用全省最优质的教学资源与最先进的教学手段,旨在为7-18岁的孩子提供语、数学、英、物、化、作文的专业服务，史有书法、绘画等艺术兴趣班，在为孩子的童年增添乐趣的同时,提升孩子的艺术教育。</p>
          <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
          <p style="color: #0000FF">致力于打造全国最专业的教育机构</p>
          <p style="width: 100%;">
            自2012年8月成立以来，备受孩子和家长的青睐，经过长达5年的努力，我们为福建省不同年龄段的孩子创造先进创新的教育体系。全省丰富的教育行业经验和优质的产品资源。教师风趣幽默，有意营造学习氛围，旨在为3-18岁的孩子提供更轻松·更高效·更快乐的学习。在全浸入式学习环境中，激发孩子的学习兴趣，使孩子学习起来游刃有余。</p>
          <img src="../../assets/2.png" style="width: 100%;height: 100%;" />
          <p style="color: #0000FF">我们用心对待每一位学员</p>
          <p style="width: 100%;">
            我们以全国最严格的办学要求要求自己，认真对待每一个学员。在传授知识的同时，提升孩子的道德品格。无论孩子优劣，我们都希望用我们的真心感化每一位来耐寒补习、并相信耐寒的家长。在教学的路上，我们秉承“不忘初心——做有温度的教育”这个使命信条，对每个孩子都尽心尽力、全力以赴。</p>
        </van-tab>
         <van-tab title="课程设置">
          <el-table :data="tableData" style="width:100%">
            <el-table-column prop="date" label="课程教室" width="120">
            </el-table-column>
            <el-table-column prop="name" label="上课时间" width="150">
            </el-table-column>
            <el-table-column prop="address" label="授课教师">
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="师资介绍">
          <div>
            <p style="color: #0000FF">林泽清（全能老师）</p>
            <p>林老师是一位多才多艺、幽默风趣的校区校长，是耐寒教育颜值担当之一。一路走过来，靠自己的努力和拼劲，把滨江校区从一个简单的套房校区慢慢打造成耐寒教育福清总部，并在校区管理中积极倡导轻松学习，快乐学习，高效学习。</p>
            <img src="../../assets/2.png" style="width:100%;height: 100%;" />
          </div>
          <div>
            <p style="color: #0000FF">饶健亭</p>
            <p>主讲初中数学，幽默风趣的堂风深受广大学子喜爱。注重学员兴趣的培养和引导，被学员评为“最喜欢的男老师”。</p>
            <img src="../../assets/2.png" style="width:100%;height: 100%;" />
          </div>
          <div>
            <p style="color: #0000FF">陈志强</p>
            <p>耐寒教育卓越校长，初中数学金牌讲师，荣获耐寒教育高级教师，耐寒连续两次年度杰出贡献奖者。管理经验杰出，做事细致干练，不管是在管理团队还是给学员授课，都是追求完美，力求以最好的方法解决问题。</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div style="background: white;width: 100%;position: fixed;z-index: 1;bottom: 0px;">
      <span style="color: red;float: left;margin-left: 30px;margin-top: 5px;font-size: 25px;">￥1500.00</span>
      <router-link tag='span' style="float: right;margin-right: 20px;border-radius: 0px 0px 10px 0px;background: #0000FF;width: 50%;height: 50px;color: white;line-height: 50px;"
        to='/kecheng'>立即报名</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        activeName: 'first',
        tableData: [{
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          }, {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
          {
            date: 'C-102',
            name: '2019-4-11 14:00',
            address: '林泽清'
          },
        ]
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      showPopup1() {
        this.show1 = true;
        setTimeout(() => {
          this.show = false;
          this.show1 = false;
          this.$router.replace({
            path: '/zhengchang'
          })
        }, 3000)
      },
      showPopup2() {
        this.show2 = true;
        setTimeout(() => {
          this.show = false;
          this.show2 = false;
          this.$router.replace({
            path: '/zhengchang'
          })
        }, 3000)
      },
      showPopup3() {
        this.show3 = true;
        setTimeout(() => {
          this.show = false;
          this.show3 = false;
          this.$router.replace({
            path: '/zhengchang'
          })
        }, 3000)
      },
      showPopup4() {
        setTimeout(() => {
          this.show = false;
          this.$router.replace({
            path: '/zhengchang'
          })
        }, 100)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
  .van-tabs__nav--card .van-tab.van-tab--active {
      color: black;
      background-color:white;
  }
  .course {
    margin-top: 100px;
    text-align: center;
    margin-left: 30px;
    height: 100%;
  }

  .img {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
  }

  .send {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    line-height: 25px;
    color: white;
    background-color: black;
  }

  .dian {
    position: fixed;
    z-index: 1;
    background-color: white;
    margin-top: 0px;
    width: 100%;
    height: 9%;
  }


.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 18px;
}
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #FFF;
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
</style>
