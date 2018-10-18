import Vue from 'vue'
import App from './App.vue'
import FullCalendar from 'vue-full-calendar'

import 'fullcalendar/dist/fullcalendar.css'

Vue.use(FullCalendar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
