import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'
import Battery from '@/models/battery'
import Condition from '@/models/condition'

export default class Vessel {
  constructor (klass = '', type = Object.keys(CLASSIFICATIONS[Object.keys(CLASSIFICATIONS)[0]])[0]) {
    this.class = klass
    this.type = type
    this.batteries = {
      a: new Battery(),
      b: new Battery(),
      c: new Battery()
    }
    this.hullRating = HULL_RATING_GAMUT[0]
    this.conditions = {
      ready: new Condition(),
      damaged: new Condition(),
      crippled: new Condition()
    }
    this.sizeCheckboxes = SIZE_CHECKBOXES_GAMUT[0]
    this.engineRating = ENGINE_RATING_GAMUT[0]
    this.armorRating = ARMOR_RATING_GAMUT[0]
  }
}
