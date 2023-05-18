import { nanoid } from 'nanoid/non-secure'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, FIRING_ARC_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'

export const useVesselsStore = defineStore('vesselStore', () => {
  const vessels = ref(useLocalStorage('vesselStore', {}))

  function addVessel () {
    vessels.value[nanoid()] = {
      class: '',
      type: Object.keys(CLASSIFICATIONS[Object.keys(CLASSIFICATIONS)[0]])[0],
      batteries: {
        a: { weapon: '' },
        b: { weapon: '' },
        c: { weapon: '' }
      },
      hullRating: HULL_RATING_GAMUT[0],
      conditions: {
        ready: {
          engineRating: ENGINE_RATING_GAMUT[0],
          armorRating: ARMOR_RATING_GAMUT[0],
          firingArcs:  {
            forward: FIRING_ARC_GAMUT[0],
            astarboardForward: FIRING_ARC_GAMUT[0],
            astarboardAft: FIRING_ARC_GAMUT[0],
            aft: FIRING_ARC_GAMUT[0],
            aportAft: FIRING_ARC_GAMUT[0],
            aportForward: FIRING_ARC_GAMUT[0],
            above: FIRING_ARC_GAMUT[0],
            below: FIRING_ARC_GAMUT[0]
          }
        },
        damaged: {
          engineRating: ENGINE_RATING_GAMUT[0],
          armorRating: ARMOR_RATING_GAMUT[0],
          firingArcs:  {
            forward: FIRING_ARC_GAMUT[0],
            astarboardForward: FIRING_ARC_GAMUT[0],
            astarboardAft: FIRING_ARC_GAMUT[0],
            aft: FIRING_ARC_GAMUT[0],
            aportAft: FIRING_ARC_GAMUT[0],
            aportForward: FIRING_ARC_GAMUT[0],
            above: FIRING_ARC_GAMUT[0],
            below: FIRING_ARC_GAMUT[0]
          }
        },
        crippled: {
          engineRating: ENGINE_RATING_GAMUT[0],
          armorRating: ARMOR_RATING_GAMUT[0],
          firingArcs:  {
            forward: FIRING_ARC_GAMUT[0],
            astarboardForward: FIRING_ARC_GAMUT[0],
            astarboardAft: FIRING_ARC_GAMUT[0],
            aft: FIRING_ARC_GAMUT[0],
            aportAft: FIRING_ARC_GAMUT[0],
            aportForward: FIRING_ARC_GAMUT[0],
            above: FIRING_ARC_GAMUT[0],
            below: FIRING_ARC_GAMUT[0]
          }
        }
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
