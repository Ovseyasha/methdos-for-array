<template>
  <div>
    <div class="input">
      <label>
        Search by name or username
        <input type="text" v-model.trim="search" />
      </label>
    </div>
    <div class="users">
      <ul>
        <li v-for="u in users" :key="u.id">
          <h4>{{u.name}}</h4>
          <small>{{u.username}}</small>
          <p>{{u.address.city}}</p>
        </li>
        <p v-if="!users.length">user not found</p>
      </ul>
    </div>
    <div class="selects">
      <label>
        Search by city
        <select class="selects__city" v-model="selectedCity">
          <option v-for="(c,index) in cities" :key="index" :value="c">{{c}}</option>
          <option value>not selected</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      selectedCity: ''
    }
  },
  async mounted () {
    await this.$store.dispatch('readUsers')
  },
  computed: {
    users () {
      if (this.selectedCity !== '') {
        return this.$store.getters.getUsersByCity(this.selectedCity)
      }
      return this.search === '' ? this.$store.getters.getUsers : this.$store.getters.getUsersByName(this.search)
    },
    cities () {
      return this.$store.getters.getCities
    }
  }
}
</script>

<style lang="less" scoped>
.input {
  position: fixed;
  top: 5%;
  right: 50%;
  &__city {
  }
}
.users {
}
.selects {
  position: fixed;
  top: 10%;
  right: 50%;
  &__city {
  }
}
</style>