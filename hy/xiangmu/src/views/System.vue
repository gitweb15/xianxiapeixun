<template>
	<div class="barmain">
		<Header></Header>
		<!-- header -->
		<div class="main clear">
			<div class="left barcss">
				<Bar :barContentData="barContentData" :text="System"></Bar>
			</div>
			<div class="left wfdcss">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../components/Header";
	import Bar from "../components/Bar";
	export default {
		name: "System",
		data() {
			return {
				barContentData: [{
						title: "账号管理",
						content: [{
							text: "家长账号管理",
							url: '/jiazhang'
						}, {
							text: "教师账号管理",
							url: '/teacher1'
						}]
					},
					{
						title: "系统配置",
						content: [{
								text: "菜单管理",
								url: '/menu'
							}, {
								text: "权限管理",
								url: 'quanxian'
							},
							{
								text: "组织架构管理",
								url: 'zuzhi'
							}
						]
					},
					{
						title: "系统数据",
						content: [{
							text: "数据字典",
							url: 'shujuzidian'
						}, {
							text: "日历管理",
							url: 'rili'
						}, {
							text: "通知管理",
							url: 'tongzhi'
						},
						{
							text: "机构通知",
							url: 'jigou'
						}, {
							text: "轮播图管理",
							url: 'lunbo'
						}, {
							text: "首页推荐管理",
							url: 'souye'
						},
						]
					},
				]
			}
		},
		components: {
			Header,
			Bar,
		}
	};
</script>

<style scoped>
	.barmain {
		height: 100%;
	}

	.main {
		height: 92%;
	}
</style>
