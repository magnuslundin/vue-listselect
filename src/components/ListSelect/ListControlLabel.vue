<template>
  <span 
    class="control-item-label"
  >
    {{ label }}
    <span 
      class="control-item-label-remove"
      @click="$emit('remove')"
    />
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ControlItemLabel',
    props: {
      label: {
        type: String
      }
    }
  }) 
</script>

<style scoped>
  .control-item-label {
    display: inline-block;
    background-color: rgb(190, 190, 190);
    border-radius: 0.2em;
    padding: 0 0.3em;
    margin: 0 0.5em 0.5em 0;
  }
  .control-item-label-remove:before {
    content: '\1F5D1';
    color: rgb(160, 160, 160)
  }
  .control-item-label-remove:hover:before {
    color: inherit;
  }
</style>