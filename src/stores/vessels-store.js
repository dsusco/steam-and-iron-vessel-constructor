import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import Battery from '@/models/battery'
import Condition from '@/models/condition'

export const useVesselsStore = defineStore('vesselStore', () => {
  const vessels = ref(useLocalStorage('vesselStore', {}))

  function addVessel () {
    vessels.value[nanoid()] = {
      class: '',
      type: Object.keys(CLASSIFICATIONS[Object.keys(CLASSIFICATIONS)[0]])[0],
      batteries: {
        a: new Battery(),
        b: new Battery(),
        c: new Battery()
      },
      hullRating: HULL_RATING_GAMUT[0],
      conditions: {
        ready: new Condition(),
        damaged: new Condition(),
        crippled: new Condition()
      },
      sizeCheckboxes: SIZE_CHECKBOXES_GAMUT[0],
      engineRating: ENGINE_RATING_GAMUT[0],
      armorRating: ARMOR_RATING_GAMUT[0]
    }
  }

  function removeVessel (id) {
    delete vessels.value[id]
  }

  return { vessels, addVessel, removeVessel }
})
