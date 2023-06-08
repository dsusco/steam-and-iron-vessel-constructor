<script setup>
import { computed, inject } from 'vue'

import WEAPON_TYPES from '@/constants/weapon-types'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    firingArcs: { type: Object, required: true },
    label: { type: String, required: true }
  }),
  batteries = inject('batteries'),
  weapon = computed(() => useWeaponsStore().weapons[batteries.value[props.label].weapon]),
  weaponType = computed(() => {
    try {
      return weapon.value.type.toLowerCase().split(/\s/).join('_')
    } catch (e) {
      return null
    }
  })
</script>

<template>
  <div :class="`firing_diagram _${label} _${weaponType}`" :data-battery="label" v-if="weapon">
    <span :class="`arc _${arc}`" v-for="arc in WEAPON_TYPES[weapon.type].firingArcs">{{firingArcs[arc]}}</span>
  </div>
</template>

<style lang="scss" scoped>
.firing_diagram {
  height: 4.8rem;
  position: relative;

  &._guns {
    background: url('gun_arc_diagram.png') center no-repeat;
  }

  &._released_munitions {
    background: url('released_munitions_arc_diagram.png') center no-repeat;
  }

  > .arc {
    position: absolute;
    inset: 0;

    &._forward,
    &._above {
      bottom: auto;
    }

    &._astarboardForward {
      inset: 1rem 1.8rem auto auto;
    }

    &._astarboardAft {
      inset: auto 1.8rem 1rem auto;
    }

    &._aft,
    &._below {
      top: auto;
    }

    &._aportAft {
      inset: auto auto 1rem 1.8rem;
    }

    &._aportForward {
      inset: 1rem auto auto 1.8rem;
    }
  }
}
</style>
