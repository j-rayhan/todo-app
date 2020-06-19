<template>
<div class="container">
  <img src="./assets/logo.png" class="vue-logo" alt="Vue.js Logo" />
  <div id="app">
    <div>
      <app-new-todo></app-new-todo>
      <app-todo-list></app-todo-list>
      <app-todo-footer></app-todo-footer>
    </div>
  </div>
</div>
</template>

<script>
import TodoNew from './components/TodoNew.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  components: {
    appNewTodo: TodoNew,
    appTodoList: TodoList,
    appTodoFooter: TodoFooter
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(45deg, #5189c1 25%, #41b883);
  height: 100%;
  color: #333;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {
  width: 28rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h2 {
  text-align: center;
  margin-top: 0;
}

.vue-logo {
  display: block;
  width: 30px;
  margin: 0 auto;
}
</style>
