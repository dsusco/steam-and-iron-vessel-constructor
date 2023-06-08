<script setup>
import { reactive, ref } from 'vue'

import Card from '@/components/Card.vue'
import { useVesselsStore } from '@/stores/vessels-store'

const
  selectedVessel = ref(''),
  cards = reactive([]),
  vesselsStore = useVesselsStore()

function addCard () {
  cards.push(selectedVessel.value)
}

function removeCard (index) {
  cards.splice(+index, 1)
}
</script>

<template>
  <main>
    <select class="_print_hidden" v-model="selectedVessel">
      <option v-for="(vessel, id) in vesselsStore.vessels" :key="id" :value="id">{{ vessel.class || id }}</option>
    </select>

    <button class="_print_hidden" @click="addCard()">Add Card</button>

    <div class="vessel_cards">
      <Card
        v-for="(vesselId, index) in cards" :key="vesselId"
        :vessel="vesselsStore.vessels[vesselId]"
        @click="removeCard(index)" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.vessel_cards {
  display: flex;
  flex-wrap: wrap;
  gap: .1875in;
  width: 11in;
}
</style>
