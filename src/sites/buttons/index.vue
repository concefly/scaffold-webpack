<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col m12">
        <h1>Buttons</h1>
      </div>
    </div>
    <div class="row">
      <div class="col m12">
        <h2>Normal type</h2>
        <ui-button>BUTTON</ui-button>
        <ui-button>
          <ui-icon ext="left">search</ui-icon>
          Search
        </ui-button>
        <ui-button size="large">
          Search
          <ui-icon ext="right">cloud</ui-icon>
        </ui-button>
      </div>
      <div class="col m12">
        <h2>Floating</h2>
        <ui-button floating ext="red" size="large">
          <ui-icon>search</ui-icon>
        </ui-button>
      </div>
      <div class="col m12">
        <h2>Flat</h2>
        <ui-button flat waves="teal">
          flat
        </ui-button>
      </div>
      <div class="col m12">
        <table>
          <thead>
            <tr>
              <th> Prop </th>
              <th> Type </th>
              <th> Default </th>
              <th> Description </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> size </td>
              <td> String </td>
              <td> - </td>
              <td> The size of button. Only allow <code>"large"</code> at present.</td>
            </tr>
            <tr>
              <td> ext </td>
              <td> String </td>
              <td> - </td>
              <td> The extract class string. </td>
            </tr>
          </tbody>
        </table>
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
    uiButton: require('../../components/button.vue'),
    uiIcon: require('../../components/icon.vue')
  }
}
</script>

<style lang="scss" scoped>
</style>
