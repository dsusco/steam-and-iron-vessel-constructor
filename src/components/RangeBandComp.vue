<script setup>
import { computed } from 'vue'

import { ACCURACY_GAMUT, DAMAGE_GAMUT, PENETRATION_GAMUT, RANGE_GAMUT, RATE_OF_FIRE_GAMUT } from '@/constants/gamuts'
import WEAPON_TYPES from '@/constants/weapon-types'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    maximumWeaponRange: { type: Number, required: true },
    nextRangeBand: Object,
    prevRangeBand: Object,
    rangeBand: { type: Object, required: true }
  }),
  maximumRangeGamut = computed(() => {
    const gamutEnd = props.nextRangeBand ? +props.nextRangeBand.minimumRange - 1 : props.maximumWeaponRange

    return Array.from(
      { length: Math.abs(gamutEnd - +props.rangeBand.minimumRange) + 1 },
      (_, i) => i + +props.rangeBand.minimumRange
    )
  }),
  minimumRangeGamut = computed(() => {
    const gamutStart = props.prevRangeBand ? +props.prevRangeBand.maximumRange + 1 : RANGE_GAMUT[0]

    return Array.from(
      { length: Math.abs(+props.rangeBand.maximumRange - gamutStart) + 1 },
      (_, i) => i + gamutStart
    )
  })
</script>

<template>
  <fieldset>
    <legend>Range Band</legend>

    <label>
      Minimum Range
      <select v-model="rangeBand.minimumRange">
        <option v-for="n in minimumRangeGamut">{{ n }}</option>
      </select>
    </label>

    <label>
      Maximum Range
      <select v-model="rangeBand.maximumRange">
        <option v-for="n in maximumRangeGamut">{{ n }}</option>
      </select>
    </label>

    <label>
      Rate of Fire
      <select v-model="rangeBand.rateOfFire">
        <option v-for="n in RATE_OF_FIRE_GAMUT">{{ n }}</option>
      </select>
    </label>

    <label>
      Accuracy
      <select v-model="rangeBand.accuracy">
        <option v-for="n in ACCURACY_GAMUT">{{ n }}</option>
      </select>
    </label>

    <label>
      Damage
      <select v-model="rangeBand.damage">
        <option v-for="n in DAMAGE_GAMUT">{{ n }}</option>
      </select>
    </label>

    <label>
      Penetration
      <select v-model="rangeBand.penetration">
        <option v-for="n in PENETRATION_GAMUT">{{ n }}</option>
      </select>
    </label>

    <button type="button" @click="$emit('removeRangeBand')">×</button>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
