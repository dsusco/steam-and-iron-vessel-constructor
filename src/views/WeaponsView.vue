<script setup>
import Weapon from '@/components/Weapon.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  weaponsStore = useWeaponsStore()
</script>

<template>
  <main>
    <div>
      <button @click="weaponsStore.addWeapon()">Add Weapon</button>
    </div>

    <Weapon
      v-for="(weapon, id) in weaponsStore.weapons" :key="id"
      :id="id"
      v-model:name="weapon.name"
      v-model:type="weapon.type"
      v-model:rangeBands="weapon.rangeBands"
      v-model:eccentricities="weapon.eccentricities"
      @remove:weapon="(id) => weaponsStore.removeWeapon(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
