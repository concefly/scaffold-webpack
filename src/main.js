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
  '/': {
    component: require('./sites/index')
  }
})

router.start(require('./App.vue'), '#__vue')
