import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
var VueScrollTo = require('vue-scrollto')
require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false
Vue.use(VueScrollTo)

export const eventBus = new Vue({
  methods: {
    openLoginModal(flag){
      this.$emit('isLoggingIn', flag)
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
