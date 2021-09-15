import Vuex from 'vuex';
import Vue from 'vue';
import tasks from './modules/tasks';

// Vuex loading
Vue.use(Vuex);

// Store creating
export default new Vuex.Store({
    modules: {
        tasks
    }
});