import { FIRING_ARC_GAMUT } from '@/constants/gamuts'
import WEAPON_TYPES from '@/constants/weapon-types'

export default class FiringDiagram {
  constructor () {
    Object.keys(WEAPON_TYPES)
      .reduce((arcs, weaponType) => arcs.concat(WEAPON_TYPES[weaponType].firingArcs), [])
        .forEach((arc) => this[arc] = FIRING_ARC_GAMUT[0])
  }
}
