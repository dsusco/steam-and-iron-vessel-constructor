<script setup>
import { computed, provide } from 'vue'

import CardConditionFiringDiagram from '@/components/CardConditionFiringDiagram.vue'

const
  props = defineProps({
    condition: { type: Object, required: true },
    label: { type: String, required: true },
    vesselHullRating: { type: Number, required: true }
  }),
  hullCheckboxes = computed(() => {
    const
      ready = Math.ceil(props.vesselHullRating / 3),
      damaged = Math.ceil((props.vesselHullRating - ready) / 2),
      crippled = props.vesselHullRating - ready - damaged

    return eval(props.label)
  })
</script>

<template>
  <div :class="`vessel_condition _${label}`" :data-condition="label" v-if="hullCheckboxes">
    <div class="hullCheckboxes">
      <span v-for="n in hullCheckboxes">□ </span>
    </div>

    <div class="engineRating">{{ condition.engineRating }}</div>

    <div class="armorRating">{{ condition.armorRating }}</div>

    <CardConditionFiringDiagram
      v-for="(firingArcs, key) in condition.firingArcs" :key="key"
      :firingArcs="firingArcs"
      :label="key" />
  </div>
</template>

<style lang="scss" scoped>
.vessel_condition {
  display: grid;
  grid-template-columns: 4ch 2ch 3ch repeat(3, 3fr);
  grid-template-rows: 5.4rem;
  grid-template-areas:
    'hullCheckboxes engineRating armorRating firing_diagram_a firing_diagram_b firing_diagram_c';
  padding-left: 1.2rem;
  position: relative;
  text-align: center;

  &._ready {
    > * {
      position: relative;

      &::before {
        @include _vessel_card_header_text();

        position: absolute;
        inset: -1.2rem 0 auto;
        z-index: 1;
      }
    }

    > .hullCheckboxes::before {
      content: 'H';
    }
    > .engineRating::before {
      content: 'E';
    }
    > .armorRating::before {
      content: 'A';
    }
    > .firing_diagram::before {
      content: 'Battery ' attr(data-battery);
    }
  }

  &._damaged {
    background-color: var(--vessel_card_gray);
  }

  &::before {
    @include position(absolute, 0 auto 0 0);
    @include _vessel_card_header_text();

    content: attr(data-condition);
    text-orientation: mixed;
    writing-mode: vertical-rl;
    line-height: .8rem;
    z-index: 1;
  }

  > * {
    padding: 0 var(--vessel_card_padding);
  }

  > .hullCheckboxes {
    grid-area: hullCheckboxes;
  }

  > .engineRating {
    grid-area: engineRating;
  }

  > .armorRating {
    grid-area: armorRating;
  }
}
</style>
