<script lang="ts" setup>
import { useRefValue } from '@/use/fetch'

const emit = defineEmits(['update:modelValue', 'blur', 'change'])
type TInputType = 'text' | 'password' | 'number' | 'email'

interface IVInput {
  modelValue?: string | number
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string
  inputType?: TInputType
  error?: string
}

const props = withDefaults(defineProps<IVInput>(), {
  modelValue: '',
  inputType: 'text',
  placeholder: ''
})

const { value: inputValue, setValue } = useRefValue(props.modelValue)

function onInput(event: Event) {
  const value = getValue(event)
  setValue(value)

  emit('update:modelValue', value)
}

function onBlur() {
  emit('blur', inputValue.value)
}

function onChange() {
  emit('change', inputValue.value)
}

function getValue(event: Event) {
  const target = event.target as HTMLInputElement
  return target.value.trim()
}
</script>

<template>
  <!-- <label v-if="label" class="form-label" :for="name">
    {{ label }}
  </label> -->
  <input
    ref="input"
    :value="modelValue"
    class="form-control"
    :type="inputType"
    :name="name"
    :placeholder="placeholder"
    :disabled="isDisabled"
    autocomplete="false"
    @input="onInput"
    @blur="onBlur"
    @change="onChange"
  />
</template>

<style lang="scss">
@import 'styles';
</style>
