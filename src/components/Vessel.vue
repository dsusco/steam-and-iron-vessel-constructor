<script setup>
import { provide, toRef, toRefs } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import CONDITIONS from '@/constants/conditions'
import ECCENTRICITIES from '@/constants/eccentricities'
import Eccentricity from '@/components/Eccentricity.vue'
import VesselBattery from '@/components/VesselBattery.vue'
import VesselCondition from '@/components/VesselCondition.vue'
import { useEccentricities } from '@/composables/eccentricities'
import { useClassification } from '@/composables/classification'

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
  { enabledEccentricities, toggleEccentricity } = useEccentricities(
    toRefs(props),
    ECCENTRICITIES.Vessel
  ),
  smallCraftEngineRatingGamut = [1]
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
        <optgroup v-for="(classification, key) in CLASSIFICATIONS" :label="key">
          <option v-for="(type, key) in classification">{{ key }}</option>
        </optgroup>
      </select>
    </label>

    <button type="button" @click="emit('remove:vessel', id)">×</button>

    <fieldset class="vessel_eccentricities">
      <legend>Eccentricities</legend>

      <Eccentricity
        v-for="(eccentricity, abbr) in ECCENTRICITIES.Weapon" :key="abbr"
        :abbr="abbr"
        :checked="eccentricities.includes(abbr)"
        :disabled="!enabledEccentricities[abbr]"
        :eccentricity="eccentricity"
        @update:eccentricity="(value, checked) => toggleEccentricity(value, checked)" />
    </fieldset>

    <fieldset>
      <legend>Batteries</legend>

      <VesselBattery
        v-for="(battery, key) in batteries" :key="key"
        :label="key"
        v-model:weaponId="battery.weaponId" />
    </fieldset>

    <fieldset :hidden="!isColossal">
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
        v-for="(condition, key) in conditions"
        :label="key"
        :nextCondition="CONDITIONS[key].nextCondition"
        :prevCondition="CONDITIONS[key].prevCondition"
        v-model:engineRating="conditions.engineRating"
        v-model:armorRating="conditions.armorRating"
        v-model:firingArcs="conditions.firingArcs" />
    </fieldset>

    <fieldset :hidden="!isSmallCraft">
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
