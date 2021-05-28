<template>
  <div>{{ 112 }}</div>
  <Button type="link">
    this is link button
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './button';

const Compo = defineComponent({
  components: {
    Button
  },
  data() {
    return {
      d: 112
    };
  }
});

export default Compo;
</script>
