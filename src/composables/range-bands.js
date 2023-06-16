import { ref, watchEffect } from 'vue'

import WEAPON_TYPES from '@/constants/weapon-types'
import RangeBand from '@/models/range-band'

export function useRangeBands (type, rangeBands) {
  const nextMinimumRange = ref(null)

  function addRangeBand () {
    const range = nextMinimumRange.value

    if (range) rangeBands.value.push(new RangeBand(range))
  }

  function removeRangeBand (index) {
    rangeBands.value.splice(+index, 1)
  }

  watchEffect(() => {
    let range = Math.max(0, ...rangeBands.value.map((rangeBand) => +rangeBand.maximumRange)) + 1

    if (rangeBands.value.length > 2 ||
        range > WEAPON_TYPES[type.value].maximumRange) range = false

    nextMinimumRange.value = range
  })

  return { addRangeBand, nextMinimumRange, removeRangeBand }
}
