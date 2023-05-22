<script setup>
import { computed, inject } from 'vue'

import FiringArcComp from '@/components/FiringArcComp.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    firingArcs: { type: Object, required: true },
    label: { type: String, required: true }
  }),
  batteries = inject('batteries'),
  weapon = computed(() => useWeaponsStore().weapons[batteries.value[props.label].weapon])
</script>

<template>
  <fieldset v-if="weapon">
    <legend>{{ label }} ({{ weapon.name }})</legend>

    <FiringArcComp
      v-for="arc in ['forward', 'astarboardForward', 'astarboardAft', 'aft', 'aportAft', 'aportForward', 'above', 'below']"
      :battery="label"
      :label="arc"
      :weapons="+firingArcs[arc]"
      :weaponType="weapon.type"
      @update:firing-arc="(weapons) => firingArcs[arc] = weapons" />
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
