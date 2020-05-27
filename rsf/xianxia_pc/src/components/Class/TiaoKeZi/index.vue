<template>
  <div class="zhu">
    <div class="zhuti">
      <Top title="调课"></Top>
      <div class="d1">
        <el-button type="primary">
          <router-link to="tkgl" style="color:white">确认调课</router-link>
        </el-button>
        <el-button>取消</el-button>
      </div>
      <div class="d2">
        <p>
          课程编码:
          <span>BJKC-20190405</span>
        </p>
        <P>
          课程名称:
          <span>初中一年级班级课程</span>
        </P>
        <br />
        <br />
        <p>
          课程校区:
          <span>城南校区</span>
        </p>
        <p>
          授课教师:
          <span>王大壮</span>
        </p>
      </div>

      <div class="d4">
        <div class="d3">
          <div class="block din">
            <span class="demonstration">原课程日期:</span>&nbsp;&nbsp;
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="hei"></el-date-picker>
            <ul class="u1">
              <li>
                <p>
                  2019-04-26
                  <span>第二节</span>
                </p>
              </li>
              <li>
                <p>
                  2019-04-26
                  <span>第六节</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d5">
        <div class="d6">
          <div class="block din">
            <span class="demonstration">调课日期:</span>&nbsp;&nbsp;
            <el-date-picker v-model="value2" type="date" placeholder="选择日期" class="hei"></el-date-picker>

            <p style="margin-top: 15px;">
              调课日期:&nbsp;
              <el-select v-model="value3" placeholder="请选择内容" class="hei">
                <el-option
                  v-for="item in option"
                  :key="item.valuel"
                  :label="item.label"
                  :value="item.value3"
                ></el-option>
              </el-select>
            </p>

            <div class="span1">
              <span>第一节</span>
              <span>第二节</span>
              <span>第三节</span>
              <span>第四节</span>
              <span>第五节</span>
              <span>第六节</span>
              <span>第七节</span>
              <span>第八节</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
export default {
  name: "TiaoKeZi",
  components: {
    Top
  },
  data() {
    return {
      value1: "",
      value2: "",
      option: [
        {
          value3: "选项1",
          label: "教室一"
        },
        {
          value3: "选项2",
          label: "教室二"
        },
        {
          value3: "选项3",
          label: "教室三"
        },
        {
          value3: "选项4",
          label: "教室四"
        },
        {
          value3: "选项5",
          label: "教室五"
        }
      ],
      value3: ""
    };
  }
};
</script>

<style scoped>
.zhu {
  width: 1175px;
  height: 310px;
  text-align: center;
}
.span1 span {
  display: inline-block;
  width: 96px;
  height: 35px;
  text-align: center;
  margin-top: 30px;
  box-shadow: 1px 1px 5px #888888;
  padding-top: 10px;
  margin-left: 10px;
}
.span1 span:hover {
  background-color: #888888;
  cursor: pointer;
  color: white;
}
.zhuti {
  width: 1170px;
  height: 310px;
}

.d1 {
  position: relative;
  top: 10px;
  left: -470px;
}

.d2 p {
  display: inline-block;
  margin-left: 300px;
}

.d2 {
  position: relative;
  top: 20px;
  left: -300px;
}

.d2 p:nth-of-type(3) {
  position: relative;
  left: -74px;
}
.d2 p:nth-of-type(4) {
  position: relative;
  left: -23px;
}

.d2 p span {
  margin-left: 30px;
}

.d3 {
  width: 443px;
  height: 365px;
}

.d4 {
  position: relative;
  top: 45px;
  left: 45px;
  width: 443px;
  height: 365px;
  border: 1px solid #d7d7d7;
  box-shadow: 1px 1px 1px 1px #d7d7d7;
}

.din {
  margin-top: 20px;
}

.hei {
  width: 310px;
}

.u1 {
  margin-top: 20px;
}

.u1 li p {
  margin-left: -200px;
}

.u1 li {
  width: 443px;
  line-height: 40px;
}

.u1 li span {
  margin-left: 30px;
}

.u1 li:hover {
  background-color: #d7d7d7;
  cursor: pointer;
}

.d5 {
  width: 443px;
  height: 365px;
}

.d6 {
  position: relative;
  top: -321px;
  left: 550px;
  width: 443px;
  height: 365px;
  border: 1px solid #d7d7d7;
  box-shadow: 1px 1px 1px 1px #d7d7d7;
}
</style>
