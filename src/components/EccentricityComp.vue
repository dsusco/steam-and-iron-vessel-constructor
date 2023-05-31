<script setup>
import { computed } from 'vue'

const
  props = defineProps({
    abbr: { type: String, required: true },
    eccentricity: { type: Object, required: true },
    vessel: Object,
    weapon: Object
  }),
  parent = computed(() => props.weapon === undefined ? props.vessel : props.weapon),
  disabled = computed(() => {
    return false
  })
</script>

<template>
  <label>
    <input type="checkbox" :disabled="disabled" :value="abbr" v-model="parent.eccentricities">
    {{ eccentricity.name }}
  </label>
</template>

<style lang="scss" scoped>
</style>
