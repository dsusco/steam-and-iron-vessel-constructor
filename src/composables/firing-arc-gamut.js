import { ref, watchEffect } from 'vue'

import { FIRING_ARC_GAMUT } from '@/constants/gamuts'

export function useFiringArcGamut (battery, label, nextCondition, prevCondition) {
  const firingArcGamut = ref(null)

  watchEffect(() => {
   const
    gamutStart = nextCondition.value ?
      FIRING_ARC_GAMUT.indexOf(nextCondition.value.firingArcs[battery.value][label.value]) :
      0,
    gamutEnd = prevCondition.value ?
      FIRING_ARC_GAMUT.indexOf(prevCondition.value.firingArcs[battery.value][label.value]) + 1:
      FIRING_ARC_GAMUT.length

    firingArcGamut.value = FIRING_ARC_GAMUT.slice(gamutStart, gamutEnd)
  })

  return { firingArcGamut }
}
