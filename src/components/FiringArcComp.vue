<script setup>
import { computed, inject } from 'vue'

import { FIRING_ARC_GAMUT } from '@/constants/gamuts'

const
  props = defineProps({
    battery: { type: String, required: true },
    label: { type: String, required: true },
    weapons: { type: String, required: true }
  }),
  nextCondition = inject('nextCondition'),
  prevCondition = inject('prevCondition'),
  firingArcGamut = computed(() => {
    const
      gamutStart = nextCondition.value ? FIRING_ARC_GAMUT.indexOf(nextCondition.value.firingArcs[props.battery][props.label]) : 0,
      gamutEnd = prevCondition.value ? FIRING_ARC_GAMUT.indexOf(prevCondition.value.firingArcs[props.battery][props.label]) + 1: FIRING_ARC_GAMUT.length

    return FIRING_ARC_GAMUT.slice(gamutStart, gamutEnd)
  })

</script>

<template>
  <label>
    {{ label }}
    <select :value="weapons" @change="$emit('update:firingArc', $event.target.value)">
      <option v-for="n in firingArcGamut" :key="n">{{ n }}</option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
</style>



