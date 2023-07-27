<script setup>
import { toRef } from 'vue'

import CardConditionFiringDiagram from '@/components/CardConditionFiringDiagram.vue'
import { useHullCheckboxes } from '@/composables/hull-checkboxes'

const
  props = defineProps({
    condition: { type: Object, required: true },
    label: { type: String, required: true },
    vesselHullRating: { type: Number, required: true }
  }),
  hullCheckboxes = useHullCheckboxes(
    toRef(props, 'vesselHullRating'),
    toRef(props, 'label')
  ).hullCheckboxes.value[props.label]
</script>

<template>
  <div :class="`vessel_condition _${label.toLowerCase()}`" :data-condition="label" v-if="hullCheckboxes">
    <div class="hullCheckboxes">
      <span v-for="n in hullCheckboxes">□ </span>
    </div>

    <div class="engineRating">{{ condition.engineRating }}</div>

    <div class="armorRating">{{ condition.armorRating }}</div>

    <CardConditionFiringDiagram
      v-for="(firingArcs, key) in condition.firingArcs" :key="key"
      :firingArcs="firingArcs"
      :label="key" />
  </div>
</template>

<style lang="scss" scoped>
</style>
