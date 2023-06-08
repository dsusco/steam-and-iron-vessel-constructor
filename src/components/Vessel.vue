<script setup>
import { computed, provide, toRefs } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CONDITIONS from '@/constants/conditions'
import CLASSIFICATIONS from '@/constants/classifications'
import ECCENTRICITIES from '@/constants/eccentricities'
import Eccentricity from '@/components/Eccentricity.vue'
import VesselBattery from '@/components/VesselBattery.vue'
import VesselCondition from '@/components/VesselCondition.vue'
import { useClassification } from '@/composables/classification'

const
  props = defineProps({
    id: { type: String, required: true },
    vessel: { type: Object, required: true }
  }),
  { type, batteries } = toRefs(props.vessel),
  { classification, isColossal, isSmallCraft } = useClassification(type),
  smallCraftEngineRatingGamut = computed(() =>
    ENGINE_RATING_GAMUT.slice(
      0,
      CLASSIFICATIONS[classification.value][type.value].maximumEngineRating + 1))

  provide('batteries', batteries)
</script>

<template>
  <fieldset class="vessel">
    <legend>{{ vessel.class || id }}</legend>

    <label>
      Class
      <input type="text" v-model="vessel.class">
    </label>

    <label>
      Type
      <select :disabled="vessel.eccentricities.length" v-model="type">
        <optgroup v-for="(classification, key) in CLASSIFICATIONS" :label="key">
          <option v-for="(type, key) in classification">{{ key }}</option>
        </optgroup>
      </select>
    </label>

    <button type="button" @click="$emit('removeVessel')">×</button>

    <fieldset class="vessel_eccentricities">
      <legend>Eccentricities</legend>

      <Eccentricity
        v-for="(eccentricity, abbr) in ECCENTRICITIES.Vessel" :key="abbr"
        :abbr="abbr"
        :eccentricity="eccentricity"
        :vessel="vessel" />
    </fieldset>

    <fieldset>
      <legend>Batteries</legend>

      <VesselBattery
        v-for="(battery, key) in batteries" :key="key"
        :battery="battery"
        :label="key" />
    </fieldset>

    <fieldset :hidden="!isColossal">
      <legend>{{ classification }}</legend>

      <label>
        Hull Rating
        <select v-model="vessel.hullRating">
          <option v-for="n in HULL_RATING_GAMUT" :key="n">{{ n }}</option>
        </select>
      </label>

      <VesselCondition
        v-for="(condition, key) in CONDITIONS"
        :condition="vessel.conditions[key]"
        :label="key"
        :maximumVesselEngineRating="CLASSIFICATIONS[classification][type].maximumEngineRating"
        :nextCondition="vessel.conditions[condition.nextCondition]"
        :prevCondition="vessel.conditions[condition.prevCondition]"
        :vesselHullRating="+vessel.hullRating" />
    </fieldset>

    <fieldset :hidden="!isSmallCraft">
      <legend>{{ classification }}</legend>

      <label>
        Size Checkboxes
        <select v-model="vessel.sizeCheckboxes">
          <option v-for="n in SIZE_CHECKBOXES_GAMUT" :key="n">{{ n }}</option>
        </select>
      </label>

      <label>
        Engine Rating
        <select v-model="vessel.engineRating">
          <option v-for="n in smallCraftEngineRatingGamut" :key="n">{{ n }}</option>
        </select>
      </label>

      <label>
        Armor Rating
        <select v-model="vessel.armorRating">
          <option v-for="n in ARMOR_RATING_GAMUT" :key="n">{{ n }}</option>
        </select>
      </label>
    </fieldset>
  </fieldset>
</template>

<style lang="scss" scoped>
.vessel_eccentricities {
  > label {
    padding: 0 1em;
  }
}
</style>
