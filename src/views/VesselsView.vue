<script setup>
import { ref } from 'vue'

import VesselComp from '@/components/VesselComp.vue'
import { useVesselsStore } from '@/stores/vessels-store'

const
  activeVessel = ref(''),
  vesselsStore = useVesselsStore()

function setActiveVessel (vesselId) {
  if (Object.keys(vesselsStore.vessels).includes(vesselId)) {
    activeVessel.value = vesselId
  }
}

function addVessel () {
  const vesselId = vesselsStore.addVessel()
  setActiveVessel(vesselId)
}

function removeVessel (id) {
  vesselsStore.removeVessel(id)

  if (activeVessel.value === id) {
    setActiveVessel(Object.keys(vesselsStore.vessels)[0])
  }
}
</script>

<template>
  <main>
    <div>
      <button @click="addVessel()">Add Vessel</button>
    </div>

    <VesselComp
      :class="{ active: id === activeVessel }"
      @click="setActiveVessel(id)"
      v-for="(vessel, id) in vesselsStore.vessels" :key="id"
      :id="id"
      :vessel="vessel"
      @remove-vessel="removeVessel(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
