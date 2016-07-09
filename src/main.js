import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/color': {
    component: require('./sites/color')
  },
  '/icons': {
    component: require('./sites/icons')
  },
  '/buttons': {
    component: require('./sites/buttons')
  },
  '/': {
    component: require('./sites/index')
  }
})

router.start(require('./App.vue'), '#__vue')
