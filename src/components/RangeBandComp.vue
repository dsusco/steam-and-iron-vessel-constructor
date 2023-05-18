<script setup>
import { ACCURACY_GAMUT, DAMAGE_GAMUT, PENETRATION_GAMUT, RANGE_GAMUT, RATE_OF_FIRE_GAMUT } from '@/constants/gamuts'

const
  props = defineProps({
    rangeBand: { type: Object, required: true },
    maximumRangeGamut: { type: Array, required: true },
    minimumRangeGamut: { type: Array, required: true }
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
