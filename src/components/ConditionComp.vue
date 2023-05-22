<script setup>
import { computed, provide } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import FiringDiagramComp from '@/components/FiringDiagramComp.vue'

const
  props = defineProps({
    condition: { type: Object, required: true },
    label: { type: String, required: true },
    maximumVesselEngineRating: { type: Number, required: true },
    nextCondition: Object,
    prevCondition: Object,
    vesselHullRating: { type: Number, required: true }
  }),
  armorRatingGamut = computed(() => {
    const
      gamutStart = props.nextCondition ? ARMOR_RATING_GAMUT.indexOf(props.nextCondition.armorRating) : 0,
      gamutEnd = props.prevCondition ? ARMOR_RATING_GAMUT.indexOf(props.prevCondition.armorRating) + 1 : ARMOR_RATING_GAMUT.length

    return ARMOR_RATING_GAMUT.slice(gamutStart, gamutEnd)
  }),
  engineRatingGamut = computed(() => {
    const
      gamutStart = props.nextCondition ? +props.nextCondition.engineRating : 0,
      gamutEnd = props.prevCondition ? +props.prevCondition.engineRating : props.maximumVesselEngineRating

    return ENGINE_RATING_GAMUT.slice(gamutStart, gamutEnd + 1)
  }),
  hullCheckboxes = computed(() => {
    const
      ready = Math.ceil(props.vesselHullRating / 3),
      damaged = Math.ceil((props.vesselHullRating - ready) / 2),
      crippled = props.vesselHullRating - ready - damaged

    return eval(props.label)
  })

  provide('nextCondition', computed(() => props.nextCondition))
  provide('prevCondition', computed(() => props.prevCondition))
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

      <FiringDiagramComp
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
