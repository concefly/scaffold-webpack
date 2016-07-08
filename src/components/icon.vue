<template lang="html">
  <i class="material-icons {{size || ''}}">{{type}}</i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import url(http://fonts.useso.com/icon?family=Material+Icons);
</style>
