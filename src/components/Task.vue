<template>
  <div>
    <h3>Task Manager</h3>
    <div class="tasks">
      <ul>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.task {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  list-style: none;
}
</style>
