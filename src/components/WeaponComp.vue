<script setup>
import WEAPON_TYPES from '@/constants/weapon-types'

const
  props = defineProps({
    weapon: { type: Object, required: true }
  })
</script>

<template>
  <fieldset>
    <legend>{{ weapon.name }}</legend>

    <label>
      Name
      <input type="text" v-model="weapon.name">
    </label>

    <label>
      Type
      <select v-model="weapon.type">
        <option v-for="(weaponType, type) in WEAPON_TYPES">{{ type }}</option>
      </select>
    </label>

    <button type="button" @click="$emit('removeWeapon')">×</button>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
