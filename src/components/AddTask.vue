<template>
  <div>
    <h3>Add Task</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add a new task..." />
        <input type="submit" value="Add Task" />
        <font-awesome-icon icon="plus" class="plus-icon" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTask",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    onSubmit(e) {
      this.addTask(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #64adf1;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #398ac0;
  color: #fff;
  border: 1px #64adf1 solid;
  cursor: pointer;
}
input[type="submit"]:hover {
  background: #fff;
  color: #1289d8;
  border: 1px #64adf1 solid;
  font-weight: 700;
}
.plus-icon {
  position: relative;
  top: 10px;
  right: 50px;
  color: white;
  cursor: pointer;
}
input[type="submit"]:hover .plus-icon {
  color: #1289d8;
}
.plus-icon:hover > input[type="submit"] {
  background: #fff;
  color: #1289d8;
  border: 1px #64adf1 solid;
  font-weight: 700;
}
</style>
