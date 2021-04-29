<template>
  <h1>События, для пользы уму и сердцу ...</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
// import axios from 'axios'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    //when component created get events from mock db
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
