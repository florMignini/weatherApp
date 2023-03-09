<template>
  <input
    class="input-field"
    :value="modelValue"
    @input="$emit('update:modelValue', '$event.target.value')"
  />
</template>

<script lang="ts">
export default {
  props: {
    modelValue: {
      type: [String],
      default: "Search",
    },
  },
};
</script>
