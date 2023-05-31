<script setup>
import { computed } from 'vue'

import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

const
  props = defineProps({
    abbr: { type: String, required: true },
    eccentricity: { type: Object, required: true },
    vessel: Object,
    weapon: Object
  }),
  parent = computed(() => props.weapon === undefined ? props.vessel : props.weapon),
  enabled = computed(() => {
    return Object.values(eccentricityTogglers).every((toggler) =>
      toggler(props.eccentricity, parent.value, props.vessel, props.weapon))
  })
</script>

<template>
  <label>
    <input type="checkbox" :disabled="!enabled" :value="abbr" v-model="parent.eccentricities">
    {{ eccentricity.name }}
  </label>
</template>

<style lang="scss" scoped>
</style>
