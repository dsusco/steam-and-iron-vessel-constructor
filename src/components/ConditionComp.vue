<script setup>
import FiringArcsComp from '@/components/FiringArcsComp.vue'

const
  props = defineProps({
    armorRatingGamut: { type: Array, required: true },
    condition: { type: Object, required: true },
    engineRatingGamut: { type: Array, required: true },
    firingArcGamuts: { type: Object, required: true },
    hullCheckboxes: { type: Number, required: true },
    label: { type: String, required: true }
  })
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

      <FiringArcsComp
        v-for="(firingArcs, key) in condition.firingArcs" :key="key"
        :firingArcs="firingArcs"
        :firingArcGamut="firingArcGamuts[key]"
        :label="key" />
    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
input {
  width: 1.8rem;
}
</style>
