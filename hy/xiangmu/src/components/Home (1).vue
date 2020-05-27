<template>
  <div>
    <HelloWorld />
    <p @click="myfun()" v-show="web15">web15</p>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <i class="el-icon-plus"></i>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  /* eslint-disable */
  name: "Home",
  data() {
    return {
      web15: false,
      awesome: false,
      form: {
        name: 'web16',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    myfun() {
      alert("15");
    },
    onSubmit() {
      console.log('submit!');
    }
  },
  created() {
    
    // this.axios.get("http://122.112.179.240:9005/api/masterData/getAllTemplate?pageNum=1&pageSize=10").then((res) => {
    //   console.log(res);
    // });
    fetch("http://122.112.179.240:9005/api/masterData/getAllTemplate?pageNum=1&pageSize=10",{
      method:'GET',
      headers:{ 'Content-Type': 'application/json' },
      //body: JSON.stringify({key:value}), //POST传参方式
      credentials: 'include' //允许携带cookie
    })//fetch返回的是promise对象。所以fetch().then()第一个then里返回的并不是真正的数据。而是一个promise，所以我们需要通过链式操作第二个then()来获取真正的数据。
    .then(res => {
        return res.json();
    })
    .then(res => {
      // 这里返回的数据就是我们想要请求的json数据
      if(res.message == "OK") {
        console.log(res.responseBody.list);
      }
    })
  }
};
</script>
