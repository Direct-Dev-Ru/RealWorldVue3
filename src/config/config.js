const config = {
  apiBaseUrl: process.env.VUE_APP_API_ROOT,
  features: {}
}

console.log(process.env, config)

function feature(name) {
  return config.features[name]
}

// function parse(value, fallback) {
//   if (typeof value === 'undefined') {
//     return fallback
//   }
//   switch (typeof fallback) {
//     case 'boolean':
//       return !!JSON.parse(value)
//     case 'number':
//       return JSON.parse(value)
//     default:
//       return value
//   }
// }

export { config }

export default {
  install(Vue) {
    Vue.appConfig = config
    Vue.feature = feature

    Vue.prototype.$appConfig = config
    Vue.prototype.$feature = feature
  }
}
