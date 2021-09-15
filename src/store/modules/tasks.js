import axios from 'axios';

const state = {
    tasks: []
};

const getters = {
    allTasks: (state) => state.tasks
};

const actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // commit('FETCH_TASKS', response)
        console.log(response.data)
    }
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}