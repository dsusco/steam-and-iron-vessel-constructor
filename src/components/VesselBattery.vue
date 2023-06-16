<script setup>
import { computed } from 'vue'

import { useWeaponsStore } from '@/stores/weapons-store'

const
  emit = defineEmits([
    'update:weaponId'
  ]),
  props = defineProps({
    label: { type: String, required: true },
    weaponId: { type: String }
  }),
  weaponsStore = useWeaponsStore()
</script>

<template>
  <fieldset>
    <legend>{{ label }}</legend>

    <label>
      Weapon
      <select
        :value="weaponId"
        @change="emit('update:weaponId', $event.target.value)">
        <option value=""></option>
        <option v-for="(weapon, key) in weaponsStore.weapons" :value="key">{{ weapon.name || key }}</option>
      </select>
    </label>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
