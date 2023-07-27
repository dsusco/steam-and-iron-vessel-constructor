<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import ECCENTRICITIES from '@/constants/eccentricities'
import CardBatteryRangeBand from '@/components/CardBatteryRangeBand.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  props = defineProps({
    label: { type: String, required: true },
    weaponId: { type: String }
  }),
  { weapons } = storeToRefs(useWeaponsStore()),
  weapon = computed(() => weapons.value[props.weaponId])
</script>

<template>
  <div
    :class="`vessel_battery _${label.toLowerCase()}`"
    :data-battery="label"
    v-if="weapon">
    <div class="name">{{ weapon.name }}</div>

    <div class="rangeBands">
      <CardBatteryRangeBand
        v-for="(rangeBand, index) in weapon.rangeBands" :key="index"
        :index="index"
        :rangeBand="rangeBand" />
    </div>

    <ul class="eccentricies">
      <li v-for="eccentricity in weapon.eccentricities" :key="eccentricity">{{ ECCENTRICITIES.Weapon[eccentricity].name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vessel_battery {
  @include after_border(var(--vessel_card_border_color));

  padding-top: 1.2rem;
  position: realtive;

  &::before {
    @include _vessel_card_header_text();

    content: 'Battery ' attr(data-battery);
    padding: 0 var(--vessel_card_padding);
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  & ~ &::after {
    border-left-width: 0;
  }

  > .name,
  > .eccentricies {
    padding: 0 var(--vessel_card_padding);
  }

  > .rangeBands {
    min-height: 3.6rem;
  }

  > .rangeBands,
  > .eccentricies {
    @include after_border(var(--vessel_card_border_color), .1rem 0 0);
  }

  > .eccentricies {
    @include _vessel_card_eccentricities_list();

    margin-bottom: 0;
  }
}
</style>
