<script setup>
import { computed } from 'vue'

import ECCENTRICITIES from '@/constants/eccentricities'
import WEAPON_TYPES from '@/constants/weapon-types'
import Eccentricity from '@/components/Eccentricity.vue'
import WeaponRangeBand from '@/components/WeaponRangeBand.vue'
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
  <fieldset class="weapon">
    <legend>{{ weapon.name || id }}</legend>

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

      <WeaponRangeBand
        v-for="(rangeBand, index) in weapon.rangeBands" :key="index"
        :maximumWeaponRange="WEAPON_TYPES[weapon.type].maximumRange"
        :nextRangeBand="weapon.rangeBands[index + 1]"
        :prevRangeBand="weapon.rangeBands[index - 1]"
        :rangeBand="rangeBand"
        @remove-range-band="removeRangeBand(index)" />
    </fieldset>

    <fieldset class="weapon_eccentricities">
      <legend>Eccentricities</legend>

      <Eccentricity
        v-for="(eccentricity, abbr) in ECCENTRICITIES.Weapon" :key="abbr"
        :abbr="abbr"
        :eccentricity="eccentricity"
        :weapon="weapon" />
    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
.weapon_eccentricities {
  > label {
    padding: 0 1em;
  }
}
</style>
