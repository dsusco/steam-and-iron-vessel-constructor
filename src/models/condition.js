import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import FiringDiagram from '@/models/firing-diagram'

export default class Condition {
  constructor () {
    this.engineRating = ENGINE_RATING_GAMUT[0],
    this.armorRating = ARMOR_RATING_GAMUT[0],
    this.firingArcs = {
      a: new FiringDiagram(),
      b: new FiringDiagram(),
      c: new FiringDiagram()
    }
  }
}
