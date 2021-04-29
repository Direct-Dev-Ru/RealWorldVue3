<template>
  <h1>Крутяцкое мероприятие! Посмотри поподробнее !!!</h1>
  <div class="event" v-if="event">
    <h2>{{ event.title }}</h2>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
// import axios from 'axios'

export default {
  name: 'EventDetails',
  components: {},
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    //when component created get event from mock db
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
