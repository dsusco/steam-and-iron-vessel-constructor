import { ref, watchEffect } from 'vue'

export function useWeaponType (type) {
  const
    isGun = ref(null),
    isReleasedMunition = ref(null)

  watchEffect(() => {
    isGun.value = type.value === 'Guns'
    isReleasedMunition.value = type.value === 'Released Munitions'
  })

  return { isGun, isReleasedMunition }
}
