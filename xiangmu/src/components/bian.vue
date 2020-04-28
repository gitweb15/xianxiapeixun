<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1" width="180px">
          <template slot="title">账号管理</template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">Item 2</template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">Item 3</template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
  </div>
</template>

<script>
</script>

<style scoped>
/* .zhu1{
		width: 185px;
		height: 580px;
		background-color: #999999;
		position: absolute;
		left: 0;
	} */
.layout {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  top: -2.5px;
}
.layout-header-bar {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
