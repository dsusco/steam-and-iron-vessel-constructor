import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

export default function (eccentricity, parent) {
  if (!eccentricity.requiredEccentricities) return true

  return eccentricity.requiredEccentricities.find((requiredEccentricity) => {
    if (typeof requiredEccentricity === 'string') return parent.eccentricities.value.includes(requiredEccentricity)

    if (!parent.eccentricities.value.includes(requiredEccentricity.eccentricity)) return false

    return Object.values(eccentricityTogglers).every((toggler) =>
      toggler(requiredEccentricity, parent))
  }) !== undefined
}
