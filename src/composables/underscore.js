import { ref, watchEffect } from 'vue'

export function useUnderscore (string) {
  const underscore = ref(null)

  watchEffect(() => {
    underscore.value = string.value.toLowerCase().replace(/\s+/g, '_')
  })

  return { underscore }
}
