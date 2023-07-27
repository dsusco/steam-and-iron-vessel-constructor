import { ref, unref, watchEffect } from 'vue'

export function useVariantName (string) {
  const variantName = ref(null)

  watchEffect(() => {
    const value = unref(string).replace(/\s/g, '')
    variantName.value = '_' + value.charAt(0).toLowerCase() + value.slice(1)
  })

  return { variantName }
}
