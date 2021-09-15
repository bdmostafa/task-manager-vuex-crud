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
    },
    async addTask({ commit }, title) {
        const postData = {
            title,
            completed: false
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', postData)

        commit('ADD_TASK', response.data)
    }
};

const mutations = {
    FETCH_TASKS: (state, payload) => (state.tasks = payload),
    ADD_TASK: (state, payload) => (state.tasks.unshift(payload))
};

export default {
    state,
    getters,
    actions,
    mutations
}