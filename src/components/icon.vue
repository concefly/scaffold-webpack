<template lang="html">
  <i class="material-icons {{ext}}"><slot></slot></i>
</template>

<script>
export default {
  props: {
    ext: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import url(http://fonts.useso.com/icon?family=Material+Icons);
.material-icons {
  /* font-size: inherit !important; */
}
</style>
