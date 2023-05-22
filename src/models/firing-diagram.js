import { FIRING_ARC_GAMUT } from '@/constants/gamuts'

export default class FiringDiagram {
  constructor () {
    this.forward = FIRING_ARC_GAMUT[0]
    this.astarboardForward = FIRING_ARC_GAMUT[0]
    this.astarboardAft = FIRING_ARC_GAMUT[0]
    this.aft = FIRING_ARC_GAMUT[0]
    this.aportAft = FIRING_ARC_GAMUT[0]
    this.aportForward = FIRING_ARC_GAMUT[0]
    this.above = FIRING_ARC_GAMUT[0]
    this.below = FIRING_ARC_GAMUT[0]
  }
}
