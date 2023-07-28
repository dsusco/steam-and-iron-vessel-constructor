<script setup>
import { storeToRefs } from 'pinia'

import Vessel from '@/components/Vessel.vue'
import { useVesselsStore } from '@/stores/vessels-store'

const
  vesselsStore = useVesselsStore(),
  { addVessel, removeVessel } = vesselsStore,
  { vessels } = storeToRefs(vesselsStore)
</script>

<template>
  <main>
    <div>
      <button @click="addVessel()">Add Vessel</button>
    </div>
<div v-for="(vessel, id) in vessels" :key="id">
{{vessel}}
</div>
    <Vessel
      v-for="(vessel, id) in vessels" :key="id"
      :id="id"
      v-model:class="vessel.class"
      v-model:type="vessel.type"
      v-model:eccentricities="vessel.eccentricities"
      v-model:batteries="vessel.batteries"
      v-model:hullRating="vessel.hullRating"
      v-model:conditions="vessel.conditions"
      v-model:sizeCheckboxes="vessel.sizeCheckboxes"
      v-model:engineRating="vessel.engineRating"
      v-model:armorRating="vessel.armorRating"
      @remove:vessel="(id) => removeVessel(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
