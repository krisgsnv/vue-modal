<script lang="ts" setup>
import { useRefValue } from '@/use/ref'

const emit = defineEmits(['update:modelValue', 'blur', 'change'])
type TInputType = 'text' | 'password' | 'number' | 'email'

interface IVInput {
  modelValue?: string | number
  label?: string
  name?: string
  type?: TInputType
}

const props = withDefaults(defineProps<IVInput>(), {
  modelValue: '',
  type: 'text',
})

const { value: inputValue, setValue } = useRefValue(props.modelValue)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? +target.value : target.value
  setValue(value)

  emit('update:modelValue', value)
}

function onBlur() {
  emit('blur', inputValue.value)
}

function onChange() {
  emit('change', inputValue.value)
}
</script>

<template>
  <input
    :value="modelValue"
    class="form-control"
    :type="type"
    :name="name"
    autocomplete="false"
    placeholder=''
    @input="onInput"
    @blur="onBlur"
    @change="onChange"
  />
</template>

<style lang="scss">
@import 'styles';
</style>
