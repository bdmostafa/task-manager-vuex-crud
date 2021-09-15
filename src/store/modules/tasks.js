import axios from "axios";

const state = {
  tasks: []
};

const getters = {
  allTasks: state => state.tasks
};

const actions = {
  async fetchTasks({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("FETCH_TASKS", response.data);
    // console.log(response.data)
  },
  async addTask({ commit }, title) {
    const postData = {
      title,
      completed: false
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      postData
    );

    // Validation on empty data
    if (title.length > 0) {
      commit("ADD_TASK", response.data);
    } else {
      alert("There is an empty. Please try again with text");
    }
  },
  async deleteTask({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("DELETE_TASK", id);
  },
  async limitTasks({ commit }, event) {
    // Getting selected number
    const number = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${number}`
    );

    commit("LIMIT_TASKS", response.data);
  },
  async updateTask({ commit }, task) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${task.id}`,
      task
    );

    commit("UPDATE_TASK", response.data);
  },
  async completeTask({ commit }, task) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${task.id}`,
      task
    );

    commit("COMPLETE_TASK", response.data);
  }
};

const mutations = {
  FETCH_TASKS: (state, payload) => (state.tasks = payload),
  ADD_TASK: (state, payload) => state.tasks.unshift(payload),
  DELETE_TASK: (state, id) =>
    (state.tasks = state.tasks.filter(task => task.id != id)),
  LIMIT_TASKS: (state, payload) => (state.tasks = payload),
  UPDATE_TASK: (state, payload) => {
    const taskIndex = state.tasks.findIndex(task => task.id === payload.id);

    if (taskIndex !== -1) {
      state.tasks.splice(taskIndex, 1, payload);
    }
  },
  COMPLETE_TASK: (state, payload) => {
    const taskIndex = state.tasks.findIndex(task => task.id === payload.id);

    if (taskIndex !== -1) {
      state.tasks.splice(taskIndex, 1, payload);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
