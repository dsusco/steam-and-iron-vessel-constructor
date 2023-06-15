import { ref, watchEffect } from 'vue'

import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

export function useEccentricities (parent, eccentricities) {
  const enabledEccentricities = ref(null)

  function toggleEccentricity (value, checked) {
    if (checked) {
      parent.eccentricities.value.push(value)
    } else {
      parent.eccentricities.value.splice(parent.eccentricities.value.indexOf(value), 1)
    }
  }

  watchEffect(() => {
    enabledEccentricities.value = Object.keys(eccentricities).reduce((enabledEccentricities, abbr) => {
      enabledEccentricities[abbr] = Object.values(eccentricityTogglers).every((toggler) =>
        toggler(eccentricities[abbr], parent))
      return enabledEccentricities
    }, {})
  })

  return { enabledEccentricities, toggleEccentricity }
}
