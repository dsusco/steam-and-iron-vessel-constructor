<script setup>
import { computed } from 'vue'

import { ACCURACY_GAMUT, DAMAGE_GAMUT, PENETRATION_GAMUT, RANGE_GAMUT, RATE_OF_FIRE_GAMUT } from '@/constants/gamuts'
import WEAPON_TYPES from '@/constants/weapon-types'
import RangeBandComp from '@/components/RangeBandComp.vue'

const
  props = defineProps({
    weapon: { type: Object, required: true }
  }),
  nextMinimumRange = computed(() => {
    let range = Math.max(0, ...props.weapon.rangeBands.map((rangeBand) => +rangeBand.maximumRange)) + 1

    if (props.weapon.rangeBands.length > 2 ||
        range > WEAPON_TYPES[props.weapon.type].maximumRange) range = false

    return range
  })

function addRangeBand () {
  const range = nextMinimumRange.value

  if (range) {
    props.weapon.rangeBands.push({
      minimumRange: range,
      maximumRange: range,
      rateOfFire: RATE_OF_FIRE_GAMUT[0],
      accuracy: ACCURACY_GAMUT[0],
      damage: DAMAGE_GAMUT[0],
      penetration: PENETRATION_GAMUT[0]
    })
  }
}

function maximumRangeGamut (index) {
  const
    minimumRange = +props.weapon.rangeBands[+index].minimumRange,
    nextRangeBand = props.weapon.rangeBands[+index + 1],
    gamutEnd = nextRangeBand ? +nextRangeBand.minimumRange - 1 : WEAPON_TYPES[props.weapon.type].maximumRange

  return Array.from(
    { length: Math.abs(gamutEnd - minimumRange) + 1 },
    (_, i) => i + minimumRange
  )
}

function minimumRangeGamut (index) {
  const
    maximumRange = +props.weapon.rangeBands[+index].maximumRange,
    prevRangeBand = props.weapon.rangeBands[+index - 1],
    gamutStart = prevRangeBand ? +prevRangeBand.maximumRange + 1 : RANGE_GAMUT[0]

  return Array.from(
    { length: Math.abs(maximumRange - gamutStart) + 1 },
    (_, i) => i + gamutStart
  )
}

function removeRangeBand (index) {
  props.weapon.rangeBands.splice(+index, 1)
}
</script>

<template>
  <fieldset>
    <legend>{{ weapon.name }}</legend>

    <label>
      Name
      <input type="text" v-model="weapon.name">
    </label>

    <label>
      Type
      <select :disabled="weapon.rangeBands.length" v-model="weapon.type">
        <option v-for="(weaponType, key) in WEAPON_TYPES">{{ key }}</option>
      </select>
    </label>

    <button type="button" @click="$emit('removeWeapon')">×</button>

    <fieldset>
      <legend>Range Bands</legend>

      <button :disabled="!nextMinimumRange" @click="addRangeBand()">Add Range Band</button>

      <RangeBandComp
        v-for="(rangeBand, index) in weapon.rangeBands" :key="index"
        :rangeBand="rangeBand"
        :maximumRangeGamut="maximumRangeGamut(index)"
        :minimumRangeGamut="minimumRangeGamut(index)"
        @remove-range-band="removeRangeBand(index)" />
    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
