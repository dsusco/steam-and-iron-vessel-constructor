<script setup>
import { computed, provide } from 'vue'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, FIRING_ARC_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import BatteryComp from '@/components/BatteryComp.vue'
import ConditionComp from '@/components/ConditionComp.vue'
import FiringArcs from '@/models/firing-arcs'

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
      damaged = ENGINE_RATING_GAMUT.slice(0, Math.min(length, +props.vessel.conditions.ready.engineRating) + 1),
      crippled = ENGINE_RATING_GAMUT.slice(0, Math.min(length, +props.vessel.conditions.damaged.engineRating) + 1)

    return { ready, damaged, crippled }
  }),
  firingArcGamuts = computed(() => {
    const
      ready = {
        a: new FiringArcs(FIRING_ARC_GAMUT),
        b: new FiringArcs(FIRING_ARC_GAMUT),
        c: new FiringArcs(FIRING_ARC_GAMUT)
      },
      damaged = {
        a: new FiringArcs(
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.forward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.astarboardForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.astarboardAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.aft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.aportAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.aportForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.above + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.a.below + 1)
        ),
        b: new FiringArcs(
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.forward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.astarboardForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.astarboardAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.aft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.aportAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.aportForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.above + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.b.below + 1)
        ),
        c: new FiringArcs(
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.forward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.astarboardForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.astarboardAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.aft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.aportAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.aportForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.above + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.ready.firingArcs.c.below + 1)
        )
      },
      crippled = {
        a: new FiringArcs(
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.forward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.astarboardForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.astarboardAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.aft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.aportAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.aportForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.above + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.a.below + 1)
        ),
        b: new FiringArcs(
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.forward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.astarboardForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.astarboardAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.aft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.aportAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.aportForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.above + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.b.below + 1)
        ),
        c: new FiringArcs(
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.forward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.astarboardForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.astarboardAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.aft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.aportAft + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.aportForward + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.above + 1),
          FIRING_ARC_GAMUT.slice(0, +props.vessel.conditions.damaged.firingArcs.c.below + 1)
        )
      }

    return { ready, damaged, crippled }
  }),
  hullCheckboxes = computed(() => {
    const
      ready = Math.ceil(+props.vessel.hullRating / 3),
      damaged = Math.ceil((+props.vessel.hullRating - ready) / 2),
      crippled = +props.vessel.hullRating - ready - damaged

    return { ready, damaged, crippled }
  }),
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
