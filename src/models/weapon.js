import WEAPON_TYPES from '@/constants/weapon-types'

export default class Weapon {
  constructor (name = '', type = Object.keys(WEAPON_TYPES)[0]) {
    this.name = name
    this.type = type
    this.rangeBands = []
    this.eccentricities = []
  }
}
