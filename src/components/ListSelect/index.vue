<template>
  <div class="list-select">
    <list-container
      :dynamic-size="dynamicSize"
      :options="filteredOptions"
      :select-all-option="selectAllOption"
      @list-change="handleListChange($event)"
    />
    <list-control
      :options="selectedOptions"
      v-model:filter="filter"
      @remove="handleListControlRemoval($event)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import ListContainer from './ListContainer.vue'
  import ListControl from './ListControl.vue'
  import { Option, OptionInternal, ListChangeEvent } from './Types'

  export default defineComponent({
    name: 'ListSelect',
    components: {
      ListContainer,
      ListControl
    },
    props: {
      selected: {
        type: Array as PropType<Array<string>>,
        default: []
      },
      dynamicSize: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array as PropType<Array<Option>>,
        default: []
      },
      selectAllOption: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      filteredOptions () : Array<OptionInternal> {
        return this.options
          .filter(x => x.label.toLowerCase().includes(this.filter.toLowerCase()))
          .map(x => {
            return {
              id: x.id,
              label: x.label,
              checked: this.selected.includes(x.id) 
            }
          })
      },
      selectedOptions () : Array<Option> {
        return this.options.filter(x => this.selected.includes(x.id))
      }
    },
    methods: {
      handleListChange (e: ListChangeEvent) : void {
        if (e.id === '') {
          this.$emit('update:selected', e.checked ? this.filteredOptions.map(x => x.id) : [])
          return
        }
        this.$emit('update:selected', e.checked ? [...this.selected, e.id] : this.selected.filter(x => x !== e.id))
      },
      handleListControlRemoval (id: string) {
        this.$emit('update:selected', this.selected.filter(x => x !== id))
      }
    },
    data () {
      return {
        filter: ''
      }
    }
  })
</script>