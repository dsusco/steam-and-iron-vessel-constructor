import { ref, watchEffect } from 'vue'

import { ACCURACY_GAMUT } from '@/constants/gamuts'
import PENETRATION_MODIFIER from '@/constants/penetration-modifier'

export function useOffensivePotential (minimumRange, maximumRange, rateOfFire, accuracy, damage, penetration) {
  const
    offensivePotential = ref(null)

  watchEffect(() => {
    offensivePotential.value =
      ((+maximumRange.value + 1 - +minimumRange.value) *
      +rateOfFire.value *
      (ACCURACY_GAMUT.indexOf(accuracy.value) + 1) / 6 *
      +damage.value * 7 / 12 *
      PENETRATION_MODIFIER[penetration.value]).toFixed(3)
  })

  return { offensivePotential }
}
