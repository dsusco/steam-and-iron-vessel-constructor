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
  DAMAGE_GAMUT = Array.from({ length: 6 }, (_, i) => i + 1),
  PENETRATION_GAMUT = Array.from({ length: 6 }, (_, i) => difficultyModifiers(i)),
  RANGE_GAMUT = Array.from({ length: 18 }, (_, i) => i + 1),
  RATE_OF_FIRE_GAMUT = Array.from({ length: 6 }, (_, i) => i + 1)

export {
  ACCURACY_GAMUT,
  DAMAGE_GAMUT,
  PENETRATION_GAMUT,
  RANGE_GAMUT,
  RATE_OF_FIRE_GAMUT
}
