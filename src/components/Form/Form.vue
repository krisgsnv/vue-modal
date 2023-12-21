<script setup lang="ts">
import type { Component } from 'vue'

type TFormFields = Array<{
  type: Component
  props: {
    name: string
    label: string
    value?: string | number
    additionalText?: string
  }
}>

interface IFormProps {
  fields: TFormFields
  handleSubmit?: (e?: Event) => void
  handleCancel?: (e?: Event) => void
  columns?: number
}

withDefaults(defineProps<IFormProps>(), {
  handleSubmit: () => {},
  handleCancel: () => {},
  columns: 1
})
</script>

<template>
  <form class="form p-3" novalidate @submit.prevent.stop="handleSubmit">
    <div class="form__fields" :class="`form__fields_cols-${columns}`">
      <div v-for="{ type, props } in fields" :key="props.name" class="form-floating">
        <component :is="type" v-bind="props" v-model="props.value" />
        <label v-if="props.name" class="form-label form__label" :for="props.name">
          {{ props.label }}
        </label>
        <small v-if="props.additionalText" class="form-text form__text">
          {{ props.additionalText }}
        </small>
      </div>
    </div>

    <div class="form__buttons">
      <button type="button" @click="handleCancel" class="btn btn-light mt-4">Отмена</button>
      <button type="submit" class="btn btn-primary mt-4">Отправить</button>
    </div>
  </form>
</template>

<style lang="scss">
@import 'styles';
</style>
