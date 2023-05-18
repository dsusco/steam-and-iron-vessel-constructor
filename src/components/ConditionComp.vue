<script setup>
const
  props = defineProps({
    condition: { type: Object, required: true },
    armorRatingGamut: { type: Array, required: true },
    engineRatingGamut: { type: Array, required: true },
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
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
