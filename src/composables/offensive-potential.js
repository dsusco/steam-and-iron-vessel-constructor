import { ref, watchEffect } from 'vue'

import { ACCURACY_GAMUT } from '@/constants/gamuts'
import PENETRATION_MODIFIER from '@/constants/penetration-modifier'

export function useOffensivePotential (rangeBands, eccentricities) {
  const
    offensivePotential = ref(null)

  function offensivePotentialReduction (total, rangeBand) {
    return total +
      (+rangeBand.maximumRange + 1 - +rangeBand.minimumRange) *
      +rangeBand.rateOfFire *
      (ACCURACY_GAMUT.indexOf(rangeBand.accuracy) + 1) / 6 *
      +rangeBand.damage * 7 / 12 *
      PENETRATION_MODIFIER[rangeBand.penetration]
  }

  watchEffect(() => {
    offensivePotential.value = rangeBands.value.reduce(offensivePotentialReduction, 0).toFixed(3)
  })

  return { offensivePotential }
}
