<template>
  <div class="appZ">
  <hea title="搜索结果"></hea>
    <van-search v-model="value" style="margin-top:50px;" placeholder="请输入搜索关键词" />
    <ul>
      <li v-for="(item, index) in searchData" :key="index" @click="toggle(item)">
        <van-icon name="search" />
        {{ item }}
      </li>
    </ul>
    <p>查看更多记录</p>
    <p>清楚所有记录</p>
  </div>
</template>
<script>
import hea from '@/components/App/Header'
export default {
  name: "Search",
  data() {
    return {
      value: "",
      searchData: ["语文课辅导", "一对一辅导课", "英语周末精品", "英语"]
    };
  },
  methods: {
    toggle(item) {
        this.$router.push('ydysousuo')
    }
  },
  components: {
      hea
  }
};
</script>
<style scoped>
.appZ {
  height: 100%;
  background: #f2f2f2;
  color: #ababab;
}
.appZ i {
  padding: 10px 15px;
}
.appZ li {
  text-align: left;
  background: white;
  line-height: 50px;
  color: rgb(88, 88, 88);
  font-size: 14px;
}
.appZ p {
  font-size: 13px;
  margin: 0;
  padding-top: 15px;
}
</style>