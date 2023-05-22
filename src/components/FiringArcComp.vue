<script setup>
import { computed, inject } from 'vue'

import { FIRING_ARC_GAMUT } from '@/constants/gamuts'

const
  props = defineProps({
    battery: { type: String, required: true },
    label: { type: String, required: true },
    weapons: { type: Number, required: true },
    weaponType: { type: String, required: true }
  }),
  nextCondition = inject('nextCondition'),
  prevCondition = inject('prevCondition'),
  firingArcGamut = computed(() => {
    const
      gamutStart = nextCondition.value ? +nextCondition.value.firingArcs[props.battery][props.label] : 0,
      gamutEnd = prevCondition.value ? +prevCondition.value.firingArcs[props.battery][props.label] + 1: FIRING_ARC_GAMUT.length

    return FIRING_ARC_GAMUT.slice(gamutStart, gamutEnd)
  }),
  shown = computed(() => {
    if (props.weaponType === 'Guns' &&
        ['forward', 'astarboardForward', 'astarboardAft', 'aft', 'aportAft', 'aportForward'].indexOf(props.label) >= 0) {
      return true
    }

    if (props.weaponType === 'Released Munitions' &&
        ['above', 'below'].indexOf(props.label) >= 0) {
      return true
    }

    return false
  })

</script>

<template>
  <label v-if="shown">
    {{ label }}
    <select :value="weapons" @change="$emit('update:firingArc', $event.target.value)">
      <option v-for="n in firingArcGamut" :key="n">{{ n }}</option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
</style>



