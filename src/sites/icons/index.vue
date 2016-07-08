<template lang="html">
  <div class="container">
    <div class="row">
      <div class="m12">
        <h1>Icons</h1>
      </div>
    </div>
    <div class="row">
      <div class="m12">
        <ui-icon type="info_outline"></ui-icon>
        <ui-icon type="search" size="large"></ui-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    uiIcon: require('../../components/icon.vue')
  }
}
</script>

<style lang="scss" scoped>
</style>
