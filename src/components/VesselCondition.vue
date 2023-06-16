<script setup>
import { provide, toRef } from 'vue'

import VesselConditionFiringDiagram from '@/components/VesselConditionFiringDiagram.vue'
import { useArmorRatingGamut } from '@/composables/armor-rating-gamut'
import { useEngineRatingGamut } from '@/composables/engine-rating-gamut'

const
  emit = defineEmits([
    'update:engineRating',
    'update:armorRating'
  ]),
  props = defineProps({
    label: { type: String, required: true },
    hullCheckboxes: { type: Number, required: true },
    nextCondition: Object,
    prevCondition: Object,
    type: { type: String, required: true },
    engineRating: { type: String, required: true },
    armorRating: { type: String, required: true },
    firingArcs: { type: Object, required: true }
  }),
  { armorRatingGamut } = useArmorRatingGamut(
    toRef(props, 'nextCondition'),
    toRef(props, 'prevCondition')
  ),
  { engineRatingGamut } = useEngineRatingGamut(
    toRef(props, 'type'),
    toRef(props, 'nextCondition'),
    toRef(props, 'prevCondition')
  )

  provide('nextCondition', toRef(props, 'nextCondition'))
  provide('prevCondition', toRef(props, 'prevCondition'))
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

      <VesselConditionFiringDiagram
        v-for="(firingArcs, key) in firingArcs" :key="key"
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
