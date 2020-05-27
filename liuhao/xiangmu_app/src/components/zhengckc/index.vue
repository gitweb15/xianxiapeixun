<template>
	<div class="z">
		<p class="head">
			<span style="display: inline-block;font-size: 20px;padding-top: 10px;" @click="kc">
				<van-icon name="arrow-left" style="margin-left: 13px;" />正常课程详情</span></p>
		<div class="zhu">
			<img src="../../../public/img/hao1.jpg" width="100%" style="margin-top: 20px;">
			<div class="pp">
				<p>
					<span style="color: #696969;font-size: 18px;">课程名称</span>
					<span style="color: red;font-size: 20px;padding-top: 10px;">￥1500 /10课时</span>
				</p>
				<p>
					<span style="color: #9a9a9a;font-size: 14px;">263已报名</span>
				</p>
				<div style="margin-top: 20px;">
					<van-tabs v-model="activeName">
						<van-tab title="课程简历" name="a">
							<div class="pp1">
								<p style="color: #518cff;font-size: 19px;font-weight: 550;">精品课程</p>
								<p>采用全省最优质的教学资源与最先进的教学手段。冒在
									服务。更有书法、绘画等艺术兴趣班,在为孩子的重年
									增添乐趣的同时,提开孩子的艺术修养。</p>
								<p><img src="../../../public/img/hao.jpg" width="100%"></p>

								<p style="color: #518cff;font-size: 19px;font-weight: 550;">致力于打造全国最专业的教育机构</p>
								<p>自2012年8月成立以来，备受孩子和家长的青睐，
									经过长达5年的努力，我们为福建省不同年龄段的孩子
									创造先进创新的教育体系。全省丰富的教育行业经验和
									优质的产品资源。教师风趣幽默，有意营造学习氛围，
									旨在为3-18岁的孩子提供更轻松更高效:更快乐的学
									习。在全浸入式学习环境中，激发孩子的学习兴趣，使
									孩子学习起来游刃有余。</p>
								<p><img src="../../../public/img/hao.jpg" width="100%"></p>
								<p style="color: #518cff;font-size: 19px;font-weight: 550;">我们用心对待每一位学员</p>
								<p style="padding-bottom: 100px;">我们以全国最严格的办学要求要求自己，认真对待
									每一个学员。在传授知识的同时，提升孩子的道德品
									格。无论孩子优劣，我们都希望用我们的真心感化每一
									位来耐寒补习、并相信耐寒的家长。在教学的路上，我
									们秉承“不忘初心一做有 温度的教育”这个使命信
									条,对每个孩子都尽心尽力、全力以赴。</p>

							</div>
						</van-tab>
						<van-tab title="课程设置" name="b">
							<table cellpadding="0" cellspacing="0" class="tab">
								<tr style="background-color: #f2f2f2;">
									<td>班级教师</td>
									<td>上课时间</td>
									<td>授课教师</td>
								</tr>
								<tr>
									<td>C-102</td>
									<td>2019-4-11 <br />14:00</td>
									<td>林泽清</td>
								</tr>
								<tr>
									<td>C-102</td>
									<td>2019-4-11 <br />14:00</td>
									<td>林泽清</td>
								</tr>
								<tr>
									<td>C-102</td>
									<td>2019-4-11 <br />14:00</td>
									<td>林泽清</td>
								</tr>
								<tr>
									<td>C-102</td>
									<td>2019-4-11 <br />14:00</td>
									<td>林泽清</td>
								</tr>
							</table>
						</van-tab>
						<van-tab title="师资介绍" name="c">
							<div class="pp1">
								<p style="color: #518cff;font-size: 19px;font-weight: 550;">林泽清(全能老师)</p>
								<p>林老师是一位多才多艺、 幽默风趣的校区校长,是耐寒
									教育颜值担当之一。一路走过来， 靠自己的努力和拼
									劲，把滨江校区从一个简单的套房校区慢慢打造成耐寒
									教育福清总部，并在校区管理中积极倡导轻松学习，快
									乐学习，高效学习。</p>
								<p><img src="../../../public/img/hao.jpg" width="100%"></p>

								<p style="color: #518cff;font-size: 19px;font-weight: 550;">饶健亭</p>
								<p>主讲初中数学，幽默风趣的堂风深受广大学子喜爱。注
									重学员兴趣的培养和引导，被学员评为“最喜欢的男老
									师’
									。</p>
								<p><img src="../../../public/img/hao.jpg" width="100%"></p>
								<p style="color: #518cff;font-size: 19px;font-weight: 550;">陈志强</p>
								<p style="padding-bottom: 100px;">耐寒教育卓越校长，初中数学金牌讲师，荣获耐寒
									教育高级教师，耐寒连续两次年度杰出贡献奖者。管理
									经验杰出，做事细致干练，不管是在管理团队还是给学
									员授课，都是追求完美，力求以最好的方法解决问题。</p>
							</div>
						</van-tab>
					</van-tabs>
				</div>
				<div style="position: fixed;bottom: 0px;width: 100%;">
					<p>
						<span class="sp1">￥1500.00</span>
						<!-- <el-popconfirm
						hideIcon="false"
						confirmButtonText='已注册'
						  cancelButtonText='未注册'
						>
						  <el-button slot="reference" style="width: 187.5px;height: 70px;background-color: blue;color: white;font-size: 18px;">立即报名</el-button>
						</el-popconfirm> -->
						<span class="sp2" @click="kcgm">立即报名</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'a',
			};
		},
		methods: {
			kc() {
				this.$router.go(-1)
			},
			kcgm(){
				this.$router.push({path:'/kcgm'})
			}
		}
	};
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}

	.head {
		position: fixed;
		background-color: white;
		width: 100%;
		height: 43px;
		z-index: 100;
		color: #66667f;
	}

	.tab {
		width: 90%;
		margin-left: 25px;
		margin-top: 20px;
	}

	.tab tr {
		height: 60px;
		text-align: center;
		font-weight: 200;
		font-size: 18px;
		margin-top: 20px;
	}

	.pp {
		margin-top: 20px;
	}

	.pp p {
		margin-top: 6px;
	}

	.pp p span:nth-of-type(2) {
		float: right;
	}

	.zhu {
		width: 92%;
		height: 1035px;
		margin: 0 auto;
		padding-top: 40px;
	}

	.z {
		width: 100%;
		height: 100%;
		background-color: ;
	}

	.pp1 p {
		text-align: center;
		margin-top: 20px;
	}

	.sp1 {
		width: 50%;
		height: 50px;
		color: red;
		font-size: 20px;
		display: inline-block;
		text-align: center;
		padding-top: 20px;
		background-color: white;
	}
	.sp2 {
		width: 50%;
		height: 50px;
		color: white;
		font-size: 20px;
		display: inline-block;
		text-align: center;
		padding-top: 20px;
		background-color: blue;
	}

</style>
