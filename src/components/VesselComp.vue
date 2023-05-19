<script setup>
import { computed, provide } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, FIRING_ARC_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import BatteryComp from '@/components/BatteryComp.vue'
import ConditionComp from '@/components/ConditionComp.vue'
import { useArmorRatingGamuts, useBatteryIf, useClassification, useEngineRatingGamuts, useFiringArcGamuts, useHullCheckboxes } from '@/composables/vessel-certifier'
import FiringArcs from '@/models/firing-arcs'

const
  props = defineProps({
    vessel: { type: Object, required: true }
  }),
  armorRatingGamuts = computed(() => useArmorRatingGamuts(props.vessel)),
  batteryIf = computed(() => useBatteryIf(props.vessel)),
  classification = computed(() => useClassification(props.vessel)),
  engineRatingGamuts = computed(() => useEngineRatingGamuts(props.vessel)),
  firingArcGamuts = computed(() => useFiringArcGamuts(props.vessel)),
  hullCheckboxes = computed(() => useHullCheckboxes(props.vessel)),
  isColossal = computed(() => Object.keys(CLASSIFICATIONS.Colossal).includes(props.vessel.type)),
  isSmallCraft = computed(() => Object.keys(CLASSIFICATIONS['Small Craft']).includes(props.vessel.type))

  provide('batteries', computed(() => props.vessel.batteries))
</script>

<template>
  <fieldset>
    <legend>{{ vessel.class }}</legend>

    <label>
      Class
      <input type="text" v-model="vessel.class">
    </label>

    <label>
      Type
      <select v-model="vessel.type">
        <optgroup v-for="(classification, key) in CLASSIFICATIONS" :label="key">
          <option v-for="(type, key) in classification">{{ key }}</option>
        </optgroup>
      </select>
    </label>

    <button type="button" @click="$emit('removeVessel')">×</button>

    <fieldset>
      <legend>Batteries</legend>

      <BatteryComp
        v-for="(battery, key) in vessel.batteries" :key="key"
        :battery="battery"
        :if="batteryIf[key]"
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

      <ConditionComp
        v-for="(condition, key) in vessel.conditions" :key="key"
        :armorRatingGamut="armorRatingGamuts[key]"
        :condition="condition"
        :engineRatingGamut="engineRatingGamuts[key]"
        :firingArcGamuts="firingArcGamuts[key]"
        :hullCheckboxes="hullCheckboxes[key]"
        :label="key" />
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
          <option v-for="n in engineRatingGamuts.smallCraft" :key="n">{{ n }}</option>
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
</style>
