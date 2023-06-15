<script setup>
const
  emit = defineEmits([
    'update:eccentricity'
  ]),
  props = defineProps({
    abbr: { type: String, required: true },
    checked: { type: Boolean, required: true },
    disabled: { type: Boolean, required: true },
    eccentricity: { type: Object, required: true }
  })
</script>

<template>
  <label>
    <input type="checkbox"
      :checked="checked"
      :disabled="disabled"
      :value="abbr"
      @change="emit('update:eccentricity', $event.target.value, $event.target.checked)">
    {{ eccentricity.name }}
  </label>
</template>

<style lang="scss" scoped>
</style>
