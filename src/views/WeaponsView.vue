<script setup>
import { ref } from 'vue'

import WeaponComp from '@/components/WeaponComp.vue'
import { useWeaponsStore } from '@/stores/weapons-store'

const
  activeWeapon = ref(''),
  weaponsStore = useWeaponsStore()

function setActiveWeapon (weaponId) {
console.log(weaponId)
  if (Object.keys(weaponsStore.weapons).includes(weaponId)) {
    activeWeapon.value = weaponId
  }
}

function addWeapon () {
  const weaponId = weaponsStore.addWeapon()
  setActiveWeapon(weaponId)
}

function removeWeapon (id) {
  weaponsStore.removeWeapon(id)

  if (activeWeapon.value === id) {
    setActiveWeapon(Object.keys(weaponsStore.weapons)[0])
  }
}
</script>

<template>
  <main>
    <div>
      <button @click="addWeapon()">Add Weapon</button>
    </div>

    <WeaponComp
      :class="{ active: id === activeWeapon }"
      @click="setActiveWeapon(id)"
      v-for="(weapon, id) in weaponsStore.weapons" :key="id"
      :id="id"
      :weapon="weapon"
      @remove-weapon="removeWeapon(id)" />
  </main>
</template>

<style lang="scss" scoped>
</style>
