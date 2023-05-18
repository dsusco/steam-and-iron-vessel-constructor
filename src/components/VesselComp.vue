<script setup>
import CLASSIFICATIONS from '@/constants/classifications'
import BatteryComp from '@/components/BatteryComp.vue'

const
  props = defineProps({
    vessel: { type: Object, required: true }
  })
</script>

<template>
  <fieldset>
    <legend>{{ vessel.class }}</legend>

    <label>
      Class
      <input type="text" v-model="vessel.class">
    </label>

    <label>
      Type
      <select v-model="vessel.type">
        <optgroup v-for="(classification, key) in CLASSIFICATIONS" :label="key">
          <option v-for="(type, key) in classification">{{ key }}</option>
        </optgroup>
      </select>
    </label>

    <button type="button" @click="$emit('removeVessel')">×</button>

    <fieldset>
      <legend>Batteries</legend>

      <BatteryComp
        v-for="(battery, key) in vessel.batteries" :key="key"
        :battery="battery"
        :label="key" />
    </fieldset>

  </fieldset>
</template>

<style lang="scss" scoped>
</style>
