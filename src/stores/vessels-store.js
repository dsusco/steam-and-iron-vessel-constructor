import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import CLASSIFICATIONS from '@/constants/classifications'

export const useVesselsStore = defineStore('vesselStore', () => {
  const vessels = ref(useLocalStorage('vesselStore', {}))

  function addVessel () {
    vessels.value[nanoid()] = {
      class: '',
      type: Object.keys(CLASSIFICATIONS[Object.keys(CLASSIFICATIONS)[0]])[0]
    }
  }

  function removeVessel (id) {
    delete vessels.value[id]
  }

  return { vessels, addVessel, removeVessel }
})
