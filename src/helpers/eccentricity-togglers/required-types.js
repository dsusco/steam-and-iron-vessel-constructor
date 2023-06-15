import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

export default function (eccentricity, parent) {
  if (!eccentricity.requiredTypes) return true

  return eccentricity.requiredTypes.find((requiredType) => {
    if (typeof requiredType === 'string') return parent.type.value === requiredType

    if (parent.type.value !== requiredType.type) return false

    return Object.values(eccentricityTogglers).every((toggler) =>
      toggler(requiredType, parent))
  }) !== undefined
}
