<template>
  <div>lol</div>
</template>

<script>
export default {
  async mounted () {
    await this.$store.dispatch('readUsers')
  }
}
</script>

<style lang="less" scoped>
</style>