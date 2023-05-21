import { ACCURACY_GAMUT, DAMAGE_GAMUT, PENETRATION_GAMUT, RANGE_GAMUT, RATE_OF_FIRE_GAMUT } from '@/constants/gamuts'

export default class RangeBand {
  constructor (range = RANGE_GAMUT[0]) {
    this.minimumRange = range
    this.maximumRange = range
    this.rateOfFire = RATE_OF_FIRE_GAMUT[0]
    this.accuracy = ACCURACY_GAMUT[0]
    this.damage = DAMAGE_GAMUT[0]
    this.penetration = PENETRATION_GAMUT[0]
  }
}
