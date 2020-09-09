export const state = () => ({
  todos: [],
  users: [],
  photos: [],
  comments: [],
  albums: []
})

export const getters = {
  // todos
  getTodos(state) {
    return state.todos
  },
  getFilterTodos: state => completed => {
    return state.todos.filter(i => i.completed === completed)
  },
  // users
  getUsers(state) {
    return state.users
  },
  getUsersByName: state => name => {
    return state.users.filter(item => {
      return item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 || item.username.toLowerCase().indexOf(name.toLowerCase()) >= 0
    })
  },
  getUsersByCity: state => city => {
    return state.users.filter(item => item.address.city === city)
  },
  getCities(state) {
    return state.users.map(item => item.address.city)
  },
  // photos
  getPhotos(state) {
    return state.photos
  },
  // comm
  getComments(state) {
    return state.comments
  },
  // alb
  getAlboms(state) {
    return state.albums
  }
}
export const mutations = {
  readTodos(state, payload) {
    state.todos = payload
  },
  readUsers(state, payload) {
    state.users = payload
  },
  readPhotos(state, payload) {
    state.photos = payload
  },
  readComments(state, payload) {
    state.comments = payload
  },
  readAlboms(state, payload) {
    state.albums = payload
  }
}

export const actions = {
  async readTodos({
    commit
  }) {
    const todos = await this.$axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('readTodos', todos.data)
  },
  async readUsers({
    commit
  }) {
    const users = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
    commit('readUsers', users.data)
  },
  async readPhotos({
    commit
  }) {
    const photos = await this.$axios.get('https://jsonplaceholder.typicode.com/photos')
    commit('readPhotos', photos.data)
  },
  async readComments({
    commit
  }) {
    const comments = await this.$axios.get('https://jsonplaceholder.typicode.com/comments')
    commit('readComments', comments.data)
  },
  async readAlboms({
    commit
  }) {
    const albums = await this.$axios.get('https://jsonplaceholder.typicode.com/albums')
    commit('readAlboms', albums.data)
  },
}
