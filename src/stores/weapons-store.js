import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import Weapon from '@/models/weapon'

export const useWeaponsStore = defineStore('weaponStore', () => {
  const weapons = ref(useLocalStorage('weaponStore', {}))

  function addWeapon () {
    weapons.value[nanoid()] = new Weapon()
  }

  function removeWeapon (id) {
    delete weapons.value[id]
  }

  return { weapons, addWeapon, removeWeapon }
})
