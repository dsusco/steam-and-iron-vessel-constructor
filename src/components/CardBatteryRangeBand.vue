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

    <div class="values">
      <span class="rateOfFire">{{ rangeBand.rateOfFire }}</span>×
      <span class="accuracy">{{ rangeBand.accuracy }}</span>/<span class="damage">{{ rangeBand.damage }}</span>
      <span class="penetration" v-if="rangeBand.penetration !== '-'">{{ rangeBand.penetration }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.range_band {
  display: grid;
  grid-template-columns: 7ch 1fr;
  grid-template-areas:
    'range values';

  > .range {
    grid-area: range;
    padding: 0 var(--vessel_card_padding);
    text-align: right;
  }

  > .values {
    grid-area: values;
    padding: 0 var(--vessel_card_padding);
  }

  > .values > .penetration {
    &::before { content: '('; }
    &::after { content: ')'; }
  }

  &._1,
  &._3 {
    background-color: var(--vessel_card_gray);
  }
}
</style>
