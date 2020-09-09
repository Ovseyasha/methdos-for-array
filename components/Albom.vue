<template>
  <div class="alboms__item" :style="open ? 'z-index: 555; position: absolute; width: 100%' : ''">
    <div class="alboms__title">{{a.title}}</div>
    <b class="alboms__author">{{a.user.name}}</b>
    <button @click="open = !open">view photos</button>
    <div class="alboms__photos" v-if="open">
      <Photo v-for="img in a.photos" :key="img.id" :img="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    a: {
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
.alboms {
  &__item {
    background: #fff;
    padding: 10px 5px;
    flex-basis: calc(100% / 4 - 20px);
    margin-bottom: 20px;
    -webkit-box-shadow: -7px 16px 45px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -7px 16px 45px 0px rgba(34, 60, 80, 0.2);
    box-shadow: -7px 16px 45px 0px rgba(34, 60, 80, 0.2);
    border-radius: 5px;
  }
  .alboms {
    &__author {
    }

    &__photos {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
