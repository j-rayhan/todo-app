<template>
  <div>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    >
    </todo-item>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  computed: {
    todos () {
      return this.$store.getters.todosFiltered
    }
  }
}
</script>

<style>

</style>
