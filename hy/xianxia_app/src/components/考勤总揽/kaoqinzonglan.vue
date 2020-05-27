<template>
  <div>
    <p style="color: black;position: absolute;left: 10px;top: 5px;">
      <van-icon name="arrow-left" @click='left' />考勤总揽</p>
    <div class="dianji" style='margin-top: 0px;'>
      <!--   <router-link to='/wanfudao' class="wanfudao">
        <van-icon name="arrow-left" tag='p' />课程考勤</router-link> -->

    </div>
    <div style="border: 1xp solid red; width: 100%;height: 100%;margin-top: 60px;">
      <div style="text-align: left;margin-left: 10px;">
        <span style="border: 1px solid #0000FF; width: 30px;height: 10px;background: #0000FF;"></span><span style="margin-left: 10px;">学员名单</span>
      </div>

      <div class="a">
        <van-button class="a1" v-for='(item,index) in data' :key='index' @click='button(item,index)' :type="item.icon">
          {{item.name}}
        </van-button>
      </div>
      <div class="button1">
        <van-button type="info" class='button' @click='databutton'>全部设置为出勤</van-button>
        <van-button plain type="info" class='button' to='/info2'>返回首页</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },

          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          }, {
            icon: 'info',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'default',
            name: '学员姓名'
          },
          {
            icon: 'info',
            name: '学员姓名'
          },
        ],
        currentRate: 0,
      };
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '' + '/40';
      },
    },
    methods: {
      button(item, index) {
        if (item.icon == 'info') {
          this.data[index].icon = 'default'
        } else {
          this.data[index].icon = 'info'
        }
      },
      databutton() {
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].icon = 'info'
        }
      },
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
    }
  };
</script>

<style>
  .a1{
    line-height: 30px;margin:10px 0px 10px 10px;
  }
  .button1 {
    margin-top: 100px;
  }

  .button {
    width: 94%;
    border-radius: 10px;
    margin-top: 20px;
  }

  div {
    border-radius: 10px;
    margin-top: 10px;
  }
</style>
