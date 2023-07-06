import { ref, watchEffect } from 'vue'

export function useHullCheckboxes (hullRating, condition) {
  const hullCheckboxes = ref(null)

  watchEffect(() => {
    const
      Ready = Math.ceil(hullRating.value / 3),
      Damaged = Math.ceil((hullRating.value - Ready) / 2),
      Crippled = hullRating.value - Ready - Damaged

    hullCheckboxes.value = {
      Ready,
      Damaged,
      Crippled
    }
  })

  return { hullCheckboxes }
}
