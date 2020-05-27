<template>
  <div>
    <hea title="关于我们"></hea>
    <div class="main">
      <van-image width="100%" height="100%" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <h4>关于我们</h4>
      <p>致力于打造全国最专业的教育机构</p>
      <p>自2012年8月成立以来，备受孩子和家长的青睐，经过长达5年的努力，我们为福建省不同年龄段的孩子创造先进创新的教育体系。全省丰富的教育行业经验和优质的产品资源。教师风趣幽默，有意营造学习氛围，旨在为3-18岁的孩子提供更轻松·更高效·更快乐的学习。在全浸入式学习环境中，激发孩子的学习兴趣，使孩子学习起来游刃有余。</p>
      <p>耐寒教育的愿景是在个性化教育理念的指导下，通过持续的创新和整合，让每个需要成长机会的人都能获得更优质的教育资源和服务。使教育从艺术走向科学，整合社会更高品质、更具效率、更先进的教育资源，配置个性化的学习帮助计划和更适合学员的教学方案，最大程度地释放每个学员的潜能，让每个需要成长机会的人都能获得更优质的教育。</p>
    </div>
  </div>
</template>
<script>
import hea from "@/components/App/Header";
export default {
  name: "About",
  components: {
    hea
  }
};
</script>
<style scoped>
.main {
  padding: 20px;
  margin-top: 50px;
}
.main > div:first-child {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 30px gray;
}
.main h4 {
  color: #4573db;
  margin: 20px 0;
  font-size: 18px;
}
.main p {
  margin: 30px 0;
}
</style>