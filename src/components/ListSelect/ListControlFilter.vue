<template> 
  <input 
    type="text" 
    :value="filter"
    :placeholder="placeholder"
    @input="handleInputChange($event)"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent ({
    name: 'ListFilter',
    props: {
      filter: {
        type: String,
        required: true 
      },
      placeholder: {
        type: String,
        default: 'Type to filter...'
      }
    },
    methods: {
      handleInputChange (e: Event) {
        const target = <HTMLInputElement>e.target;
        this.$emit('update:filter', target.value)
      }
    }
  })
</script>

<style scoped>
  input {
    box-sizing: border-box;
    width: 100%;
    border: 0;
    background-color: inherit;
    padding: 0.3em;
    font-size: 1.0em;
  }
  input:focus {
    outline: none;
  }
</style>
