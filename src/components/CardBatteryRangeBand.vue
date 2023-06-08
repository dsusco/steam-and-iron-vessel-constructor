<script setup>
import { computed } from 'vue'

const
  props = defineProps({
    index: { type: Number, required: true },
    rangeBand: { type: Object, required: true }
  }),
  range = computed(() => {
    if (props.rangeBand.minimumRange === props.rangeBand.maximumRange) {
      return props.rangeBand.minimumRange
    }

    return `${props.rangeBand.minimumRange}–${props.rangeBand.maximumRange}`
  })
</script>

<template>
  <div :class="`range_band _${index+1}`">
    <div class="range">{{ range }}</div>

    <div class="rateOfFire">{{ rangeBand.rateOfFire }}</div>

    <div class="accuracy">{{ rangeBand.accuracy }}</div>

    <div class="damage">{{ rangeBand.damage }}</div>

    <div class="penetration">{{ rangeBand.penetration }}</div>
  </div>
</template>

<style lang="scss" scoped>
.range_band {
  @include after_border(var(--vessel_card_gray), 0 0 0 .1rem);

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-areas:
    'range range range range'
    'rateOfFire accuracy damage penetration';
  text-align: center;

  &._1 {
    grid-area: range_band_1;
  }

  &._2 {
    grid-area: range_band_2;
  }

  &._3 {
    grid-area: range_band_3;
  }

  &:last-of-type:not(._3)::after {
    border-right-width: .1rem;
  }

  > * {
    padding: 0 var(--vessel_card_padding);
  }

  > .range {
    @include after_border(var(--vessel_card_gray), 0 0 .1rem);
    grid-area: range;
  }

  > .rateOfFire {
    grid-area: rateOfFire;
  }

  > .accuracy {
    background-color: var(--vessel_card_gray);
    grid-area: accuracy;
  }

  > .damage {
    grid-area: damage;
  }

  > .penetration {
    background-color: var(--vessel_card_gray);
    grid-area: penetration;
  }
}
</style>
