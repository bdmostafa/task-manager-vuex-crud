import axios from 'axios';

const state = {
    tasks: [
        {
            id: 1,
            title: 'T one'
        },
        {
            id: 2,
            title: 'T two'
        }
    ]
};

const getters = {
    allTasks: (state) => state.tasks
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}