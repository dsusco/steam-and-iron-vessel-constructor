import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import WEAPON_TYPES from '@/constants/weapon-types'

export const useWeaponsStore = defineStore('weaponStore', () => {
  const weapons = ref(useLocalStorage('weaponStore', {}))

  function addWeapon () {
    weapons.value[nanoid()] = {
      name: '',
      type: Object.keys(WEAPON_TYPES)[0]
    }
  }

  function removeWeapon (id) {
    delete weapons.value[id]
  }

  return { weapons, addWeapon, removeWeapon }
})
