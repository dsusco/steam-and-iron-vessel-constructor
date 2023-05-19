<script setup>
import { computed, inject } from 'vue'

import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    firingArcs: { type: Object, required: true },
    firingArcGamut: { type: Object, required: true },
    label: { type: String, required: true }
  }),
  weapon = computed(() => useWeaponsStore().weapons[inject('batteries').value[props.label].weapon]),
  isGuns = computed(() => weapon.value.type === 'Guns'),
  isReleasedMunitions = computed(() => weapon.value.type === 'Released Munitions')
</script>

<template>
  <fieldset v-if="weapon">
    <legend>{{ label }} ({{ weapon.name }})</legend>

    <label
      v-if="isGuns"
      v-for="arc in ['forward', 'astarboardForward', 'astarboardAft', 'aft', 'aportAft', 'aportForward']">
      {{ arc }}
      <select v-model="firingArcs[arc]">
        <option v-for="n in firingArcGamut[arc]" :key="n">{{ n }}</option>
      </select>
    </label>

    <label
      v-if="isReleasedMunitions"
      v-for="arc in ['above', 'below']">
      {{ arc }}
      <select v-model="firingArcs[arc]">
        <option v-for="n in firingArcGamut[arc]" :key="n">{{ n }}</option>
      </select>
    </label>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
