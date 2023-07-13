<script setup>
import { provide, toRef, toRefs } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import CONDITIONS from '@/constants/conditions'
import ECCENTRICITIES from '@/constants/eccentricities'
import Eccentricity from '@/components/Eccentricity.vue'
import VesselBattery from '@/components/VesselBattery.vue'
import VesselCondition from '@/components/VesselCondition.vue'
import { useClassification } from '@/composables/classification'
import { useDefensiveRating } from '@/composables/defensive-rating'
import { useEccentricities } from '@/composables/eccentricities'
import { useEngineRatingGamut } from '@/composables/engine-rating-gamut'
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
    id: { type: String, required: true },
    class: { type: String, required: true },
    type: { type: String, required: true },
    eccentricities: { type: Array, required: true },
    batteries: { type: Object, required: true },
    hullRating: { type: String, required: true },
    conditions: { type: Object, required: true },
    sizeCheckboxes: { type: String, required: true },
    engineRating: { type: String, required: true },
    armorRating: { type: String, required: true }
  }),
  { classification, isColossal, isSmallCraft } = useClassification(
    toRef(props, 'type')
  ),
  { defensiveRating } = useDefensiveRating(
    toRef(props, 'type'),
    toRef(props, 'hullRating'),
    toRef(props, 'conditions'),
    toRef(props, 'sizeCheckboxes'),
    toRef(props, 'armorRating')
  ),
  { enabledEccentricities, toggleEccentricity } = useEccentricities(
    toRefs(props),
    ECCENTRICITIES.Vessel
  ),
  { smallCraftEngineRatingGamut } = useEngineRatingGamut(
    toRef(props, 'type')
  ),
  { hullCheckboxes } = useHullCheckboxes(
    toRef(props, 'hullRating')
  )

  provide('batteries', toRef(props, 'batteries'))
</script>

<template>
  <fieldset class="vessel">
    <legend>{{ this.class || id }}</legend>

    <label>
      Class
      <input
        :value="class"
        @input="emit('update:class', $event.target.value)">
    </label>

    <label>
      Type
      <select
        :disabled="eccentricities.length"
        :value="type"
        @change="emit('update:type', $event.target.value)">
        <optgroup v-for="(classification, key) in CLASSIFICATIONS" :key="key" :label="key">
          <option v-for="(type, key) in classification" :key="key">{{ key }}</option>
        </optgroup>
      </select>
    </label>

    <button type="button" @click="emit('remove:vessel', id)">×</button>

    <span>DRAT: {{ defensiveRating }}</span>

    <fieldset class="vessel_eccentricities">
      <legend>Eccentricities</legend>

      <Eccentricity
        v-for="(eccentricity, abbr) in ECCENTRICITIES.Vessel" :key="abbr"
        :abbr="abbr"
        :checked="eccentricities.includes(abbr)"
        :disabled="!enabledEccentricities[abbr]"
        :eccentricity="eccentricity"
        @update:eccentricity="(value, checked) => toggleEccentricity(value, checked)" />
    </fieldset>

    <fieldset class="vessel_batteries">
      <legend>Batteries</legend>

      <VesselBattery
        v-for="(battery, key) in batteries" :key="key"
        :label="key"
        v-model:weaponId="battery.weaponId" />
    </fieldset>

    <fieldset class="vessel_conditions" v-if="isColossal">
      <legend>{{ classification }}</legend>

      <label>
        Hull Rating
        <select
          :value="hullRating"
          @change="emit('update:hullRating', $event.target.value)">
          <option v-for="n in HULL_RATING_GAMUT" :key="n">{{ n }}</option>
        </select>
      </label>

      <VesselCondition
        v-for="(condition, key) in conditions" :key="key"
        :label="key"
        :hullCheckboxes="hullCheckboxes[key]"
        :nextCondition="conditions[CONDITIONS[key].nextCondition]"
        :prevCondition="conditions[CONDITIONS[key].prevCondition]"
        :type="type"
        v-model:engineRating="condition.engineRating"
        v-model:armorRating="condition.armorRating"
        v-model:firingArcs="condition.firingArcs" />
    </fieldset>

    <fieldset class="small_craft_values" v-if="isSmallCraft">
      <legend>{{ classification }}</legend>

      <label>
        Size Checkboxes
        <select
          :value="sizeCheckboxes"
          @change="emit('update:sizeCheckboxes', $event.target.value)">
          <option v-for="n in SIZE_CHECKBOXES_GAMUT" :key="n">{{ n }}</option>
        </select>
      </label>

      <label>
        Engine Rating
        <select
          :value="engineRating"
          @change="emit('update:engineRating', $event.target.value)">
          <option v-for="n in smallCraftEngineRatingGamut" :key="n">{{ n }}</option>
        </select>
      </label>

      <label>
        Armor Rating
        <select
          :value="armorRating"
          @change="emit('update:armorRating', $event.target.value)">
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
