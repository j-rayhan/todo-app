const state = {
  message: 'Welcome to Todo App with State Management',
  filter: 'all',
  todos: [
    {
      'id': 1,
      'task': 'Two',
      'isCompleted': false,
      'isEditing': false
    },
    {
      'id': 2,
      'task': 'One',
      'isCompleted': false,
      'isEditing': false
    }
  ],
  hasError: false
}

const getters = {
  getTodos: state => state.todos,
  remaining: state => state.todos.filter(todo => !todo.isCompleted).length,
  showClearCompletedButton: state => state.todos.filter(todo => todo.isCompleted).length > 0,
  todosFiltered: (state) => {
    if (state.filter === 'all') {
      return state.todos
    } else if (state.filter === 'active') {
      return state.todos.filter(todo => !todo.isCompleted)
    } else if (state.filter === 'completed') {
      return state.todos.filter(todo => todo.isCompleted)
    }
    return state.todos
  }
}

const mutations = {
  ADD_TODO: (state, payload) => {
    if (!payload.task) {
      state.hasError = true
      alert('Task is empty!')
      return
    }
    const index = state.todos.findIndex(item => item.task === payload.task)
    if (index >= 0) {
      state.hasError = true
      alert('Task already exists!')
      return
    }
    state.hasError = false
    const newTask = {
      id: state.todos.length + 1,
      task: payload.task,
      isCompleted: false,
      isEditing: false
    }
    state.todos.unshift(newTask)
  },
  UPDATE_TODO: (state, todo) => {
    const { id, task, isCompleted, isEditing } = todo
    const index = state.todos.findIndex(item => item.id === id)
    state.todos.splice(index, 1, {
      id,
      task,
      isCompleted,
      isEditing
    })
  },
  DELETE_TODO: (state, payload) => {
    const index = state.todos.findIndex(todo => todo.id === payload)
    state.todos.splice(index, 1)
  },
  UPDATE_FILTER: (state, filter) => {
    state.filter = filter
  },
  CLEAR_COMPLETED: (state) => {
    state.todos = state.todos.filter(todo => !todo.isCompleted)
  }
}

const actions = {
  addTodo: (context, payload) => {
    context.commit('ADD_TODO', payload)
  },
  toggleTodo: (context, payload) => {
    context.commit('TOGGLE_TODO', payload)
  },
  updateTodo: (context, payload) => {
    context.commit('UPDATE_TODO', payload)
  },
  deleteTodo: (context, payload) => {
    context.commit('DELETE_TODO', payload)
  },
  updateFilter: (context, filter) => {
    context.commit('UPDATE_FILTER', filter)
  },
  clearCompleted: (context) => {
    context.commit('CLEAR_COMPLETED')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
