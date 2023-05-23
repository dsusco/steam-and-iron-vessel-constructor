<script setup>
import { computed, provide } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import BatteryComp from '@/components/BatteryComp.vue'
import ConditionComp from '@/components/ConditionComp.vue'

const
  props = defineProps({
    vessel: { type: Object, required: true }
  }),
  classification = computed(() =>
    Object.keys(CLASSIFICATIONS).find((c) =>
      Object.keys(CLASSIFICATIONS[c]).includes(props.vessel.type))),
  isColossal = computed(() => Object.keys(CLASSIFICATIONS.Colossal).includes(props.vessel.type)),
  isSmallCraft = computed(() => Object.keys(CLASSIFICATIONS['Small Craft']).includes(props.vessel.type)),
  smallCraftEngineRatingGamut = computed(() =>
    ENGINE_RATING_GAMUT.slice(
      0,
      CLASSIFICATIONS[classification.value][props.vessel.type].maximumEngineRating + 1))

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
        :condition="vessel.conditions.ready"
        :label="'ready'"
        :maximumVesselEngineRating="CLASSIFICATIONS[classification][vessel.type].maximumEngineRating"
        :nextCondition="vessel.conditions.damaged"
        :vesselHullRating="+vessel.hullRating" />

      <ConditionComp
        :condition="vessel.conditions.damaged"
        :label="'damaged'"
        :maximumVesselEngineRating="CLASSIFICATIONS[classification][vessel.type].maximumEngineRating"
        :nextCondition="vessel.conditions.crippled"
        :prevCondition="vessel.conditions.ready"
        :vesselHullRating="+vessel.hullRating"  />

      <ConditionComp
        :condition="vessel.conditions.crippled"
        :label="'crippled'"
        :maximumVesselEngineRating="CLASSIFICATIONS[classification][vessel.type].maximumEngineRating"
        :prevCondition="vessel.conditions.damaged"
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
</style>
