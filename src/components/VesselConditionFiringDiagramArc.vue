<script setup>
import { inject, toRef } from 'vue'

import { useFiringArcGamut } from '@/composables/firing-arc-gamut'

const
  emit = defineEmits([
    'update:weapons'
  ]),
  props = defineProps({
    battery: { type: String, required: true },
    label: { type: String, required: true },
    weapons: { type: String, required: true }
  }),
  { firingArcGamut } = useFiringArcGamut(
    toRef(props, 'battery'),
    toRef(props, 'label'),
    inject('nextCondition'),
    inject('prevCondition')
  )
</script>

<template>
  <label :class="`arc _${label}`">
    {{ label }}
    <select
      :value="weapons"
      @change="emit('update:weapons', $event.target.value)">
      <option v-for="n in firingArcGamut" :key="n">{{ n }}</option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
</style>



