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
  modelValue: 'mike',
  inputType: 'text',
  placeholder: ''
})

const { value: inputValue } = useRefValue(props.modelValue)

function onChange() {
  emit('change', inputValue.value)
}
</script>

<template>
  <select class="form-select" :name="name" :value="modelValue" @change="onChange">
    <option selected value="mike">Mike</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</template>
