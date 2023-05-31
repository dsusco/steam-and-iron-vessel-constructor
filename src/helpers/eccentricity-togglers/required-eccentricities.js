export default function (eccentricity, parent, vessel = null, weapon = null) {
  if (!eccentricity.requiredEccentricities) {
    return true
  }

  return eccentricity.requiredEccentricities.find((requiredEccentricity) =>
    parent.eccentricities.includes(requiredEccentricity)) !== undefined
}
