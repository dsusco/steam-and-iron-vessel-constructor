<script setup>
import { toRef } from 'vue'

import { ACCURACY_GAMUT, DAMAGE_GAMUT, PENETRATION_GAMUT, RATE_OF_FIRE_GAMUT } from '@/constants/gamuts'
import { useRangeGamuts } from '@/composables/range-gamuts'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  emit = defineEmits([
    'remove:rangeBand',
    'update:minimumRange',
    'update:maximumRange',
    'update:rateOfFire',
    'update:accuracy',
    'update:damage',
    'update:penetration'
  ]),
  props = defineProps({
    index: { type: Number, required: true },
    maximumWeaponRange: { type: Number, required: true },
    nextRangeBand: Object,
    prevRangeBand: Object,
    minimumRange: { type: String, required: true },
    maximumRange: { type: String, required: true },
    rateOfFire: { type: String, required: true },
    accuracy: { type: String, required: true },
    damage: { type: String, required: true },
    penetration: { type: String, required: true }
  }),
  { maximumRangeGamut, minimumRangeGamut } = useRangeGamuts(
    toRef(props, 'maximumWeaponRange'),
    toRef(props, 'nextRangeBand'),
    toRef(props, 'prevRangeBand'),
    toRef(props, 'minimumRange'),
    toRef(props, 'maximumRange')
  )
</script>

<template>
  <fieldset>
    <legend>Range Band</legend>

    <label>
      Minimum Range
      <select
        :value="minimumRange"
        @change="emit('update:minimumRange', $event.target.value)">
        <option v-for="n in minimumRangeGamut" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Maximum Range
      <select
        :value="maximumRange"
        @change="emit('update:maximumRange', $event.target.value)">
        <option v-for="n in maximumRangeGamut" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Rate of Fire
      <select
        :value="rateOfFire"
        @change="emit('update:rateOfFire', $event.target.value)">
        <option v-for="n in RATE_OF_FIRE_GAMUT" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Accuracy
      <select
        :value="accuracy"
        @change="emit('update:accuracy', $event.target.value)">
        <option v-for="n in ACCURACY_GAMUT" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Damage
      <select
        :value="damage"
        @change="emit('update:damage', $event.target.value)">
        <option v-for="n in DAMAGE_GAMUT" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Penetration
      <select
        :value="penetration"
        @change="emit('update:penetration', $event.target.value)">
        <option v-for="n in PENETRATION_GAMUT" :key="n">{{ n }}</option>
      </select>
    </label>

    <button type="button" @click="emit('remove:rangeBand', index)">×</button>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
