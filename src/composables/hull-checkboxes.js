import { ref, isRef, unref, watchEffect } from 'vue'

export function useHullCheckboxes (hullRating, condition) {
  const
    hullCheckboxes = ref(null)

  function setHullCheckboxes () {
    const
      ready = Math.ceil(unref(hullRating) / 3),
      damaged = Math.ceil((unref(hullRating) - ready) / 2),
      crippled = unref(hullRating) - ready - damaged

    switch (unref(condition)) {
      case 'ready':
        hullCheckboxes.value = ready
        break;
      case 'damaged':
        hullCheckboxes.value = damaged
        break;
      case 'crippled':
        hullCheckboxes.value = crippled
        break;
      default:
        hullCheckboxes.value = null
    }
  }

  if (isRef(hullRating)) {
    watchEffect(setHullCheckboxes)
  } else {
    setHullCheckboxes()
  }

  return { hullCheckboxes }
}
