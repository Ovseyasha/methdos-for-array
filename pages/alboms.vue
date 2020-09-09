<template>
  <div>
    <div class="alboms">
      <div class="alboms__items">
        <Albom v-for="a in alboms" :key="a.id" :a="a" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  async mounted () {
    await this.$store.dispatch('readUsers')
    await this.$store.dispatch('readPhotos')
    await this.$store.dispatch('readAlboms')
  },
  computed: {
    alboms () {
      return this.$store.getters.getAlboms
    }
  }
}
</script>

<style lang="less" scoped>
.alboms {
  display: flex;
  justify-content: center;
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }
}
</style>