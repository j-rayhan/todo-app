<template>
<div>
<h3>{{message}}</h3>
<form name="todo-form" method="post" action="" @submit.prevent="addTask">
  <input
     class="todo-input"
     type="text"
     placeholder="Enter a new task"
     v-model="task"
     :class="{error: hasError}"
   />
  <button type="submit">Add</button>
</form>
</div>

</template>

<script>
export default {
  data () {
    return {
      task: ''
    }
  },
  computed: {
    message () {
      return this.$store.state.message
    },
    hasError () {
      return this.$store.state.hasError
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch('addTodo', this)
      this.task = ''
    }
  }
}
</script>

<style scoped>
  .todo-input {
    font-family: "Open Sans", sans-serif;
    width: 82%;
    padding: 0.5rem;
    margin-bottom: 8px;
    font-size: 1rem;
    outline: none;
    border-radius: 0.25rem;
    border-style: none;
    border: solid 1px lightgray;
    box-sizing: border-box;
  }
  input[type=text].error{border: 1px solid red;}
  button{
    background: #3498db;
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 5px;
    margin-left: 8px;
    color: #ffffff;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    cursor:pointer;
  }

  button:hover {
    background: #3cb0fd;
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  }
</style>
