<template>
  <div>
    <h3>Task List</h3>
    <div class="list-sign">
      <span>Click on Check Mark to be as completed and vice-versa</span>
      <span> <span class="incomplete-list"></span> = Incomplete </span>
      <span> <span class="complete-list"></span> = Complete </span>
    </div>
    <div class="tasks">
        <!-- <input v-model="title" v-if="isEdit" /> -->
      <ul class="task-list-area">
        <li
          v-for="task in allTasks"
          :key="task.id"
          class="task"
          :class="{ 'is-complete': task.completed }"
        >
          {{ task.title }}
          <span class="icons">
            <font-awesome-icon
              @click="deleteTask(task.id)"
              icon="trash-alt"
              class="trash-icon"
            />
            <!-- <font-awesome-icon
              @click="taskUpdated(task)"
              icon="edit"
              class="edit-icon"
            /> -->
            <font-awesome-icon
              icon="edit"
              class="edit-icon"
            />
            <font-awesome-icon
              @click="taskCompleted(task)"
              icon="check-square"
              class="check-icon"
            />
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
//   data() {
//     return { 
//         title ='',
//         isEdit: false
//          };
//   },
  methods: {
    ...mapActions(["fetchTasks", "deleteTask", "updateTask", "completeTask"]),
    taskUpdated(task) {
      const updatedTask = {
        title: task.title,
        id: task.id,
        completed: task.completed
      };
      this.updateTask(updatedTask);
    },
    taskCompleted(task) {
      const updatedTask = {
        title: task.title,
        id: task.id,
        completed: !task.completed
      };
      this.completeTask(updatedTask);
    }
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
.list-sign {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-list {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-list {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #64adf1;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
.is-complete > .icons {
  color: #fff;
}
</style>
