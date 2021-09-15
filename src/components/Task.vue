<template>
  <div>
    <h3>Task List</h3>
    <div class="tasks">
      <ul class="task-list-area">
        <li v-for="task in allTasks" :key="task.id" class="task">
          {{ task.title }}
          <span class="icons">
           <font-awesome-icon icon="trash-alt" class="trash-icon"/>
           <font-awesome-icon icon="edit" class="edit-icon"/>
           </span>
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
.task:hover {
  border: 1px solid #ccc;
  background: #fff;
  color: #1289d8;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  list-style: none;
}
.icons {
    color: #fff;
    position: absolute;
    right: 70px;
}
.task:hover > .icons {
    color: #1289d8;
}
.trash-icon {
    margin-right: 5px;
}
</style>
