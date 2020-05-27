<template>
  <div>
    <top title="组织架构管理"></top>
    <div class="main" style="width:100%;">
      <el-row>
        <el-col :span="6">
          <div class="custom-tree-container">
            <div class="block">
              <el-tree
                :data="data"
                node-key="id"
                accordion
                :expand-on-click-node="false"
                :default-expanded-keys="[1, 2]"
              >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                  <span>
                    <el-button
                      type="text"
                      size="small"
                      @click="() => append(data)"
                      icon="el-icon-circle-plus-outline"
                    ></el-button>
                    <el-button
                      type="text"
                      size="small"
                      @click="() => remove(node, data)"
                      icon="el-icon-edit-outline"
                    ></el-button>
                  </span>
                </span>
              </el-tree>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="left">
            <el-button type="primary" size="small" @click="dialogFormVisible = true">新增用户</el-button>
            <el-button type="primary" size="small">导入Excel</el-button>
            <el-button type="text" size="small">Excel模板下载</el-button>
          </el-form-item>
          <el-form-item class="right">
            <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
          </el-form-item>
          <el-form-item label="姓名" class="right">
            <el-input type="text" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
        </el-form>
          <div class="main-tab">
            <el-table
              :data="dataContent.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              style="width: 100%"
              :header-cell-style="tableHeaderColor"
              :row-class-name="tableRowClassName"
              :cell-style="rowClass"
            >
              <el-table-column label="选择" type="selection"></el-table-column>
              <el-table-column prop="id" label="序"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="sex" label="性别"></el-table-column>
              <el-table-column prop="phone" label="联系方式"></el-table-column>
              <el-table-column prop="bumen" label="部门"></el-table-column>
              <el-table-column label="修改">
                <template>
                  <el-button type="text" @click="dialogFormVisible = true">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
			
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[1, 3, 5, 8]"
              :page-size="pageSize"
              layout="prev, pager, next, jumper"
              :total="1000"
            ></el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import top from "@/components/Top";
let id = 1000;
export default {
  name: "zuzhi",
  data() {
    const data = [
      {
        id: 1,
        label: "耐寒教育",
        children: [
          {
            id: 2,
            label: "教育集团",
            children: [
              {
                id: 10,
                label: "部门一"
              },
              {
                id: 11,
                label: "部门二"
              },
              {
                id: 12,
                label: "部门三"
              },
              {
                id: 13,
                label: "部门四"
              }
            ]
          },
          {
            id: 3,
            label: "城南校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          },
          {
            id: 4,
            label: "水榭校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          },
          {
            id: 5,
            label: "世贸校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          },
          {
            id: 6,
            label: "花之南校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          },
          {
            id: 7,
            label: "滨江校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          },
          {
            id: 8,
            label: "九洞桥校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          },
          {
            id: 9,
            label: "万达校区",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              }
            ]
          }
        ]
      }
    ];
    return {
		
      data: JSON.parse(JSON.stringify(data)),
      dataContent: [
        {
          id: 1,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 2,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 3,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 4,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        },
        {
          id: 5,
          name: '姓名1',
          sex: '男',
          phone: '133...',
          bumen: '部门一'
        }
      ],currentPage: 1, //默认显示第一页
      pageSize: 10, //默认每页显示10条
      totalNum: 5,
      formInline: {
        user: "",
        region: "",
        content: ""
      }
    };
  },
  defaultProps: {
    children: "children",
    label: "label"
  },
  components: {
    top
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    remove(node, data) {
      // const parent = node.parent;
      // const children = parent.data.children || parent.data;
      // const index = children.findIndex(d => d.id === data.id);
      // children.splice(index, 1);
      // console.log(parent+':node'+data+':data')
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: #d7d7d7;color: black;font-weight:200;font-size:13px;text-align:left;height:30px;text-align:center";
      } else {
        return "height:100px;";
      }
    },
    rowClass() {
      return "text-align: center;";
    },
  }
};
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.el-row > div:first-child {
  box-shadow: 0px 0px 15px #ccc;
  margin: 30px 10px 0 50px;
  padding: 10px;
}
.el-tree-node__content {
  height: 30px !important;
}
.demo-form-inline{
  margin-top: 10px;
}
</style>