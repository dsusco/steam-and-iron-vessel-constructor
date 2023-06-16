<script setup>
import { computed, inject } from 'vue'

import WEAPON_TYPES from '@/constants/weapon-types'
import VesselConditionFiringDiagramArc from '@/components/VesselConditionFiringDiagramArc.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    firingArcs: { type: Object, required: true },
    label: { type: String, required: true }
  }),
  weapon = computed(() => useWeaponsStore().weapons[inject('batteries').value[props.label].weaponId])
</script>

<template>
  <fieldset class="firing_diagram" v-if="weapon">
    <legend>{{ label }} ({{ weapon.name }})</legend>

    <VesselConditionFiringDiagramArc
      v-for="arc in WEAPON_TYPES[weapon.type].firingArcs" :key="arc"
      :battery="label"
      :label="arc"
      v-model:weapons="firingArcs[arc]" />
  </fieldset>
</template>

<style lang="scss" scoped>
.firing_diagram {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-template-areas:
    'forward forward forward'
    'aportForward _ astarboardForward'
    'aportAft _ astarboardAft'
    'aft aft aft';

  > .arc {
    &._forward,
    &._above {
      grid-area: forward;
      text-align: center;
    }
    &._astarboardForward {
      grid-area: astarboardForward;
    }
    &._astarboardAft {
      grid-area: astarboardAft;
    }
    &._aft,
    &._below {
      grid-area: aft;
      text-align: center;
    }
    &._aportAft {
      grid-area: aportAft;
    }
    &._aportForward {
      grid-area: aportForward;
    }
  }
}
</style>
