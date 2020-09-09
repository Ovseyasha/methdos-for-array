<template>
  <div class="photo">
    <img :src="img.thumbnailUrl" @click="open = !open" />
    <small>{{img.title}}</small>
    <div class="photo__full" v-if="open">
      <button @click="open = false">close</button>
      <img :src="img.url" />
      <div class="popup"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="less" scoped>
.photo {
  flex-basis: calc(100% / 6);
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    padding-bottom: 10px;
  }
  &__full {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    .popup {
      top: 0;
      left: 0;
      position: fixed;
      z-index: -1;
      background: #000;
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
