export const state = () => ({
  todos: [],
  users: [],
  photos: [],
  comments: [],
  albums: []
})

export const getters = {
  getTodos(state) {
    return state.todos
  },
  getUsers(state) {
    return state.users
  },
  getPhotos(state) {
    return state.photos
  },
  getComments(state) {
    return state.comments
  },
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
