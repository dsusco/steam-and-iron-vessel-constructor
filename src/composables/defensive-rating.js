import { ref, watchEffect } from 'vue'

import { ARMOR_RATING_GAMUT } from '@/constants/gamuts'
import { useClassification } from '@/composables/classification'
import { useHullCheckboxes } from '@/composables/hull-checkboxes'

export function useDefensiveRating (type, hullRating, conditions, sizeCheckboxes, armorRating, eccentricities) {
  const
    defensiveRating = ref(null),
    { isColossal, isSmallCraft } = useClassification(type),
    { hullCheckboxes } = useHullCheckboxes(hullRating)

  function defensiveIntegrant(number, armorRating) {
    return +number * 6 / (6 - ARMOR_RATING_GAMUT.indexOf(armorRating))
  }

  watchEffect(() => {
    if (isColossal.value) {
      defensiveRating.value = Object.entries(conditions.value).reduce((defensiveRating, [label, condition]) => {
        return defensiveRating + defensiveIntegrant(hullCheckboxes.value[label], condition.armorRating)
      }, 0)
    } else if (isSmallCraft.value) {
      defensiveRating.value = defensiveIntegrant(sizeCheckboxes.value, armorRating.value)
    } else {
      defensiveRating.value = 0
    }

    // agile/agile+
    // reinforced armor
    // thick bottom/rear/top armor
  })

  return { defensiveRating }
}
