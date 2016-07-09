<template lang="html">
  <a :class="cls">
    <slot></slot>
  </a>
</template>

<script>
// waves.js 不依赖其他库
require('materialize-css/js/waves')
export default {
  props: {
    size: {
      type: String,
      validator: function (value) {
        return ['large'].indexOf(value) >= 0
      }
    },
    floating: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    waves: {
      type: String,
      default: 'light'
    },
    ext: {
      type: String
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    cls: function () {
      var re = {
        'waves-effect': true,
        [`waves-${this.waves}`]: this.waves,
        [`btn-${this.size}`]: this.size,
        [this.ext]: this.ext
      }
      if (this.floating) {
        re['btn-floating'] = true
      } else if (this.flat) {
        re['btn-flat'] = true
      } else {
        re['btn'] = true
      }
      return re
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    icon: require('./icon.vue')
  }
}
</script>

<style lang="scss">
</style>
