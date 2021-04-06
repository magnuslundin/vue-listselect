<template>
  <div class="list-control">
    <list-control-label
      v-for="(option, id) in options"
      :key="id"
      :label="option.label"
      @remove="$emit('remove', option.id)"
    />
    <list-control-filter
      :filter="filter"
      @input="handleInputChange($event)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import ListControlFilter from './ListControlFilter.vue'
  import ListControlLabel from './ListControlLabel.vue'
  import { Option } from './Types'

  export default defineComponent({
    name: 'ListControl',
    components: {
      ListControlFilter,
      ListControlLabel
    },
    props: {
      options: {
        type: Array as PropType<Array<Option>>,
        default: []
      },
      filter: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleInputChange (e: Event) {
        const target = <HTMLInputElement>e.target
        this.$emit('update:filter', target.value)
      }
    }
  })
</script>

<style scoped>
  .list-control {
    border-style: solid;
    border-width: 0 1px 1px 1px;
    border-color: #e0e0e0;
    padding: 0.5em 0.3em;
  }
</style>
