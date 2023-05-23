import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import BATTERIES from '@/constants/batteries'
import FiringDiagram from '@/models/firing-diagram'

export default class Condition {
  constructor () {
    this.engineRating = ENGINE_RATING_GAMUT[0],
    this.armorRating = ARMOR_RATING_GAMUT[0],
    this.firingArcs = BATTERIES.reduce((firingArcs, battery) => {
      firingArcs[battery] = new FiringDiagram()

      return firingArcs
    }, {})
  }
}
