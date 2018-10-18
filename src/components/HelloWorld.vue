<template>
  <div class="hello">
    <p>Click button below several times, you'll see the events on the page start to multiple</p>
    <button @click="toggle()"><strong>Toggle Calendar View</strong></button>
    <div v-if="show">
    <full-calendar :config="config" :events="events" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      show: false,
      config: {
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        editable: false,
        defaultView: 'month',
        eventColor: '#CCCCCC',
        displayEventTime: false,
        header: {
          left: 'prev,today,next',
          center: 'title',
          right: 'timelineWeek,month',
        },
        resourceLabelText: 'Cabins',
      },
      addonRates: [{
        name: 'Hi',
        start: '2018-10-01',
        end: '2018-11-01',
      }, {
        name: 'Hello',
        start: '2018-11-01',
        end: '2018-12-01',
      }],
    }
  },
  computed: {
    events () {
      return this.addonRates
        .map(ur => ({
          title: `${ur.name}`,
          start: moment(ur.start),
          end: moment(ur.end),
        }))
    },
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
