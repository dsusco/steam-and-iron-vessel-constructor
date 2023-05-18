<script setup>
const
  props = defineProps({
    weapon: { type: Object, required: true}
  })
</script>

<template>
  <fieldset>
    <legend>{{ weapon.name }}</legend>

    <label>
      Name
      <input type="text" v-model="weapon.name">
    </label>

    <button type="button" @click="$emit('removeWeapon')">×</button>
  </fieldset>
</template>

<style lang="scss" scoped>
</style>
