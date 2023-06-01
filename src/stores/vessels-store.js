import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import Vessel from '@/models/vessel'

export const useVesselsStore = defineStore('vesselStore', () => {
  const vessels = ref(useLocalStorage('vesselStore', {}))

  function addVessel () {
    const id = nanoid()

    vessels.value[id] = new Vessel()

    return id
  }

  function removeVessel (id) {
    delete vessels.value[id]
  }

  return { vessels, addVessel, removeVessel }
})
