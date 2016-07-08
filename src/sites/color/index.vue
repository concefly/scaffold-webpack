<template lang="html">
  <div class="">
    <div class="row">
      <div class="col s12">
        <h1>色板</h1>
      </div>
    </div>
    <div class="row">
      <div class="col m4" v-for="name in normalPalette">
        <div class="_card {{name}} lighten-5">{{name}} lighten-5</div>
        <div class="_card {{name}} lighten-4">{{name}} lighten-4</div>
        <div class="_card {{name}} lighten-3">{{name}} lighten-3</div>
        <div class="_card {{name}} lighten-2">{{name}} lighten-2</div>
        <div class="_card {{name}} lighten-1">{{name}} lighten-1</div>
        <div class="_card {{name}}">{{name}}</div>
        <div class="_card {{name}} darken-1">{{name}} darken-1</div>
        <div class="_card {{name}} darken-2">{{name}} darken-2</div>
        <div class="_card {{name}} darken-3">{{name}} darken-3</div>
        <div class="_card {{name}} darken-4">{{name}} darken-4</div>
        <div class="_card {{name}} accent-1">{{name}} accent-1</div>
        <div class="_card {{name}} accent-2">{{name}} accent-2</div>
        <div class="_card {{name}} accent-3">{{name}} accent-3</div>
        <div class="_card {{name}} accent-4">{{name}} accent-4</div>
      </div>
      <div class="col m4">
        <div class="_card black">black</div>
        <div class="_card white">white</div>
        <div class="_card transparent">transparent</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      normalPalette: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue',
      'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange',
      'brown', 'grey', 'blue-grey']
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
._card {
  text-align: center;
  line-height: 3;
  &:last-of-type {
    margin-bottom: 20px;
  }
  &.black {
    color: #fff;
  }
}
</style>
