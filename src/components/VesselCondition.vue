<script setup>
import { computed, provide, toRefs } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import VesselConditionFiringDiagram from '@/components/VesselConditionFiringDiagram.vue'
import { useHullCheckboxes } from '@/composables/hull-checkboxes'

const
  emit = defineEmits([
    'remove:vessel',
    'update:class',
    'update:type',
    'update:hullRating',
    'update:sizeCheckboxes',
    'update:engineRating',
    'update:armorRating'
  ]),
  props = defineProps({
    label: { type: String, required: true },
    nextCondition: Object,
    prevCondition: Object,
    engineRating: { type: String, required: true },
    armorRating: { type: String, required: true },
    firingArcs: { type: Object, required: true }
  })
</script>

<template>
  <fieldset v-if="hullCheckboxes">
    <legend>{{ label }}</legend>

    <label>
      Hull Checkboxes
      <input disabled :value="0">
    </label>

    <label>
      Engine Rating
      <select
        :value="engineRating"
        @change="emit('update:engineRating', $event.target.value)">
        <option v-for="n in engineRatingGamut" :key="n">{{ n }}</option>
      </select>
    </label>

    <label>
      Armor Rating
      <select
        :value="armorRating"
        @change="emit('update:armorRating', $event.target.value)">
        <option v-for="n in armorRatingGamut" :key="n">{{ n }}</option>
      </select>
    </label>

    <fieldset>
      <legend>Firing Arcs</legend>


    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
input {
  width: 1.8rem;
}
</style>
