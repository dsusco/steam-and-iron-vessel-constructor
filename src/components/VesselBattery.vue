<script setup>
import { computed } from 'vue'

import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    battery: { type: Object, required: true },
    label: { type: String, required: true }
  }),
  weaponsStore = useWeaponsStore(),
  weapon = computed(() => weaponsStore.weapons[props.battery.weapon])
</script>

<template>
  <fieldset>
    <legend>{{ label }}</legend>

    <label>
      Weapon
      <select v-model="battery.weapon">
        <option value=""></option>
        <option v-for="(weapon, key) in weaponsStore.weapons" :value="key">{{ weapon.name || key }}</option>
      </select>
    </label>

    <div v-if="weapon">
      {{ weapon.name }} ({{ weapon.type }})
      <div>
        <span v-for="(eccentricity, index) in weapon.eccentricities" :key="index">
          {{ eccentricity }}
        </span>
      </div>
      <div v-for="(rangeBand, index) in weapon.rangeBands" :key="index">
        {{ rangeBand.minimumRange }}–{{ rangeBand.maximumRange }}:
        {{ rangeBand.rateOfFire }}@{{ rangeBand.accuracy }}/{{ rangeBand.damage }}({{ rangeBand.penetration }})
      </div>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
