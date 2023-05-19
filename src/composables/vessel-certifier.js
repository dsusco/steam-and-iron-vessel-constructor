import { ARMOR_RATING_GAMUT, ENGINE_RATING_GAMUT, FIRING_ARC_GAMUT, HULL_RATING_GAMUT, SIZE_CHECKBOXES_GAMUT } from '@/constants/gamuts'
import CLASSIFICATIONS from '@/constants/classifications'

function useArmorRatingGamuts (vessel) {
  const
    ready = ARMOR_RATING_GAMUT.slice(
      Math.max(0, ARMOR_RATING_GAMUT.indexOf(vessel.conditions.damaged.armorRating)),
      ARMOR_RATING_GAMUT.length),
    damaged = ARMOR_RATING_GAMUT.slice(
      Math.max(0, ARMOR_RATING_GAMUT.indexOf(vessel.conditions.crippled.armorRating)),
      ARMOR_RATING_GAMUT.indexOf(vessel.conditions.ready.armorRating) + 1),
    crippled = ARMOR_RATING_GAMUT.slice(
      0,
      ARMOR_RATING_GAMUT.indexOf(vessel.conditions.damaged.armorRating) + 1)

  return { ready, damaged, crippled }
}

function useBatteryIf (vessel) {
  return {
    a: true,
    b: vessel.batteries.a.weapon !== '',
    c: vessel.batteries.b.weapon !== ''
  }
}

function useClassification (vessel) {
  return Object.keys(CLASSIFICATIONS).find((c) => Object.keys(CLASSIFICATIONS[c]).includes(vessel.type))
}

function useEngineRatingGamuts (vessel) {
  const
    length = CLASSIFICATIONS[useClassification(vessel)][vessel.type].maximumEngineRating,
    smallCraft = ENGINE_RATING_GAMUT.slice(0, length + 1),
    ready = ENGINE_RATING_GAMUT.slice(
      Math.max(0, +vessel.conditions.damaged.engineRating),
      length + 1),
    damaged = ENGINE_RATING_GAMUT.slice(
      Math.max(0, +vessel.conditions.crippled.engineRating),
      Math.min(length, +vessel.conditions.ready.engineRating) + 1),
    crippled = ENGINE_RATING_GAMUT.slice(
      0,
      Math.min(length, +vessel.conditions.damaged.engineRating) + 1)

  return { ready, damaged, crippled, smallCraft }
}

function useFiringArcGamuts (vessel) {
  const
    conditions = ['ready', 'damaged', 'crippled'],
    batteries = ['a', 'b', 'c'],
    firingArcs = ['forward', 'astarboardForward', 'astarboardAft', 'aft', 'aportAft', 'aportForward', 'above', 'below']

  return conditions.reduce(
    (gamuts, condition) => {
      gamuts[condition] = batteries.reduce(
        (gamuts, battery) => {
          gamuts[battery] = firingArcs.reduce(
            (gamuts, firingArc) => {
              switch (condition) {
                case 'ready':
                  gamuts[firingArc] = FIRING_ARC_GAMUT.slice(
                    Math.max(0, +vessel.conditions.damaged.firingArcs[battery][firingArc]),
                    FIRING_ARC_GAMUT.length
                  )
                  break;
                case 'damaged':
                  gamuts[firingArc] = FIRING_ARC_GAMUT.slice(
                    Math.max(0, +vessel.conditions.crippled.firingArcs[battery][firingArc]),
                    +vessel.conditions.ready.firingArcs[battery][firingArc] + 1)
                  break;
                case 'crippled':
                  gamuts[firingArc] = FIRING_ARC_GAMUT.slice(
                    0,
                    +vessel.conditions.damaged.firingArcs[battery][firingArc] + 1)
                  break;
              }

              return gamuts
            },
            {}
          )
          return gamuts
        },
        {}
      )
      return gamuts
    },
    {}
  )
}

function useHullCheckboxes (vessel) {
  const
    ready = Math.ceil(+vessel.hullRating / 3),
    damaged = Math.ceil((+vessel.hullRating - ready) / 2),
    crippled = +vessel.hullRating - ready - damaged

  return { ready, damaged, crippled }
}

export {
  useArmorRatingGamuts,
  useBatteryIf,
  useClassification,
  useEngineRatingGamuts,
  useFiringArcGamuts,
  useHullCheckboxes
}
