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
      default: "Search City",
    },
  },
};
</script>
<style scoped>
.input-field {
  width: 20%;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0px 15px 0px 15px;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 1s;
  background-color: var(--font-color);
}
.input-field:focus {
  outline: none;
  width: 60%;
}
</style>
