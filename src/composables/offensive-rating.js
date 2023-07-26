import { storeToRefs } from 'pinia'
import { ref, toRef, watchEffect } from 'vue'

import ARC_MODIFIERS from '@/constants/arc-modifiers'
import WEAPON_TYPES from '@/constants/weapon-types'
import { useHullCheckboxes } from '@/composables/hull-checkboxes'
import { useWeaponOffensivePotential } from '@/composables/weapon-offensive-potential'
import { useWeaponsStore } from '@/stores/weapons-store'

export function useOffensiveRating (hullRating, batteries, conditions) {
  const
    offensiveRating = ref(null),
    { weapons } = storeToRefs(useWeaponsStore())

  function weightedWeaponsReduction (hullCheckboxes, weapon, batteryLabel) {
    return Object.entries(conditions.value).reduce((conditionsWeaponCount, [conditionLabel, condition]) => {
      return WEAPON_TYPES[weapon.type].firingArcs.reduce((arcsWeaponCount, firingArc) => {
        return arcsWeaponCount +
          hullCheckboxes.value[conditionLabel] / hullRating.value *
          condition.firingArcs[batteryLabel][firingArc] * ARC_MODIFIERS[firingArc]
      }, conditionsWeaponCount)
    }, 0)
  }

  function batteryOffensivePotentialReduction (offensivePotential, [batteryLabel, battery]) {
    const weapon = weapons.value[battery.weaponId]

    if (!weapon) return offensivePotential

    const
      { hullCheckboxes } = useHullCheckboxes(
        hullRating
      ),
      { weaponOffensivePotential } = useWeaponOffensivePotential(
        toRef(weapon, 'rangeBands'),
        toRef(weapon, 'eccentricities')
      )

    return offensivePotential +
      weaponOffensivePotential.value * weightedWeaponsReduction(hullCheckboxes, weapon, batteryLabel)
  }

  watchEffect(() => {
    offensiveRating.value =
      +Object.entries(batteries.value).reduce(batteryOffensivePotentialReduction, 0).toFixed(3)
  })

  return { offensiveRating }
}
