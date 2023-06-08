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

  function setClassification () {
    classification.value = Object.keys(CLASSIFICATIONS).find((c) =>
      Object.keys(CLASSIFICATIONS[c]).includes(unref(type))
    )
    isColossal.value = classification.value === 'Colossal'
    isSmallCraft.value = classification.value === 'Small Craft'
    isAerovessel.value = unref(type) === 'Aeronef' || unref(type) === 'Small Craft'
    isAquavessel.value = unref(type) === 'Aquanef' || unref(type) === 'Aquacraft'
    isTerravessel.value = unref(type) === 'Ironclad' || unref(type) === 'Contraptions'
  }

  if (isRef(type)) {
    watchEffect(setClassification)
  } else {
    setClassification()
  }

  return { classification, isColossal, isSmallCraft, isAerovessel, isAquavessel, isTerravessel }
}
