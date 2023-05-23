function difficultyModifiers (value) {
  if (+value === 0) {
    value = '-'
  } else if (+value > 0) {
    value = `+${value}`
  } else {
    value = `${value}`
  }

  return value
}

function target (value) {
  if (+value === 0) {
    value = '-'
  } else {
    value = `${7 - +value}+`
  }

  return value
}

const
  ACCURACY_GAMUT = Array.from({ length: 5 }, (_, i) => target(i + 1)),
  ARMOR_RATING_GAMUT = Array.from({ length: 6 }, (_, i) => target(i)),
  DAMAGE_GAMUT = Array.from({ length: 6 }, (_, i) => String(i + 1)),
  ENGINE_RATING_GAMUT = Array.from({ length: 13 }, (_, i) => String(i)),
  FIRING_ARC_GAMUT = Array.from({ length: 7 }, (_, i) => String(i)),
  HULL_RATING_GAMUT = Array.from({ length: 18 }, (_, i) => String(i + 1)),
  PENETRATION_GAMUT = Array.from({ length: 6 }, (_, i) => difficultyModifiers(i)),
  RANGE_GAMUT = Array.from({ length: 18 }, (_, i) => String(i + 1)),
  RATE_OF_FIRE_GAMUT = Array.from({ length: 6 }, (_, i) => String(i + 1)),
  SIZE_CHECKBOXES_GAMUT = Array.from({ length: 6 }, (_, i) => String(i + 1))

export {
  ACCURACY_GAMUT,
  ARMOR_RATING_GAMUT,
  DAMAGE_GAMUT,
  ENGINE_RATING_GAMUT,
  FIRING_ARC_GAMUT,
  HULL_RATING_GAMUT,
  PENETRATION_GAMUT,
  RANGE_GAMUT,
  RATE_OF_FIRE_GAMUT,
  SIZE_CHECKBOXES_GAMUT
}
