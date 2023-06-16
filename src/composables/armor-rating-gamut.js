import { ref, watchEffect } from 'vue'

import { ARMOR_RATING_GAMUT } from '@/constants/gamuts'

export function useArmorRatingGamut (nextCondition, prevCondition) {
  const armorRatingGamut = ref(null)

  watchEffect(() => {
   const
    gamutStart = nextCondition.value ?
      ARMOR_RATING_GAMUT.indexOf(nextCondition.value.armorRating) :
      0,
    gamutEnd = prevCondition.value ?
      ARMOR_RATING_GAMUT.indexOf(prevCondition.value.armorRating) + 1 :
      ARMOR_RATING_GAMUT.length

    armorRatingGamut.value = ARMOR_RATING_GAMUT.slice(gamutStart, gamutEnd)
  })

  return { armorRatingGamut }
}
