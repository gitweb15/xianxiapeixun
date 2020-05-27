<template>
	<div>
		<p class="head">
			<span style="display: inline-block;font-size: 18px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;"/>新增学员</span></p>
		<p class="p1"><span></span><span>新增学员</span></p>
		<div class="d3">
			<p>
				<van-image round width="7.4rem" height="7rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
			</p>
			<p>上传头像</p>
			<p>
				<van-field name="用户名" placeholder="请输入手机号" style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;" />
			</p>
			<p>
				<van-field readonly clickable name="picker" :value="value" label="" placeholder="请选择性别" @click="showPicker = true" style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"/>
				<van-popup v-model="showPicker" position="bottom">
					<van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
				</van-popup>
			</p>
			<p>
				<van-field readonly clickable name="picker" :value="value2" label="" placeholder="请选择性别" @click="showPicker = true" style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"/>
				<van-popup v-model="showPicker" position="bottom">
					<van-picker show-toolbar :columnsl="columnsl" @confirm="onConfirm" @cancel="showPicker = false" />
				</van-popup>
			</p>
			<p>
				<van-field readonly clickable name="picker" :value="value3" label="" placeholder="请选择性别" @click="showPicker = true" style="width: 90%;margin: 0 auto;border-bottom: 1px solid #b8c4d0;"/>
				<van-popup v-model="showPicker" position="bottom">
					<van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
				</van-popup>
			</p>
			<div style="margin: 18px;position: relative;top: 80px;" @click="kc">
			  <van-button round block type="info" native-type="submit" size="50" style="border-radius: 5%;width: 90%;margin-left: 21px;">
			    保存信息
			  </van-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				value2:'',
				columnsl:['1','2','3','4','5'],
				columns: ['男', '女'],
				showPicker: false,
				value1: 0,
				option1: [{
						text: '全部商品',
						value: 0
					},
					{
						text: '新款商品',
						value: 1
					},
					{
						text: '活动商品',
						value: 2
					},
				]
			};
		},
		  methods: {
		    onConfirm(value) {
		      this.value = value;
		      this.showPicker = false;
		    },
			kc(){
				this.$router.go(-1)
			}
		  },
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
	.p1 {
		color: #737373;
		font-size: 17px;
		font-weight: 600;
		margin-left: 30px;
		margin-top: 60px;
	}

	.p1 span:nth-of-type(1) {
		display: inline-block;
		width: 6px;
		height: 22px;
		background-color: #2e79ff;
	}

	.p1 span:nth-of-type(2) {
		display: inline-block;
		position: relative;
		top: -5px;
		left: 5px;
	}

	.d3 {
		margin-top: 30px;
	}

	.d3 p {
		text-align: center;
	}
</style>
