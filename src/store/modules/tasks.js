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
        commit('FETCH_TASKS', response.data)
        // console.log(response.data)
    }
};

const mutations = {
    FETCH_TASKS: (state, payload) => (state.tasks = payload)
};

export default {
    state,
    getters,
    actions,
    mutations
}