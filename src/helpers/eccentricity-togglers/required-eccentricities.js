export default function (eccentricity, parent) {
  if (!eccentricity.requiredEccentricities) return true

  return eccentricity.requiredEccentricities.find((requiredEccentricity) =>
    parent.eccentricities.value.includes(requiredEccentricity)) !== undefined
}
