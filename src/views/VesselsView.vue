<script setup>
import Vessel from '@/components/Vessel.vue'
import { useVesselsStore } from '@/stores/vessels-store'

const
  vesselsStore = useVesselsStore()
</script>

<template>
  <main>
    <div>
      <button @click="vesselsStore.addVessel()">Add Vessel</button>
    </div>

    <Vessel
      v-for="(vessel, id) in vesselsStore.vessels" :key="id"
      :id="id"
      :vessel="vessel"
      @remove-vessel="vesselsStore.removeVessel(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
