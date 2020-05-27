<template>
  <div>
   <p @click="left" style="float: left;margin-top: 17px;color: black;">
     <van-icon name="arrow-left"/>关于我们
   </p>
    <img src="../../assets/2.png" style="width:90%;height: 200px;" />
    <p style="color: #0000FF;">关于我们</p>
    <p>致力于打造全国最专业的教育机构</p>
    <div style="width: 100%;">
      <p style="margin: 20px;width:90%;text-indent: 10px;">自2012年8月成立以来,备受孩子和家长的青睐,经过长达5年的努力,我们为福建省不同年龄段的孩子创造先进创新的教育体系,全省丰富的教育行业经验和优质的产品资源,教师风趣幽默,有意营造学习氛围,旨在3-18岁的孩子提供轻松更高效-更快乐的学习,在全侵入式学习环境中,激发孩子的学习兴趣,使孩子学习起来游刃有余。</p>
      <p style="margin: 20px;width:90%;margin-top: 40px;">耐寒教育的愿景是在个性教育理念的指导下,通过持续的持续和整合,让每个需要成长机会的人能获得更优质的教育资源和服务,使教育以艺术走向科学,整合社会更高品质,更具效率、更先进的教育资源，配置个性化的学习帮助计划和更适合学员的教学方法,最大程度的释放每个学员的潜能,让每个需要成长机会的人能获得更优质的教育。</p>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';

  export default {
    methods: {
      left() {
        this.$router.go(-1);
      },
      onClickLeft() {
        Toast('<');

      },
      onClickRight() {
        Toast('按钮');
      },
    },
  };
</script>

<style scoped>

</style>
