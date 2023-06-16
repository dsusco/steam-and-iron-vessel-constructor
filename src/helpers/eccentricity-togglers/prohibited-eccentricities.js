import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

export default function (eccentricity, parent) {
  if (!eccentricity.prohibitedEccentricities) return true

  return eccentricity.prohibitedEccentricities.find((prohibitedEccentricity) => {
    if (typeof prohibitedEccentricity === 'string') return parent.eccentricities.value.includes(prohibitedEccentricity)

    if (!parent.eccentricities.value.includes(prohibitedEccentricity.eccentricity)) return false

    return Object.values(eccentricityTogglers).every((toggler) =>
      toggler(prohibitedEccentricity, parent))
  }) === undefined
}
