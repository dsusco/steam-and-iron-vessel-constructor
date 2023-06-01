<script setup>
import { computed } from 'vue'

import ECCENTRICITIES from '@/constants/eccentricities'
import VesselCardRangeBandComp from '@/components/VesselCardRangeBandComp.vue'
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
  <div :class="`vessel_battery _${label}`" :data-battery="label" v-if="weapon">
    <div class="name">{{ weapon.name }}</div>

    <VesselCardRangeBandComp
      v-for="(rangeBand, index) in weapon.rangeBands" :key="index"
      :index="index"
      :rangeBand="rangeBand" />

    <ul class="eccentricies">
      <li v-for="eccentricity in weapon.eccentricities" :key="eccentricity">{{ ECCENTRICITIES.Weapon[eccentricity].name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vessel_battery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'name range_band_1 range_band_2 range_band_3'
    'eccentricies eccentricies eccentricies eccentricies';
  padding-left: 1.2rem;
  position: relative;

  &:first-child {
    > *::before {
      @include _vessel_card_header_text();

      position: absolute;
      inset: -1.2rem 0 auto;
      z-index: 1;
    }

    > .name::before {
      content: 'Weapon';
      left: 1.2rem;
    }

    > .range_band._1::before {
      content: 'Range Bands';
      right: auto;
      width: 300%;
    }
  }

  &:not(:first-child) {
    @include after_border(var(--vessel_card_border_color), .1rem 0 0);
  }

  &::before {
    @include position(absolute, calc(50% - .6rem) auto auto 0);
    @include _vessel_card_header_text();

    content: attr(data-battery);
    z-index: 1;
  }

  > .name {
    grid-area: name;
    padding: 0 var(--vessel_card_padding);
    overflow: hidden;
    max-height: 2.4rem;
  }

  > .eccentricies {
    @include _vessel_card_eccentricities_list();

    grid-area: eccentricies;

    &:not(:empty) {
      @include after_border(var(--vessel_card_gray), .1rem 0 0);
    }
  }
}
</style>
