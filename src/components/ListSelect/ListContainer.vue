<template>
  <div 
    class="list-container"
    :class="{ 'fixed-height': !dynamicSize }"
  >
    <list-item 
      v-for="(option, id) in options"
      :key="id"
      :checked="option.checked"
      :title="option.label"
      @input="handleListItemChange($event, option.id)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import ListItem from './ListContainerItem.vue'
  import { OptionInternal, ListChangeEvent } from './Types';

  export default defineComponent({
    name: 'ListContainer',
    components: {
      ListItem
    },
    props: {
      dynamicSize: {
        type: Boolean,
        default: true
      },
      options: {
        type: Array as PropType<Array<OptionInternal>>,
        default: []
      }
    },
    methods: {
      handleListItemChange (e: Event, id: string) {
        const target = <HTMLInputElement>e.target
        this.$emit('list-change', <ListChangeEvent>{
          id: id,
          checked: target.checked
        })
      }
    }
  })

</script>

<style scoped>
  .list-container {
    padding: 0.5em 0 0.5em 0;
    border: 1px solid;
    border-color: #e0e0e0;
  }
  .list-container.fixed-height {
    height: 10em;
    overflow-y: scroll;
  }
</style>