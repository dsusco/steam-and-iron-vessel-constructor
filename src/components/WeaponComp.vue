<script setup>
import { computed } from 'vue'

import { RANGE_GAMUT } from '@/constants/gamuts'
import WEAPON_TYPES from '@/constants/weapon-types'
import RangeBandComp from '@/components/RangeBandComp.vue'
import RangeBand from '@/models/range-band'

const
  props = defineProps({
    id: { type: String, required: true },
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
    props.weapon.rangeBands.push(new RangeBand(range))
  }
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
        :index="index"
        :rangeBand="rangeBand"
        :weaponId="id"
        @remove-range-band="removeRangeBand(index)" />
    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
