import { ref, isRef, unref, watchEffect } from 'vue'

import CLASSIFICATIONS from '@/constants/classifications'

export function useClassification (type) {
  const
    classification = ref(null),
    isColossal = ref(null),
    isSmallCraft = ref(null),
    isAerovessel = ref(null),
    isAquavessel = ref(null),
    isTerravessel = ref(null)

  watchEffect(() => {
    classification.value = Object.keys(CLASSIFICATIONS).find((c) =>
      Object.keys(CLASSIFICATIONS[c]).includes(type.value)
    )
    isColossal.value = classification.value === 'Colossal'
    isSmallCraft.value = classification.value === 'Small Craft'
    isAerovessel.value = type.value === 'Aeronef' || type.value === 'Small Craft'
    isAquavessel.value = type.value === 'Aquanef' || type.value === 'Aquacraft'
    isTerravessel.value = type.value === 'Ironclad' || type.value === 'Contraptions'
  })

  return { classification, isColossal, isSmallCraft, isAerovessel, isAquavessel, isTerravessel }
}
