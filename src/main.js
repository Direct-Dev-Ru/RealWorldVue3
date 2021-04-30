import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue'
import { config } from './config/config'

// Vue.use(configPlugin)
config.f = '1'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
