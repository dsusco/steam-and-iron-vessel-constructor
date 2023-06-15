export default function (eccentricity, parent) {
  if (!eccentricity.prohibitedEccentricities) return true
  return eccentricity.prohibitedEccentricities.find((prohibitedEccentricity) =>
    parent.eccentricities.value.includes(prohibitedEccentricity)) === undefined
}
