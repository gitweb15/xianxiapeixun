<template>
	<div id="table">
		<div class="add">
			<input type="text" v-model="addDetail.title" name='title' placeholder="发布内容" />
			<input type="text" v-model="addDetail.user" name='user' placeholder="发布人" />
			<input type="date" v-model="addDetail.dates" name='date' placeholder="发布时间" />
			<button @click="add">新增</button>
		</div>
		<table cellpadding="0" cellspacing="0">
			<thead>
				<tr>
					<th>序号</th>
					<th>标题</th>
					<th>发布人</th>
					<th>发布时间</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in newslist">
					<td width="10%">{{index+1}}</td>
					<td>{{item.title}}</td>
					<td width="15%">{{item.user}}</td>
					<td width="20%">{{item.dates}}</td>
					<td width="15%">
						<span @click="deletelist(item.id,index)" class="delete">删除</span>
						<span class="edit" @click="edit(item)">编辑</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div id="mask" v-if="editlist">
			<div class="mask">
				<div class="title">
					编辑
					<span @click="editlist=false">X</span>
				</div>
				<div class="content">
					<input type="text" v-model="editDetail.title" name='title' value="" placeholder="标题" />
					<input type="text" v-model="editDetail.user" name='user' value="" placeholder="发布人" />
					<input type="text" v-model="editDetail.dates" name='date' value="" placeholder="发布时间" />
					<button @click="update">更新</button>
					<button @click="editlist=false">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var app = new Vue({
		el: "#table",
		data: {
			addDetail: {},
			editlist: false,
			editDetail: {},
			newslist: [{
					title: '招聘前端工程师',
					user: '关铝',
					dates: '2020-08-10',
					id: '10001'
				},
				{
					title: '招聘PHP工程师',
					user: '张飞',
					dates: '2020-09-10',
					id: '10002'
				},
	
			],
			editid: ''
		},
		mounted() {
	
		},
		methods: {
			add: function() {
				this.newslist.push({
					title: this.addDetail.title,
					user: this.addDetail.user,
					dates: this.addDetail.dates,
				})
			},
			// 删除
			deletelist: function(id, i) {
				this.newslist.splice(i, 1)
			},
			// 编辑
			edit: function(item) {
				this.editDetail = {
					title: item.title,
					user: item.user,
					dates: item.dates,
					id: item.id,
	
				}
				this.editlist = true
				this.editid = item.id
			},
			// 更新
			update: function() {
				let _this = this;
				for (let i = 0; i < _this.newslist.length; i++) {
					if (_this.newslist[i].id == this.editid) {
						_this.newslist[i] = {
								title: _this.editDetail.title,
								user: _this.editDetail.user,
								dates: _this.editDetail.dates,
								id: this.editid
							},
							this.editlist = false;
					}
				}
			}
		}
	})
</script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<style>
	#table table{
		width: 100%;
		font-size: 14px;
		border: 1px solid #E1E1E1;
	}
	#table{
		padding: 0px 10px;
	}
	table thead th {
		background: #f5f5f5;
		padding: 10px;
		text-align: left;
	}
	table tbody td{
		padding: 10px;
		text-align: left;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #EEEEEE;
	}
	table tbody td span{
		margin: 0 10px;
		cursor: pointer;
	}
	.delete{
		color: red;
	}
	.edit{
		color: #008;
	}
	.add{
		border: 1px solid #EEEEEE;
		margin: 10px 0;
		padding: 15px;
	}
	input{
		border: 1px solid #EEEEEE;
		padding: 5px;
		border-radius: 3px;
		margin-right: 15px;
	}
	button{
		color: #008;
		border:0px;
		padding: 4px 15px;
		border-radius: 3px;
		color: #FFFFFF;
	}
	#mark{
		background: rgba(0,0,0,0.5);
		width: 100%;
		height: 100px;
		position: fixed;
		z-index: 4;
		top: 0px;
		left: 0px;
	}
	.title{
		padding: 10px;
			border-bottom: 1px solid #eee;	
		}
		.title span{
			float: right;
			cursor: pointer;
		}
		.content{
			padding: 10px;
		}
		.content input{
			width: 270px;
			margin-bottom: 15px;
		}
</style>
