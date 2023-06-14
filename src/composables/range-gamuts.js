import { ref, watchEffect } from 'vue'

import { RANGE_GAMUT } from '@/constants/gamuts'

export function useRangeGamuts (maximumWeaponRange, nextRangeBand, prevRangeBand, minimumRange, maximumRange) {
  const
    maximumRangeGamut = ref(null),
    minimumRangeGamut = ref(null)

  watchEffect(() => {
    const gamutEnd = nextRangeBand.value ? +nextRangeBand.value.minimumRange - 1 : +maximumWeaponRange.value

    maximumRangeGamut.value = Array.from(
      { length: Math.abs(gamutEnd - +minimumRange.value) + 1 },
      (_, i) => i + +minimumRange.value
    )
  })

  watchEffect(() => {
    const gamutStart = prevRangeBand.value ? +prevRangeBand.value.maximumRange + 1 : +RANGE_GAMUT[0]

    minimumRangeGamut.value = Array.from(
      { length: Math.abs(+maximumRange.value - gamutStart) + 1 },
      (_, i) => i + gamutStart
    )
  })

  return { maximumRangeGamut, minimumRangeGamut }
}
