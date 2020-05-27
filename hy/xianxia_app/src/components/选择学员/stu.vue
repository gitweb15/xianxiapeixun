<template>
  <div>
    <p @click="left" style="float: left;color: black;margin-top: -30px;">
      <van-icon name="arrow-left" />选择学员
    </p>

    <div class="a">
      <p><span class="span"></span><span class="stu">请选择参与学员</span>
        <router-link class="add" to='/addStu'>添加学员</router-link>
      </p>
      <div class="stu1">
        <p><input type="radio" value="学员一" name='gg'>学员一</p>
        <p><input type="radio" value="学员二" name='cd'>学员二</p>
        <p><input type="radio" value="学员三" style="margin-left: 0px;" name='qy'>学员三</p>

      </div>

      <van-button type="info" class='bc' @click="click" to='/kecheng'>保存</van-button>
      <!-- <div id="app">
      <div v-show="isShow" style="border: 1px solid gainsboro;width: 100px;background: #fff;position: absolute;right: 30px;top: 520px;">
        <button @click="cy">未选择成员</button>
        <router-link tag='button' to='/kecheng'>已选择成员</router-link>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        message: '显示',
      }
    },
    methods: {
      click() {
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.message = '隐藏';
        } else {
          this.message = '显示';
        }
      },
      left() {
        this.$router.go(-1);
      },
      cy() {
        alert('未选择成员')
      },
    }
  }
</script>

<style scoped>
  .bc {
    margin-top: 500px;width: 50%;
  }

  .a {
    border: 1px solid white;
    height: 380px;
    margin: 10px;
    margin-top: 50px;
  }

  .span {
    border: 1px solid gainsboro;
    background: #0000FF;
    float: left;
    margin-left: 10px;padding: 2px;
    height: 20px;
  }

  .add {
    background-color: #409EFF;
    color: white;
    float: right;
    padding: 8px;
  }

  .stu {
    float: left;
    margin-left: 10px;
    font-weight: bold
  }

  .stu1 {
    margin-top: 30px;
    float: left;
    margin-left: -120px;
    line-height: 50px;
  }
</style>
