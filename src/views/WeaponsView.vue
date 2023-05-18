<script setup>
import WeaponComp from '@/components/WeaponComp.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const weaponsStore = useWeaponsStore()
</script>

<template>
  <main>
    <div>
      <button @click="weaponsStore.addWeapon()">Add Weapon</button>
    </div>

    <WeaponComp
      v-for="(weapon, id) in weaponsStore.weapons" :key="id"
      :weapon="weapon"
      @remove-weapon="weaponsStore.removeWeapon(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
