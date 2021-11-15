<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('开始表演了')
  },
  watch: {
    $route (to, from) {
      // 路由监听 当使用路由参数时，例如从 /user/foo 导航到 /user/bar，
      // 原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，
      // 复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
      if (to.name === 'About') {
        console.log('正在前往关于')
      } else {
        console.log('正在前往首页')
      }
    }
  }
}
</script>
