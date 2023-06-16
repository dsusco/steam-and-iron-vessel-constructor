import { ref, watchEffect } from 'vue'

export function useHullCheckboxes (hullRating, condition) {
  const hullCheckboxes = ref(null)

  watchEffect(() => {
    const
      ready = Math.ceil(hullRating.value / 3),
      damaged = Math.ceil((hullRating.value - ready) / 2),
      crippled = hullRating.value - ready - damaged

    hullCheckboxes.value = {
      ready,
      damaged,
      crippled
    }
  })

  return { hullCheckboxes }
}
