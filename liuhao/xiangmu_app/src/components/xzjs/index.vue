<template>
  <div>
	  <p class="head">
	  	<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
	  		<van-icon name="arrow-left" style="margin-left: 13px;"/>选择教师</span></p>
    <div class="title">
      <van-tabs v-model="active" line-height="0" title-active-color="#144a9e" class="pos">
        <span class="xiaoquCss">校区：</span>
        <van-tab title disabled></van-tab>
        <van-tab v-for="(item, index) in dataContent" :key="index" :title="item.xiaoName">
          <div class="imgCss" v-for="(item2, index) in item.content" :key="index">
            <van-image width="100%" height="100%" fit="contain" :src="item2.imgUrl" />
            <p>{{ item2.teaName }}</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
        <van-button type="info" block @click="kc">保存</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "XuanTea",
  data() {
    return {
      active: 1,
      dataContent: [
        {
          xiaoName: "百合",
          content: [
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            }
          ]
        },
        {
          xiaoName: "水南",
          content: [
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            }
          ]
        },
        {
          xiaoName: "龙山",
          content: [
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            }
          ]
        },
        {
          xiaoName: "玫瑰园",
          content: [
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            }
          ]
        },
        {
          xiaoName: "滨江",
          content: [
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            },
            {
              imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
              teaName: "教师姓名"
            }
          ]
        }
      ]
    };
  },
  methods:{
	  kc(){
	  	this.$router.go(-1)
	  }
  }
  
};
</script>
<style scoped>
	.head{
		position: fixed;
		top: -20px;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}
.title {
  margin-top: 50px;
}
.van-tabs__nav,
.van-tabs__nav--line {
  position: fixed;
  top: 50px;
}
.xiaoquCss {
  position: fixed;
  left: 0;
  top: 50px;
  background: white;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  font-weight: 800;
  padding-left: 10px;
  color: #3376ff;
}
.imgCss {
  width: 46%;
  display: inline-block;
  margin: 2%;
  box-shadow: 3px 3px 15px #ccc;
  text-align: left;
}
.imgCss p {
  padding-left: 10px;
  font: 800 15px "微软雅黑";
  line-height: 30px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 80%;
  padding: 5% 10%;
  background: white;
}
.footer button {
  border-radius: 5px;
}
</style>