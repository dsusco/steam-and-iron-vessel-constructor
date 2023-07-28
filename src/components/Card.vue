<script setup>
import { computed, provide, toRef, toRefs } from 'vue'

import ECCENTRICITIES from '@/constants/eccentricities'
import CardBattery from '@/components/CardBattery.vue'
import CardCondition from '@/components/CardCondition.vue'
import { useClassification } from '@/composables/classification'
import { useDefensiveRating } from '@/composables/defensive-rating'
import { useOffensiveRating } from '@/composables/offensive-rating'

const
  props = defineProps({
    vessel: { type: Object, required: true }
  }),
  { classification, isColossal, isSmallCraft, isAerovessel } = useClassification(
    toRef(props.vessel, 'type')
  ),
  { defensiveRating } = useDefensiveRating(
    toRef(props.vessel, 'type'),
    toRef(props.vessel, 'hullRating'),
    toRef(props.vessel, 'conditions'),
    toRef(props.vessel, 'sizeCheckboxes'),
    toRef(props.vessel, 'armorRating'),
    toRef(props.vessel, 'eccentricities')
  ),
  { offensiveRating } = useOffensiveRating(
    toRef(props.vessel, 'hullRating'),
    toRef(props.vessel, 'batteries'),
    toRef(props.vessel, 'conditions')
  ),
  combatRating = computed(() => Math.round(Math.sqrt(offensiveRating.value * defensiveRating.value)))

provide('batteries', toRef(props.vessel, 'batteries'))
</script>

<template>
  <div class="vessel_card">
    <div class="vessel_information">
      <div class="class">{{ vessel.klass }}</div>

      <div class="type">{{ vessel.type }}</div>

      <div class="points">{{ combatRating }}</div>

      <ul class="eccentricies">
        <li v-for="eccentricity in vessel.eccentricities" :key="eccentricity">{{ ECCENTRICITIES.Vessel[eccentricity].name }}</li>
      </ul>
    </div>

    <div class="vessel_batteries">
      <CardBattery
        v-for="(battery, label) in vessel.batteries" :key="label"
        :label="label"
        :weaponId="battery.weaponId" />
    </div>

    <div class="vessel_conditions" v-if="isColossal">
      <div class="vessel_condition _header">
        <div class="hullCheckboxes">H</div>
        <div class="engineRating">E</div>
        <div class="armorRating">A</div>
        <div class="firing_diagram">Battery A</div>
        <div class="firing_diagram">Battery B</div>
        <div class="firing_diagram">Battery C</div>
      </div>
      <CardCondition
        v-for="(condition, key) in vessel.conditions" :key="key"
        :condition="condition"
        :label="key"
        :vesselHullRating="+vessel.hullRating" />
    </div>

    <div class="vessel_values" v-if="isSmallCraft">
      <div class="sizeCheckboxes">
        <span v-for="n in +vessel.sizeCheckboxes">□ </span>
      </div>
      <div class="engineRating">{{ vessel.engineRating }}</div>
      <div class="armorRating">{{ vessel.armorRating }}</div>
    </div>

    <div class="vessel_record">
      <div class="id"></div>
      <div class="speed"></div>
      <div class="altitude" v-if="isAerovessel"></div>
      <div class="depth" v-if="vessel.eccentricities.includes('Sub')"></div>
      <div class="fired"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vessel_card {
  @include after_border(var(--vessel_card_border_color));

  background: var(--vessel_card_background);
  color: var(--vessel_card_color);
  font-size: .9rem;
  height: 3.9375in;
  line-height: calc(12/9);
  overflow: hidden;
  padding: var(--vessel_card_padding);
  width: 2.9375in;
}

.vessel_information {
  display: grid;
  grid-template-columns: fit-content(3ch) fit-content(3ch) 1fr;
  grid-template-areas:
    'type type class'
    'points eccentricies eccentricies';
  margin-bottom: var(--vessel_card_margin);

  > .class,
  > .type,
  > .points,
  > .eccentricies {
    padding: 0 var(--vessel_card_padding);
  }

  > .class,
  > .type {
    @include _vessel_card_header_text();
  }

  > .class {
    grid-area: class;
    text-align: right;
  }

  > .type {
    grid-area: type;
  }

  > .points {
    @include after_border(var(--vessel_card_border_color), 0 .1rem .1rem);

    grid-area: points;
    text-align: center;
  }

  > .eccentricies {
    @include after_border(var(--vessel_card_border_color), 0 .1rem .1rem 0);
    @include _vessel_card_eccentricities_list();

    grid-area: eccentricies;
    margin-bottom: 0;
  }
}

.vessel_batteries {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  margin-bottom: var(--vessel_card_margin);
}

.vessel_conditions {
  margin-bottom: var(--vessel_card_margin);
}

.vessel_values {
  @include after_border(var(--vessel_card_border_color), .1rem);

  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-template-areas:
    'sizeCheckboxes engineRating armorRating';
  margin-bottom: var(--vessel_card_margin);
  padding-top: 1.2rem;
  text-align: center;

  > .sizeCheckboxes,
  > .engineRating,
  > .armorRating {
    position: relative;

    &::before {
      @include position(absolute, -1.2rem 0 auto);
      @include _vessel_card_header_text();

      z-index: 1;
    }
  }

  > .sizeCheckboxes {
    grid-area: sizeCheckboxes;

    &::before { content: 'Size'; }
  }

  > .engineRating {
    grid-area: engineRating;

    &::before { content: 'Engine'; }
  }

  > .armorRating {
    grid-area: armorRating;

    &::before { content: 'Armor'; }
  }
}

.vessel_record {
  display: flex;
  font-weight: bold;
  justify-content: center;

  > .id,
  > .speed,
  > .altitude,
  > .depth,
  > .fired {
    &::after {
      border-bottom: .1rem solid var(--vessel_card_border_color);
      content: '';
      display: inline-block;
      margin: 0 .5em;
    }
  }

  > .id {
    &::before { content: 'ID' }

    &::after { width: 8em; }
  }

  > .speed {
    &::before { content: 'Speed' }

    &::after { width: 4em; }
  }

  > .altitude {
    &::before { content: 'Alt.' }

    &::after { width: 2em; }
  }

  > .depth {
    &::before { content: 'Depth' }

    &::after { width: 2em; }
  }

  > .fired {
    &::before { content: 'Fired □' }

    &::after { content: none; }
  }
}
</style>
