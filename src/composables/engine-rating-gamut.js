import { ref, watchEffect } from 'vue'

import { ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import { useClassification } from '@/composables/classification'

export function useEngineRatingGamut (type, nextCondition = ref(null), prevCondition = ref(null)) {
  const
    { classification } = useClassification(type),
    smallCraftEngineRatingGamut = ref(null),
    engineRatingGamut = ref(null)

  watchEffect(() => {
    try {
      smallCraftEngineRatingGamut.value = ENGINE_RATING_GAMUT.slice(
        0,
        CLASSIFICATIONS[classification.value][type.value].maximumEngineRating + 1)
    } catch (ignore) {}
  })

  watchEffect(() => {
    try {
      const
        gamutStart = nextCondition.value ?
          ENGINE_RATING_GAMUT.indexOf(nextCondition.value.engineRating) :
          0,
        gamutEnd = prevCondition.value ?
          ENGINE_RATING_GAMUT.indexOf(prevCondition.value.engineRating) :
          CLASSIFICATIONS[classification.value][type.value].maximumEngineRating

      engineRatingGamut.value = ENGINE_RATING_GAMUT.slice(gamutStart, gamutEnd + 1)
    } catch (ignore) {}
  })

  return { engineRatingGamut, smallCraftEngineRatingGamut }
}
