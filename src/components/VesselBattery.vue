<script setup>
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
        <option v-for="(weapon, key) in weaponsStore.weapons" :key="key" :value="key">{{ weapon.name || key }}</option>
      </select>
    </label>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
