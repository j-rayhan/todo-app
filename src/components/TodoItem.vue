<template>
<div class="todo-item">
    <div class="todo-item-left">
        <input type="checkbox" v-model="isCompleted" @change="updateTodo">
        <div
          v-if="!isEditing"
          @dblclick="editTodo"
          class="todo-item-label"
          :class="{ completed : isCompleted }">
          {{ task }}
        </div>
        <input
          v-else
          class="todo-item-edit"
          type="text"
          v-model="task"
          @blur="updateTodo"
          @keyup.enter="updateTodo"
          @keyup.esc="cancelEdit"
          v-focus
        >
    </div> <!-- end todo-item-left -->
    <div>
      <span class="delete" @click="deleteTodo(id)">
        &times;
      </span>
    </div>
  </div> <!-- end todo-item -->
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    const { id, task, isCompleted, isEditing } = this.todo
    return {
      id,
      task,
      isCompleted,
      isEditing,
      beforeEditCache: ''
    }
  },
  methods: {
    editTodo () {
      this.beforeEditCache = this.task
      this.isEditing = true
    },
    cancelEdit () {
      this.task = this.beforeEditCache
      this.isEditing = false
    },
    deleteTodo () {
      this.$store.dispatch('deleteTodo', this.id)
    },
    updateTodo () {
      if (this.task.trim() === '') {
        this.task = this.beforeEditCache
      }
      this.isEditing = false
      this.$store.dispatch('updateTodo', {
        'id': this.id,
        'task': this.task,
        'isCompleted': this.isCompleted,
        'isEditing': this.isEditing
      })
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  border: 0.5px solid #999;
  padding: 10px;
  border-radius: 5px;
}

.todo-item-left {
  display: flex;
  justify-content: flex-start;
  color: #34495e;
  font-weight: bold;
}

.todo-item-label {
  padding: 0 8px;
}

.todo-item-label:hover {
  cursor: pointer;
}

.todo-item-edit {
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.delete {
  display: block;
  float: right;
  color: #d22;
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
}
</style>
