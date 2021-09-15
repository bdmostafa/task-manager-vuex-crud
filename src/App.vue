<template>
  <div id="app">
    <div class="container">
      <h1 class="headeing"> Task Manager </h1>
      <AddTask />
      <LimitTasks />
      <Tasks />
    </div>
  </div>
</template>

<script>
import Tasks from './components/Task.vue'
import AddTask from './components/AddTask.vue'
import LimitTasks from './components/LimitTasks.vue'

export default {
  name: 'app',

  components: {
    Tasks,
    AddTask,
    LimitTasks
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  font-family: "Ubuntu";
  line-height: 1.6;
  background: #f5dded;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
.headeing {
  text-align: center;
}
</style>
