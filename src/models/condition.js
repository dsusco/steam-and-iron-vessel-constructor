import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT } from '@/constants/gamuts'
import FiringArcs from '@/models/firing-arcs'

export default class Condition {
  constructor () {
    this.engineRating = ENGINE_RATING_GAMUT[0],
    this.armorRating = ARMOR_RATING_GAMUT[0],
    this.firingArcs = {
      a: new FiringArcs(),
      b: new FiringArcs(),
      c: new FiringArcs()
    }
  }
}
