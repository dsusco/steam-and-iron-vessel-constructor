export default function (eccentricity, parent, vessel = null, weapon = null) {
  if (!eccentricity.prohibitedEccentricities) {
    return true
  }

  return eccentricity.prohibitedEccentricities.find((prohibitedEccentricity) =>
    parent.eccentricities.includes(prohibitedEccentricity)) === undefined
}
