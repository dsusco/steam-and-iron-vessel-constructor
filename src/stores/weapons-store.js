import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import Weapon from '@/models/weapon'

export const useWeaponsStore = defineStore('weaponStore', () => {
  const weapons = ref(useLocalStorage('weaponStore', {}))

  function addWeapon () {
    const id = nanoid()

    weapons.value[id] = new Weapon()

    return id
  }

  function removeWeapon (id) {
    delete weapons.value[id]
  }

  return { weapons, addWeapon, removeWeapon }
})
