import Vue from 'vue'
import App from './App.vue'
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faPlus, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt, faEdit, faPlus, faCheckSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
