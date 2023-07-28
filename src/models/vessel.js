import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import BATTERIES from '@/constants/batteries'
import CLASSIFICATIONS from '@/constants/classifications'
import CONDITIONS from '@/constants/conditions'
import Battery from '@/models/battery'
import Condition from '@/models/condition'

export default class Vessel {
  constructor (klass = '', type = Object.keys(CLASSIFICATIONS[Object.keys(CLASSIFICATIONS)[0]])[0]) {
    this.klass = `${klass}`
    this.type = `${type}`
    this.eccentricities = []
    this.batteries = BATTERIES.reduce((batteries, battery) => {
      batteries[battery] = new Battery()

      return batteries
    }, {}),
    this.hullRating = HULL_RATING_GAMUT[0]
    this.conditions = Object.keys(CONDITIONS).reduce((conditions, condition) => {
      conditions[condition] = new Condition()

      return conditions
    }, {}),
    this.sizeCheckboxes = SIZE_CHECKBOXES_GAMUT[0]
    this.engineRating = ENGINE_RATING_GAMUT[0]
    this.armorRating = ARMOR_RATING_GAMUT[0]
  }
}
