<template>
<<<<<<< HEAD
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
=======
  <div id="app">
    <router-view/>
  </div>
>>>>>>> a42769b419eac9af012ce83bf16de44f9712d82e
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
