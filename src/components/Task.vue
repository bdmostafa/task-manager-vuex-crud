<template>
  <div>
    <h3>Task Manager</h3>
    <div class="tasks">
      <ul class="task-list-area">
        <li v-for="task in allTasks" :key="task.id" class="task">
          {{ task.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tasks",
  methods: {
    ...mapActions(["fetchTasks"])
  },
  computed: {
    ...mapGetters(["allTasks"])
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style>
.tasks {
  display: block;
}
.task-list-area { 
    padding: 0;
}
.task {
  border: 1px solid #ccc;
  background: #64adf1;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  list-style: none;
}
</style>
