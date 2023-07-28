<script setup>
import { storeToRefs } from 'pinia'

import Weapon from '@/components/Weapon.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  weaponsStore = useWeaponsStore(),
  { addWeapon, removeWeapon } = weaponsStore,
  { weapons } = storeToRefs(weaponsStore)
</script>

<template>
  <main>
    <div>
      <button @click="addWeapon()">Add Weapon</button>
    </div>

    <Weapon
      v-for="(weapon, id) in weapons" :key="id"
      :id="id"
      v-model:name="weapon.name"
      v-model:type="weapon.type"
      v-model:rangeBands="weapon.rangeBands"
      v-model:eccentricities="weapon.eccentricities"
      @remove:weapon="(id) => removeWeapon(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
