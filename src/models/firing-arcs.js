import { FIRING_ARC_GAMUT } from '@/constants/gamuts'

export default class FiringArcs {
  constructor (
    forward = FIRING_ARC_GAMUT[0],
    astarboardForward = forward,
    astarboardAft = astarboardForward,
    aft = astarboardAft,
    aportAft = aft,
    aportForward = aportAft,
    above = aportForward,
    below = above
  ) {
    this.forward = forward
    this.astarboardForward = astarboardForward
    this.astarboardAft = astarboardAft
    this.aft = aft
    this.aportAft = aportAft
    this.aportForward = aportForward
    this.above = above
    this.below = below
  }
}
