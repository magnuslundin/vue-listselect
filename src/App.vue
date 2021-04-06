<template>
  <list-select
    v-model:selected="selected"
    :options="options"
  />
  <p>Selected ids: {{ selected }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListSelect from './components/ListSelect/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    ListSelect
  },
  data () {
    return {
      selected: [],
      options: [
        {
          id: '1',
          label: 'Click me first!'
        },
        {
          id: '2',
          label: 'No me!!!!'
        }
      ]
    }
  }
})
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3f3f3f;
  }
</style>
