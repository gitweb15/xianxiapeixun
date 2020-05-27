<template>
  <div>
	  <p style="text-align: center;">日程</p>
    <div class="zou">
      <ul>
        <li
          v-for="(item, index) in numData"
          :key="index"
          :class="{bgC:num==index}"
          @click="num=index"
        >
          <img src="../../assets/指针_u4438.svg" v-if="num==index" class="bgCss" />
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="content">
      <h3>
        3月11日 周一
        <van-button type="info" size="small" @click="show=true">更多</van-button>
        <van-calendar v-model="show" @confirm="onConfirm" />
      </h3>
      <div>
        <p class="content-p">
          <span>今日课程</span>
          <span>03/04</span>
        </p>
        <van-progress :percentage="75" :show-pivot="false" stroke-width="2px" />
      </div>
      <div style="margin-bottom:50px;">
        <div class="content-text" v-for="(item, index) in 4" :key="index" @click="tiao">
          <span></span>
          <div>
            英语个性化一对一
            <p>10:00-12:00</p>
          </div>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
	<footone></footone>
  </div>
</template>

<script>
	import footone from '../footone.vue'
export default {
  name: "riCheng",
  components:{
	  footone
  },
  data() {
    return {
      numData: [21, 22, 23, 24, 25, 26, 27, 28, 29],
      num: 4,
      show: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    tiao() {
        this.$router.push('KeKaoQin')
    }
  }
};
</script>

<style scoped>
.zou {
  margin-top: 0px;
  padding: 45px 10px 10px;
  background: #f2f2f2;
}
.zou li {
  display: inline-block;
  font-size: 13px;
  width: 30px;
  height: 30px;
  margin: 4px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
}
.bgCss {
  position: absolute;
  top: -40px;
  left: 0px;
}
.bgC {
  background: #2f78ff;
}
.content {
  margin: 10px;
  margin-top: 30px;
  box-shadow: 0px 0px 15px #ccc;
  border-radius: 4px;
  padding: 2px 15px 10px;
}
.content h3 {
  text-align: left;
  position: relative;
  font-size: 16px;
  padding-top: 10px;
  margin: 10px 0;
}
.content h3 button {
  position: absolute;
  right: 10px;
  font-size: 13px;
  border-radius: 5px;
}
.content-p {
  margin-bottom: 5px;
}
.content-p > span {
  color: #ccc;
  font-size: 12px;
  display: inline-block;
  width: 50%;
}
.content-p > span:first-child {
  text-align: left;
}
.content-p > span:last-child {
  text-align: right;
}
.content-text {
  text-align: left;
  position: relative;
  margin-top: 10px;
  padding: 0px 5px;
}
.content-text > span {
  background: #2f78ff;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.content-text > div {
  display: inline-block;
  font-size: 16px;
  margin: 0px 30px;
  padding-top: 10px;
}
.content-text > div p {
  font-size: 12px;
  color: #ccc;
  margin: 5px;
}
.content-text > i {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
}
</style>