<template>
  <nav class="nav">
    <nuxt-link to="/" class="nav__item" exact>todos</nuxt-link>
    <nuxt-link to="/users" class="nav__item">users</nuxt-link>
    <nuxt-link to="/alboms" class="nav__item">alboms</nuxt-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav {
  z-index: 99999;
  position: fixed;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  &__item {
    margin: 20px 30px;
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'Arial Black', Gadget, sans-serif;
    padding: 10px 40px;
  }
  .nuxt-link-active {
    border: 1px solid #fff;
  }
}
</style>