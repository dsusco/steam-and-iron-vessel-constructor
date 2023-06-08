<script setup>
import { provide, toRefs } from 'vue'

import ECCENTRICITIES from '@/constants/eccentricities'
import CardBattery from '@/components/CardBattery.vue'
import CardCondition from '@/components/CardCondition.vue'
import { useClassification } from '@/composables/classification'

const
  props = defineProps({
    vessel: { type: Object, required: true }
  }),
  { type, batteries } = toRefs(props.vessel),
  { classification, isColossal, isSmallCraft, isAerovessel } = useClassification(type)

provide('batteries', batteries)
</script>

<template>
  <div class="vessel_card">
    <div class="vessel_information">
      <div class="class">{{ vessel.class }}</div>

      <div class="type">{{ type }}</div>

      <div class="points">0</div>

      <ul class="eccentricies">
        <li v-for="eccentricity in vessel.eccentricities" :key="eccentricity">{{ ECCENTRICITIES.Vessel[eccentricity].name }}</li>
      </ul>
    </div>

    <div class="vessel_batteries">
      <CardBattery
        v-for="(battery, key) in batteries" :key="key"
        :battery="battery"
        :label="key" />
    </div>

    <div class="vessel_conditions" v-if="isColossal">
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
  max-height: 3.75in;
  line-height: calc(4/3);
  overflow: hidden;
  padding: .4rem;
  width: 2.75in;
}

.vessel_information {
  display: grid;
  grid-template-columns: fit-content(3ch) fit-content(3ch) 1fr;
  grid-template-areas:
    'type type class'
    'points eccentricies eccentricies';
  margin-bottom: var(--vessel_card_margin);

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
    padding: 0 var(--vessel_card_padding);
    text-align: center;
  }

  > .eccentricies {
    @include after_border(var(--vessel_card_border_color), 0 .1rem .1rem 0);
    @include _vessel_card_eccentricities_list();

    grid-area: eccentricies;
  }
}

.vessel_batteries,
.vessel_conditions,
.vessel_values {
  @include after_border(var(--vessel_card_border_color), 1.2rem .1rem .1rem 1.2rem);

  margin-bottom: var(--vessel_card_margin);
  padding-top: 1.2rem;
}

.vessel_values {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-template-areas:
    'sizeCheckboxes engineRating armorRating';
  position: relative;
  text-align: center;

  &::after {
    border-left-width: .1rem;
  }

  > * {
    position: relative;

    &::before {
      @include _vessel_card_header_text();

      position: absolute;
      inset: -1.2rem 0 auto;
      z-index: 1;
    }
  }

  > .sizeCheckboxes {
    grid-area: sizeCheckboxes;

    &::before {
      content: 'Size';
    }
  }

  > .engineRating {
    grid-area: engineRating;

    &::before {
      content: 'Engine';
    }
  }

  > .armorRating {
    grid-area: armorRating;

    &::before {
      content: 'Armor';
    }
  }
}

.vessel_record {
  display: flex;
  font-weight: bold;
  justify-content: center;
  line-height: calc(8/3);

  > * {
    &::after {
      border-bottom: .1rem solid var(--vessel_card_border_color);
      content: '';
      display: inline-block;
      margin: 0 .5em;
    }
  }

  > .id {
    &::before {
      content: 'ID'
    }

    &::after {
      width: 8em;
    }
  }

  > .speed {
    &::before {
      content: 'Speed'
    }

    &::after {
      width: 4em;
    }
  }

  > .altitude {
    &::before {
      content: 'Alt.'
    }

    &::after {
      width: 2em;
    }
  }

  > .depth {
    &::before {
      content: 'Depth'
    }

    &::after {
      width: 2em;
    }
  }

  > .fired {
    &::before {
      content: 'Fired □'
    }

    &::after {
      content: none;
    }
  }
}
</style>
