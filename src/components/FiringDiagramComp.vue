<script setup>
import { computed, inject } from 'vue'

import WEAPON_TYPES from '@/constants/weapon-types'
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
  <fieldset class="firing_diagram" v-if="weapon">
    <legend>{{ label }} ({{ weapon.name }})</legend>

    <FiringArcComp
      v-for="arc in WEAPON_TYPES[weapon.type].firingArcs"
      :battery="label"
      :label="arc"
      :weapons="firingArcs[arc]"
      @update:firing-arc="(weapons) => firingArcs[arc] = weapons" />
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
