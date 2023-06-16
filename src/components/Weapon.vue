<script setup>
import { toRef, toRefs } from 'vue'

import ECCENTRICITIES from '@/constants/eccentricities'
import WEAPON_TYPES from '@/constants/weapon-types'
import Eccentricity from '@/components/Eccentricity.vue'
import WeaponRangeBand from '@/components/WeaponRangeBand.vue'
import { useEccentricities } from '@/composables/eccentricities'
import { useRangeBands } from '@/composables/range-bands'

const
  emit = defineEmits([
    'remove:weapon',
    'update:name',
    'update:type'
  ]),
  props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    rangeBands: { type: Array, required: true },
    eccentricities: { type: Array, required: true }
  }),
  { enabledEccentricities, toggleEccentricity } = useEccentricities(
    toRefs(props),
    ECCENTRICITIES.Weapon
  ),
  { addRangeBand, nextMinimumRange, removeRangeBand } = useRangeBands(
    toRef(props, 'type'),
    toRef(props, 'rangeBands')
  )
</script>

<template>
  <fieldset class="weapon">
    <legend>{{ name || id }}</legend>

    <label>
      Name
      <input
        :value="name"
        @input="emit('update:name', $event.target.value)">
    </label>

    <label>
      Type
      <select
        :disabled="rangeBands.length || eccentricities.length"
        :value="type"
        @change="emit('update:type', $event.target.value)">
        <option v-for="(weaponType, key) in WEAPON_TYPES" :key="key">{{ key }}</option>
      </select>
    </label>

    <button type="button" @click="emit('remove:weapon', id)">×</button>

    <fieldset class="weapon_range_bands">
      <legend>Range Bands</legend>

      <button :disabled="!nextMinimumRange" @click="addRangeBand()">Add Range Band</button>

      <WeaponRangeBand
        v-for="(rangeBand, index) in rangeBands" :key="index"
        :index="index"
        :maximumWeaponRange="WEAPON_TYPES[type].maximumRange"
        :nextRangeBand="rangeBands[index + 1]"
        :prevRangeBand="rangeBands[index - 1]"
        v-model:minimumRange="rangeBand.minimumRange"
        v-model:maximumRange="rangeBand.maximumRange"
        v-model:rateOfFire="rangeBand.rateOfFire"
        v-model:accuracy="rangeBand.accuracy"
        v-model:damage="rangeBand.damage"
        v-model:penetration="rangeBand.penetration"
        @remove:range-band="(index) => removeRangeBand(index)" />
    </fieldset>

    <fieldset class="weapon_eccentricities">
      <legend>Eccentricities</legend>

      <Eccentricity
        v-for="(eccentricity, abbr) in ECCENTRICITIES.Weapon" :key="abbr"
        :abbr="abbr"
        :checked="eccentricities.includes(abbr)"
        :disabled="!enabledEccentricities[abbr]"
        :eccentricity="eccentricity"
        @update:eccentricity="(value, checked) => toggleEccentricity(value, checked)" />
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
