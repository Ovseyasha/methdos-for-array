<template>
  <div class="def">
    <Nav />
    <div class="container">
      <transition mode="out-in" name="slide">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.def {
  display: flex;
  justify-content: center;
  .container {
    width: 1200px;
    padding-top: 120px;
  }
}
.slide-enter {
  opacity: 0;
}
.slide-enter-to {
}
.slide-enter-active {
  transition: all 0.5s ease-in;
}
.slide-leave-active {
  transition: all 0.5s ease-in;
}
.slide-leave-to {
  opacity: 1;
}
.slide-leave {
  opacity: 0;
}
</style>
