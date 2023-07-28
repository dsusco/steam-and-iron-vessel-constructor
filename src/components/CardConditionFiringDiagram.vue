<script setup>
import { storeToRefs } from 'pinia'
import { computed, inject, toRef } from 'vue'

import WEAPON_TYPES from '@/constants/weapon-types'
import { useVariantName } from '@/composables/variant-name'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    firingArcs: { type: Object, required: true },
    label: { type: String, required: true }
  }),
  batteries = inject('batteries'),
  { weapons } = storeToRefs(useWeaponsStore()),
  weapon = computed(() => weapons.value[batteries.value[props.label].weaponId]),
  weaponType = computed(() => useVariantName(weapon.value.type).variantName.value)
</script>

<template>
  <div :class="`firing_diagram _${label.toLowerCase()} ${weaponType}`" :data-battery="label" v-if="weapon">
    <span
      :class="`arc ${useVariantName(arc).variantName.value}`"
      v-for="arc in WEAPON_TYPES[weapon.type].firingArcs">{{firingArcs[arc]}}</span>
  </div>
</template>

<style lang="scss" scoped>
.firing_diagram {
  height: 4.8rem;
  position: relative;

  &._guns {
    background: url('https://dsusco.github.io/steam-and-iron-vessel-constructor/gun_arc_diagram.png') center no-repeat;
  }

  &._releasedMunitions {
    background: url('https://dsusco.github.io/steam-and-iron-vessel-constructor/released_munitions_arc_diagram.png') center no-repeat;
  }

  > .arc {
    position: absolute;
    inset: 0;

    &._forward,
    &._above {
      top: .2rem;
      bottom: auto;
    }

    &._astarboardForward {
      inset: .9rem 1.9rem auto auto;
    }

    &._astarboardAft {
      inset: auto 1.9rem .9rem auto;
    }

    &._aft,
    &._below {
      top: auto;
      bottom: .1rem;
    }

    &._aportAft {
      inset: auto auto .9rem 1.9rem;
    }

    &._aportForward {
      inset: .9rem auto auto 1.9rem;
    }
  }
}
</style>
