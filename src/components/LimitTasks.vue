<template>
  <div>
    <h3>Limit Tasks</h3>
    Choose Limit:
    <select @change="limitTasks($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LimitTasks",
  methods: mapActions(["limitTasks"])
};
</script>

<style scoped>
select {
  padding: 5px;
  border: #1289d8 1px solid;
  border-radius: 3px;
  margin-left: 5px;
  background-color: azure;
}
</style>
