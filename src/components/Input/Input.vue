<script lang="ts" setup>
import { useRefValue } from '@/use/ref'

interface IInputProps {
  modelValue?: string | number
  label?: string
  name?: string
  type?: 'text' | 'password' | 'number' | 'email'
}

const emit = defineEmits(['update:modelValue', 'change'])

const props = withDefaults(defineProps<IInputProps>(), {
  modelValue: '',
  type: 'text'
})

const { value: inputValue, setValue } = useRefValue(props.modelValue)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? +target.value : target.value
  setValue(value)

  emit('update:modelValue', value)
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
    placeholder=""
    @input="onInput"
    @change="onChange"
  />
</template>
