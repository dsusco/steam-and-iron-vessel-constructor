<script setup>
import { computed } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import BatteryComp from '@/components/BatteryComp.vue'
import ConditionComp from '@/components/ConditionComp.vue'

const
  props = defineProps({
    vessel: { type: Object, required: true }
  }),
  armorRatingGamuts = computed(() => {
    const
      ready = ARMOR_RATING_GAMUT,
      damaged = ARMOR_RATING_GAMUT.slice(0, ARMOR_RATING_GAMUT.indexOf(props.vessel.conditions.ready.armorRating) + 1),
      crippled = ARMOR_RATING_GAMUT.slice(0, ARMOR_RATING_GAMUT.indexOf(props.vessel.conditions.damaged.armorRating) + 1)

    return { ready, damaged, crippled }
  }),
  batteryIf = computed(() => {
    return {
      a: true,
      b: props.vessel.batteries.a.weapon !== '',
      c: props.vessel.batteries.b.weapon !== ''
    }
  }),
  classification = computed(() => Object.keys(CLASSIFICATIONS).find((c) => Object.keys(CLASSIFICATIONS[c]).includes(props.vessel.type))),
  engineRatingGamuts = computed(() => {
    const
      length = CLASSIFICATIONS[classification.value][props.vessel.type].maximumEngineRating,
      ready = ENGINE_RATING_GAMUT.slice(0, length + 1),
      damaged = ENGINE_RATING_GAMUT.slice(0, Math.min(length, props.vessel.conditions.ready.engineRating) + 1),
      crippled = ENGINE_RATING_GAMUT.slice(0, Math.min(length, props.vessel.conditions.damaged.engineRating) + 1)

    return { ready, damaged, crippled }
  }),
  hullCheckboxes = computed(() => {
    const
      ready = Math.ceil(props.vessel.hullRating / 3),
      damaged = Math.ceil((props.vessel.hullRating - ready) / 2),
      crippled = props.vessel.hullRating - ready - damaged

    return { ready, damaged, crippled }
  }),
  isColossal = computed(() => Object.keys(CLASSIFICATIONS.Colossal).includes(props.vessel.type)),
  isSmallCraft = computed(() => Object.keys(CLASSIFICATIONS['Small Craft']).includes(props.vessel.type))
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
        :condition="condition"
        :armorRatingGamut="armorRatingGamuts[key]"
        :engineRatingGamut="engineRatingGamuts[key]"
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
          <option v-for="n in engineRatingGamuts.ready" :key="n">{{ n }}</option>
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
