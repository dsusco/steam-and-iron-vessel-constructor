<script setup>
import VesselCardComp from '@/components/VesselCardComp.vue'
import { useVesselsStore } from '@/stores/vessels-store'

const vesselsStore = useVesselsStore()
</script>

<template>
  <main>
    <VesselCardComp
      v-for="(vessel, id) in vesselsStore.vessels" :key="id"
      :vessel="vessel" />
  </main>
</template>

<style lang="scss" scoped>
</style>
