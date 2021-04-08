<template>
  <div 
    class="list-container"
    :class="{ 'fixed-height': !dynamicSize }"
  >
    <list-item
      v-if="selectAllOption"
      title="Select all"
      :checked="allSelected"
      @input="handleListItemChange($event, '')"
    />
    <list-item 
      v-for="(option, key) in options"
      :key="key"
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
        default: [],
        validator: (value: Array<OptionInternal>) => {
          return value.filter(x => x.id.length === 0).length === 0
        }
      },
      selectAllOption: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      allSelected () : boolean {
        return !this.options.some(x => !x.checked)
      }
    },
    methods: {
      handleListItemChange (e: Event, id: string) : void {
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