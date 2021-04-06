# ListSelect

ListSelect is a minimal multi-select component for Vue3.

Example setup:

```html
<template>
  <list-select
    v-model:selected="selected"
    :options="options"
  />
</template>
```
```javascript

<script lang="ts">
import { defineComponent } from 'vue'
import ListSelect from './components/ListSelect/index.vue'

export default defineComponent({
  components: { ListSelect },
  data () {
    return {
      selected: [],
      options: [{ id: 'myid', label: 'MyLabel' }]
    }
  }
})
</script>
```
