<template>
  <div id="app">
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todo.vue'

export default {
  name: 'app',

  components: {
    Todos
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
</style>
