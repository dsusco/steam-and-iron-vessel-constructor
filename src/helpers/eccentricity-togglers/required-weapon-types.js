import * as eccentricityTogglers from '@/helpers/eccentricity-togglers/index'

export default function (eccentricity, parent, vessel = null, weapon = null) {
  if (!eccentricity.requiredWeaponTypes) {
    return true
  }

  return eccentricity.requiredWeaponTypes.find((requiredWeaponType) => {
    if (typeof requiredWeaponType === 'string') {
      return parent.type === requiredWeaponType
    }

    if (parent.type !== requiredWeaponType.type) {
      return false
    }

    return Object.values(eccentricityTogglers).every((toggler) =>
      toggler(requiredWeaponType, parent, vessel, weapon))
  }) !== undefined
}
