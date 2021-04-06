<template>
  <div class="list-select-item">  
    <label>
      <input 
        type="checkbox" 
        :checked="checked"
        @input="handleInputChange($event)"
      >{{ title }}
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    name: 'ListContainerItem',
    props: {
      title: {
        type: String,
        required: true
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleInputChange (e: Event) {
        const target = <HTMLInputElement>e.target
        this.$emit('update:checked', target.checked)
      }
    }
  })
</script>

<style scoped>
  .list-select-item:hover {
    background-color: #f9f9f9;
  }
  .list-select-item label {
    display: block;
  }
</style>
