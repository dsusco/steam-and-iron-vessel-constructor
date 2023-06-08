<script setup>
import { computed, provide, toRefs } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import VesselConditionFiringDiagram from '@/components/VesselConditionFiringDiagram.vue'
import { useHullCheckboxes } from '@/composables/hull-checkboxes'

const
  props = defineProps({
    condition: { type: Object, required: true },
    label: { type: String, required: true },
    maximumVesselEngineRating: { type: Number, required: true },
    nextCondition: Object,
    prevCondition: Object,
    vesselHullRating: { type: Number, required: true }
  }),
  { nextCondition, prevCondition, vesselHullRating } = toRefs(props),
  armorRatingGamut = computed(() => {
    const
      gamutStart = nextCondition.value ? ARMOR_RATING_GAMUT.indexOf(nextCondition.value.armorRating) : 0,
      gamutEnd = prevCondition.value ? ARMOR_RATING_GAMUT.indexOf(prevCondition.value.armorRating) + 1 : ARMOR_RATING_GAMUT.length

    return ARMOR_RATING_GAMUT.slice(gamutStart, gamutEnd)
  }),
  engineRatingGamut = computed(() => {
    const
      gamutStart = nextCondition.value ? ENGINE_RATING_GAMUT.indexOf(nextCondition.value.engineRating) : 0,
      gamutEnd = prevCondition.value ? ENGINE_RATING_GAMUT.indexOf(prevCondition.value.engineRating) : props.maximumVesselEngineRating

    return ENGINE_RATING_GAMUT.slice(gamutStart, gamutEnd + 1)
  }),
  { hullCheckboxes } = useHullCheckboxes(vesselHullRating, props.label)

  provide('nextCondition', nextCondition)
  provide('prevCondition', prevCondition)
</script>

<template>
  <fieldset v-if="hullCheckboxes">
    <legend>{{ label }}</legend>

    <label>
      Hull Checkboxes
      <input disabled :value="hullCheckboxes">
    </label>

    <label>
      Engine Rating
      <select v-model="condition.engineRating">
        <option v-for="n in engineRatingGamut" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Armor Rating
      <select v-model="condition.armorRating">
        <option v-for="n in armorRatingGamut" :key="n">{{ n }}</option>
      </select>
    </label>

    <fieldset>
      <legend>Firing Arcs</legend>

      <VesselConditionFiringDiagram
        v-for="(firingArcs, key) in condition.firingArcs" :key="key"
        :firingArcs="firingArcs"
        :label="key" />
    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
input {
  width: 1.8rem;
}
</style>
