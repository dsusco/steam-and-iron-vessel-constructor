import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

export default function (eccentricity, parent, vessel = null, weapon = null) {
  if (!eccentricity.requiredVesselTypes) {
    return true
  }

  return eccentricity.requiredVesselTypes.find((requiredVesselType) => {
    if (typeof requiredVesselType === 'string') {
      return parent.type === requiredVesselType
    }

    if (parent.type !== requiredVesselType.type) {
      return false
    }

    return Object.values(eccentricityTogglers).every((toggler) =>
      toggler(requiredVesselType, parent, vessel, weapon))
  }) !== undefined
}
