<template>
  <div class="todo-footer">
   <div>{{ remaining }} items left</div>
   <div>
    <button
      :class="{ active: filter === 'all' }"
      @click="changeFilter('all')"
    >
    All
    </button>
    <button
      :class="{ active: filter === 'active' }"
      @click="changeFilter('active')"
    >
    Active
    </button>
    <button
      :class="{ active: filter === 'completed' }"
      @click="changeFilter('completed')"
    >
    Completed
    </button>
  </div>
   <button
    v-if="showClearCompletedButton"
    @click="clearCompleted"
   >
   Clear Completed
   </button>
  </div>
</template>

<script>
export default {
  name: 'todo-footer',
  computed: {
    remaining () {
      return this.$store.getters.remaining
    },
    filter () {
      return this.$store.state.filter
    },
    showClearCompletedButton () {
      return this.$store.getters.showClearCompletedButton
    }
  },
  methods: {
    changeFilter (filter) {
      this.$store.dispatch('updateFilter', filter)
    },
    clearCompleted () {
      this.$store.dispatch('clearCompleted')
    }
  }
}
</script>

<style scoped>
.todo-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.active {
  background: lightgreen;
}
</style>
