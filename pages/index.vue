<template>
  <div>
    <input type="radio" id="one" :value="true" v-model="check" />
    <label for="one">completed</label>
    <br />
    <input type="radio" id="two" :value="false" v-model="check" />
    <label for="two">not completed</label>
    <br />
    <input type="radio" id="three" :value="null" v-model="check" />
    <label for="three">all</label>
    <br />
    <ul>
      <li v-for="t in todos" :key="t.id" :class="t.completed ? 'active' : 'not' ">{{t.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: null
    }
  },
  async mounted () {
    await this.$store.dispatch('readTodos')
  },
  computed: {
    todos () {
      return this.check !== null ? this.$store.getters.getFilterTodos(this.check) : this.$store.getters.getTodos
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  color: green;
}
.not {
  color: red;
}
</style>